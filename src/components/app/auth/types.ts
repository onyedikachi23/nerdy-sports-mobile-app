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
    ReactFormExtendedApi,
} from "@tanstack/react-form";

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

export type FormApiWithDefaults<
	TFormData = any,
	TOnMount extends undefined | FormValidateOrFn<TFormData> = any,
	TOnChange extends undefined | FormValidateOrFn<TFormData> = any,
	TOnChangeAsync extends undefined | FormAsyncValidateOrFn<TFormData> = any,
	TOnBlur extends undefined | FormValidateOrFn<TFormData> = any,
	TOnBlurAsync extends undefined | FormAsyncValidateOrFn<TFormData> = any,
	TOnSubmit extends undefined | FormValidateOrFn<TFormData> = any,
	TOnSubmitAsync extends undefined | FormAsyncValidateOrFn<TFormData> = any,
	TOnServer extends undefined | FormAsyncValidateOrFn<TFormData> = any,
	TSubmitMeta = any,
> = ReactFormExtendedApi<
	TFormData,
	TOnMount,
	TOnChange,
	TOnChangeAsync,
	TOnBlur,
	TOnBlurAsync,
	TOnSubmit,
	TOnSubmitAsync,
	TOnServer,
	TSubmitMeta
>;
