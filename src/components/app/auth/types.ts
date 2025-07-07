/** @format */

// prettier-ignore
/* eslint-disable @typescript-eslint/no-explicit-any */

import type {
	DeepKeys,
	DeepValue,
	FieldApi,
	FieldAsyncValidateOrFn,
	FieldMetaDerived,
	FieldValidateOrFn,
	FormAsyncValidateOrFn,
	FormValidateOrFn,
} from "@tanstack/react-form";
import type z from "zod/v4";

export type FieldApiWithDefaults<
	TParentData = any,
	TName extends DeepKeys<TParentData> = any,
	TData extends DeepValue<TParentData, TName> = any,
	TOnMount extends
		| undefined
		| FieldValidateOrFn<TParentData, TName, TData> = any,
	TOnChange extends
		| undefined
		| FieldValidateOrFn<TParentData, TName, TData> = any,
	TOnChangeAsync extends
		| undefined
		| FieldAsyncValidateOrFn<TParentData, TName, TData> = any,
	TOnBlur extends
		| undefined
		| FieldValidateOrFn<TParentData, TName, TData> = any,
	TOnBlurAsync extends
		| undefined
		| FieldAsyncValidateOrFn<TParentData, TName, TData> = any,
	TOnSubmit extends
		| undefined
		| FieldValidateOrFn<TParentData, TName, TData> = any,
	TOnSubmitAsync extends
		| undefined
		| FieldAsyncValidateOrFn<TParentData, TName, TData> = any,
	TFormOnMount extends undefined | FormValidateOrFn<TParentData> = any,
	TFormOnChange extends undefined | FormValidateOrFn<TParentData> = any,
	TFormOnChangeAsync extends
		| undefined
		| FormAsyncValidateOrFn<TParentData> = any,
	TFormOnBlur extends undefined | FormValidateOrFn<TParentData> = any,
	TFormOnBlurAsync extends
		| undefined
		| FormAsyncValidateOrFn<TParentData> = any,
	TFormOnSubmit extends undefined | FormValidateOrFn<TParentData> = any,
	TFormOnSubmitAsync extends
		| undefined
		| FormAsyncValidateOrFn<TParentData> = any,
	TFormOnServer extends undefined | FormAsyncValidateOrFn<TParentData> = any,
	TParentSubmitMeta = any,
> = FieldApi<
	TParentData,
	TName,
	TData,
	TOnMount,
	TOnChange,
	TOnChangeAsync,
	TOnBlur,
	TOnBlurAsync,
	TOnSubmit,
	TOnSubmitAsync,
	TFormOnMount,
	TFormOnChange,
	TFormOnChangeAsync,
	TFormOnBlur,
	TFormOnBlurAsync,
	TFormOnSubmit,
	TFormOnSubmitAsync,
	TFormOnServer,
	TParentSubmitMeta
>;

export type FieldMetaDerivedWithDefaults<
	TParentData = any,
	TName extends DeepKeys<TParentData> = any,
	TData extends DeepValue<TParentData, TName> = any,
	TOnMount extends
		| undefined
		| FieldValidateOrFn<TParentData, TName, TData> = any,
	TOnChange extends
		| undefined
		| FieldValidateOrFn<TParentData, TName, TData> = any,
	TOnChangeAsync extends
		| undefined
		| FieldAsyncValidateOrFn<TParentData, TName, TData> = any,
	TOnBlur extends
		| undefined
		| FieldValidateOrFn<TParentData, TName, TData> = any,
	TOnBlurAsync extends
		| undefined
		| FieldAsyncValidateOrFn<TParentData, TName, TData> = any,
	TOnSubmit extends
		| undefined
		| FieldValidateOrFn<TParentData, TName, TData> = any,
	TOnSubmitAsync extends
		| undefined
		| FieldAsyncValidateOrFn<TParentData, TName, TData> = any,
	TFormOnMount extends undefined | FormValidateOrFn<TParentData> = any,
	TFormOnChange extends undefined | FormValidateOrFn<TParentData> = any,
	TFormOnChangeAsync extends
		| undefined
		| FormAsyncValidateOrFn<TParentData> = any,
	TFormOnBlur extends undefined | FormValidateOrFn<TParentData> = any,
	TFormOnBlurAsync extends
		| undefined
		| FormAsyncValidateOrFn<TParentData> = any,
	TFormOnSubmit extends undefined | FormValidateOrFn<TParentData> = any,
	TFormOnSubmitAsync extends
		| undefined
		| FormAsyncValidateOrFn<TParentData> = any,
