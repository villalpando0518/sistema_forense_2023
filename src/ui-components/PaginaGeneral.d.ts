/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
import { Boton1Props } from "./Boton1";
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
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PaginaGeneralOverridesProps = {
    PaginaGeneral?: PrimitiveOverrideProps<ViewProps>;
    "image 1"?: PrimitiveOverrideProps<ImageProps>;
    "Estimacion de la edad automatica a parrtir de sinfisis pubica, esternon y huEsos de la cara"?: PrimitiveOverrideProps<TextProps>;
    "Nombre de usuario"?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 9"?: PrimitiveOverrideProps<ViewProps>;
    Boton14485?: Boton1Props;
    "INGRESAR EXCEL"?: PrimitiveOverrideProps<TextProps>;
    "Ejemplo_excel.xlsx"?: PrimitiveOverrideProps<TextProps>;
    "REDES NEURONALES"?: PrimitiveOverrideProps<TextProps>;
    Boton15115?: Boton1Props;
    Algoritmo?: PrimitiveOverrideProps<TextProps>;
    Boton15175?: Boton1Props;
    Boton151115?: Boton1Props;
    Boton151138?: Boton1Props;
    Boton151208?: Boton1Props;
    SALIR?: PrimitiveOverrideProps<TextProps>;
    "GUARDAR RESULTADO"?: PrimitiveOverrideProps<TextProps>;
    "DESCARGAR ARCHIVO EXCEL"?: PrimitiveOverrideProps<TextProps>;
    Boton151205?: Boton1Props;
    INICIA?: PrimitiveOverrideProps<TextProps>;
    Boton151203?: Boton1Props;
    "EJEMPLO DE EXCEL"?: PrimitiveOverrideProps<TextProps>;
    Boton1511398?: Boton1Props;
    "VER HISTORIAL"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type PaginaGeneralProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: PaginaGeneralOverridesProps | undefined | null;
}>;
export default function PaginaGeneral(props: PaginaGeneralProps): React.ReactElement;
