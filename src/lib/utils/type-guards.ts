/** @format */

type PlainObject = Record<PropertyKey, unknown>;
export const checkIsObject = (object: unknown): object is PlainObject =>
	!!object && typeof object === "object" && !Array.isArray(object);
