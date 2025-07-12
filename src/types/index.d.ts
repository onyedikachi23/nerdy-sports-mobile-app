/** @format */
import type React from "react";

type ReadableProps<T extends React.ComponentType> = Prettify<
	React.ComponentProps<T>
>;
