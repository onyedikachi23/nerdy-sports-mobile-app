/**
 * @format
 * @file scripts/typecheck-filtered.js
 *
 * This script executes the TypeScript compiler (`tsc --noEmit`) to perform type-checking.
 * It filters the raw output to ignore errors originating from specified directories
 * (e.g., `node_modules` or `src/components/ui`). For the errors that are not filtered,
 * the script programmatically re-applies custom color highlighting and formatting
 * using the 'chalk' library. It also correctly handles multi-line error messages
 * by ensuring all parts of an excluded error are suppressed. Other non-error output
 * from `tsc` (like warnings and informational messages) is preserved.
 */

const { spawnSync } = require("child_process");
const path = require("path");
const os = require("os");

// Use a dynamic import for chalk because it's an ES Module in recent versions.
let chalk;

// Function to strip ANSI escape codes (color codes) from a string.
// This is essential to ensure our regex can reliably parse paths
// from tsc's potentially colored output.
const stripAnsi = (str) => {
	// eslint-disable-next-line no-control-regex
	return str.replace(
		/[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqrySsfb-z]/g,
		"",
	);
};

// Wrap the main script logic in an async IIFE to allow for dynamic import of chalk.
(async () => {
	try {
		// Dynamically import chalk. This will return a Promise that resolves to the chalk module.
		const chalkModule = await import("chalk");
		chalk = chalkModule.default;

		// Define paths from which type errors should be excluded.
		// These paths are relative to the project root and will be normalized for the OS.
		const pathsToExcludeErrorsFrom = [
			path.normalize("src/components/ui"),
			path.normalize("node_modules"),
		];

		// Determine the absolute paths for robust comparison.
		// Convert to lowercase immediately for case-insensitive matching.
		const absoluteExcludedPaths = pathsToExcludeErrorsFrom.map((p) =>
			path.resolve(process.cwd(), p).toLowerCase(),
		);

		// Locate the local TypeScript executable.
		const tscExecutable = path.join(
			__dirname,
			"..",
			"node_modules",
			".bin",
			"tsc",
		);

		console.log(chalk.bold("Running type check..."));

		// Execute tsc --noEmit and capture both stdout and stderr.
		const tscResult = spawnSync(tscExecutable, ["--noEmit"], {
			encoding: "utf8",
		});

		// Get the combined output. This output will contain ANSI color codes.
		let combinedOutput =
			(tscResult.stdout || "") + (tscResult.stderr || "");

		// Arrays to store different types of output.
		let otherTscOutputLines = []; // For warnings, info, progress, etc. (original colored lines)
		let errorsToReport = []; // For custom-formatted errors that pass the filter.
		let totalErrorsCountedByScript = 0; // Counts all file-specific and general errors before filtering.

		// State to handle multi-line error filtering.
		let isCurrentlyFilteringMultiLineError = false;

		if (combinedOutput) {
			const allOutputLines = combinedOutput
				.split("\n")
				.filter((line) => line.trim() !== "");

			for (const line of allOutputLines) {
				// Create a 'clean' version of the line (without ANSI codes) for reliable regex matching.
				const cleanLine = stripAnsi(line);

				// Regex to parse file path, line, column, error code, and message from clean TypeScript error formats.
				const errorPattern =
					/^(.*?)(?:\((\d+),(\d+)\)|:(\d+):(\d+))(?::)?(?: -)? error (TS\d+): (.*)$/;
				const match = cleanLine.match(errorPattern);

				if (match) {
					// This is a file-specific error line.
					totalErrorsCountedByScript++;
					isCurrentlyFilteringMultiLineError = false; // Reset multi-line filter as a new error starts.

					const rawErrorFilePath = match[1].trim();
					const absoluteErrorFilePath = path.isAbsolute(
						rawErrorFilePath,
					)
						? rawErrorFilePath.toLowerCase()
						: path
								.resolve(process.cwd(), rawErrorFilePath)
								.toLowerCase();

					const isFromExcludedLocation = absoluteExcludedPaths.some(
						(excludedPath) =>
							absoluteErrorFilePath.startsWith(
								excludedPath + path.sep,
							) || absoluteErrorFilePath === excludedPath,
					);

					if (isFromExcludedLocation) {
						isCurrentlyFilteringMultiLineError = true; // Start filtering multi-line content.
					} else {
						// If not filtered, format the error with chalk and add to errorsToReport.
						const lineNumber = match[2] || match[4];
						const columnNumber = match[3] || match[5];
						const errorCode = match[6];
						const errorMessage = match[7];

						const formattedError =
							chalk.cyan(rawErrorFilePath) +
							chalk.gray(`:${lineNumber}:${columnNumber}`) +
							chalk.red.bold(` - error ${errorCode}: `) +
							chalk.white(errorMessage);
						errorsToReport.push(formattedError);
					}
				} else if (
					cleanLine.includes("error TS") &&
					!cleanLine.includes("Found ")
				) {
					// This is a general TypeScript error (e.g., config issues) not tied to a file.
					// These errors cannot be filtered by location and are always included.
					totalErrorsCountedByScript++;
					isCurrentlyFilteringMultiLineError = false; // Reset multi-line filter for general errors.
					errorsToReport.push(chalk.red.bold(line)); // Color general errors red
				} else if (isCurrentlyFilteringMultiLineError) {
					// This line is a continuation of a multi-line error that we are filtering.
					// Check for significant indentation to confirm it's part of the continuation.
					// TSC multi-line errors typically start with at least 2 spaces of indentation.
					if (cleanLine.startsWith("  ") || cleanLine.trim() === "") {
						// This line appears to be a continuation of a filtered error. Do nothing (filter it).
					} else {
						// This line is not indented, so the multi-line error context has likely ended.
						isCurrentlyFilteringMultiLineError = false;
						// Since it's not a new error and not part of a filtered multi-line, treat as other output.
						otherTscOutputLines.push(line);
					}
				} else {
					// This line is not an error and not part of a multi-line error being filtered.
					// Add it to otherTscOutputLines to be printed.
					otherTscOutputLines.push(line);
				}
			}
		}

		// --- Final Output and Exit Logic ---

		// Print other (non-error) tsc output first.
		if (otherTscOutputLines.length > 0) {
			console.log(otherTscOutputLines.join(os.EOL)); // Use os.EOL for proper line breaks
		}

		// Print all the collected non-filtered errors with a gap between them.
		if (errorsToReport.length > 0) {
			// Add a newline before printing errors if there was other output, for separation.
			if (otherTscOutputLines.length > 0) {
				console.error(os.EOL);
			}
			console.error(errorsToReport.join(os.EOL + os.EOL)); // Added an extra EOL for the gap
		}

		if (errorsToReport.length > 0) {
			// Report errors found outside excluded paths and exit with a failure status.
			console.error(chalk.red.bold(os.EOL + "--- Type Check Failed ---"));
			console.error(
				chalk.red(
					`${os.EOL}Found ${errorsToReport.length} errors in files outside of "${pathsToExcludeErrorsFrom.join('", "')}".`,
				),
			);
			console.error(
				chalk.red(
					"Please fix these issues before proceeding with the build.",
				),
			);
			console.error(chalk.red("-------------------------"));
			process.exit(1);
		} else if (tscResult.status !== 0) {
			// If tsc itself returned a non-zero status (meaning it found errors),
			// but all of those errors were successfully filtered out by our script,
			// then we consider our custom type check to have passed.
			console.log(chalk.green.bold(`${os.EOL}--- Type Check Passed ---`));
			console.log(
				chalk.green(
					`Type checking completed successfully. All ${totalErrorsCountedByScript} original errors found were within "${pathsToExcludeErrorsFrom.join('", "')}".`,
				),
			);
			console.log(chalk.green("-------------------------"));
			process.exit(0);
		} else {
			// If tsc exited cleanly (status 0) and no errors were detected outside
			// excluded paths, the type check passed entirely.
			console.log(chalk.green.bold(`${os.EOL}--- Type Check Passed ---`));
			console.log(
				chalk.green(
					"Type checking completed successfully with no errors.",
				),
			);
			console.log(chalk.green("-------------------------"));
			process.exit(0);
		}
	} catch (error) {
		console.error(chalk.red.bold("An unexpected error occurred:"), error);
		process.exit(1);
	}
})(); // Immediately invoke the async function