> = FieldMetaDerived<
	TParentData,
	TName,
	TData,
	TOnMount,
	TOnChange,
	TOnChangeAsync,
	TOnBlur,
	TOnBlurAsync,
	TOnSubmit,
	TOnSubmitAsync,
	TFormOnMount,
	TFormOnChange,
	TFormOnChangeAsync,
	TFormOnBlur,
	TFormOnBlurAsync,
	TFormOnSubmit,
	TFormOnSubmitAsync
>;

type ZodErrorObj = Pick<z.ZodError["issues"][number], "path" | "message">;

export type FieldApiZod<
	TParentData = any,
	TName extends DeepKeys<TParentData> = any,
	TData extends DeepValue<TParentData, TName> = any,
	TOnMount extends
		| undefined
		| FieldValidateOrFn<TParentData, TName, TData> = any,
	TOnChange extends
		| undefined
		| FieldValidateOrFn<TParentData, TName, TData> = any,
	TOnChangeAsync extends
		| undefined
		| FieldAsyncValidateOrFn<TParentData, TName, TData> = any,
	TOnBlur extends
		| undefined
		| FieldValidateOrFn<TParentData, TName, TData> = any,
	TOnBlurAsync extends
		| undefined
		| FieldAsyncValidateOrFn<TParentData, TName, TData> = any,
	TOnSubmit extends
		| undefined
		| FieldValidateOrFn<TParentData, TName, TData> = any,
	TOnSubmitAsync extends
		| undefined
		| FieldAsyncValidateOrFn<TParentData, TName, TData> = any,
	TFormOnMount extends undefined | FormValidateOrFn<TParentData> = any,
	TFormOnChange extends undefined | FormValidateOrFn<TParentData> = any,
	TFormOnChangeAsync extends
		| undefined
		| FormAsyncValidateOrFn<TParentData> = any,
	TFormOnBlur extends undefined | FormValidateOrFn<TParentData> = any,
	TFormOnBlurAsync extends
		| undefined
		| FormAsyncValidateOrFn<TParentData> = any,
	TFormOnSubmit extends undefined | FormValidateOrFn<TParentData> = any,
	TFormOnSubmitAsync extends
		| undefined
		| FormAsyncValidateOrFn<TParentData> = any,
	TFormOnServer extends undefined | FormAsyncValidateOrFn<TParentData> = any,
	TParentSubmitMeta = any,
> =
	FieldApi<
		TParentData,
		TName,
		TData,
		TOnMount,
		TOnChange,
		TOnChangeAsync,
		TOnBlur,
		TOnBlurAsync,
		TOnSubmit,
		TOnSubmitAsync,
		TFormOnMount,
		TFormOnChange,
		TFormOnChangeAsync,
		TFormOnBlur,
		TFormOnBlurAsync,
		TFormOnSubmit,
		TFormOnSubmitAsync,
		TFormOnServer,
		TParentSubmitMeta
	> extends infer F
		? Omit<F, "state"> & {
				state: "state" extends keyof F
					? Omit<F["state"], "meta"> & {
							meta: SafeOmit<
								FieldMetaDerivedWithDefaults,
								"errors"
							> & {
								errors: (Partial<ZodErrorObj> | undefined)[];
							};
						}
					: never;
			}
		: never;
