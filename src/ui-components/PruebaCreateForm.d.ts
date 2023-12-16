/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PruebaCreateFormInputValues = {
    nombre?: string;
};
export declare type PruebaCreateFormValidationValues = {
    nombre?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PruebaCreateFormOverridesProps = {
    PruebaCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    nombre?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PruebaCreateFormProps = React.PropsWithChildren<{
    overrides?: PruebaCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PruebaCreateFormInputValues) => PruebaCreateFormInputValues;
    onSuccess?: (fields: PruebaCreateFormInputValues) => void;
    onError?: (fields: PruebaCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PruebaCreateFormInputValues) => PruebaCreateFormInputValues;
    onValidate?: PruebaCreateFormValidationValues;
} & React.CSSProperties>;
export default function PruebaCreateForm(props: PruebaCreateFormProps): React.ReactElement;
