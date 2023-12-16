/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Prueba } from "../models";
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
export declare type PruebaUpdateFormInputValues = {
    nombre?: string;
};
export declare type PruebaUpdateFormValidationValues = {
    nombre?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PruebaUpdateFormOverridesProps = {
    PruebaUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    nombre?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PruebaUpdateFormProps = React.PropsWithChildren<{
    overrides?: PruebaUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    prueba?: Prueba;
    onSubmit?: (fields: PruebaUpdateFormInputValues) => PruebaUpdateFormInputValues;
    onSuccess?: (fields: PruebaUpdateFormInputValues) => void;
    onError?: (fields: PruebaUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PruebaUpdateFormInputValues) => PruebaUpdateFormInputValues;
    onValidate?: PruebaUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PruebaUpdateForm(props: PruebaUpdateFormProps): React.ReactElement;
