/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Text, View } from "@aws-amplify/ui-react";
export default function MSBTNEJEXCEL(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="298px"
      height="58px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      borderRadius="10px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(105,100,100,0.45)"
      {...getOverrideProps(overrides, "MSBTNEJEXCEL")}
      {...rest}
    >
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="700"
        color="rgba(255,255,255,1)"
        lineHeight="19.363636016845703px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="14px"
        left="7px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="MUESTRA EL FORMATO ADECUADO&#xA;PARA EL ARCHIVO EXCEL "
        {...getOverrideProps(
          overrides,
          "MUESTRA EL FORMATO ADECUADO PARA EL ARCHIVO EXCEL"
        )}
      ></Text>
    </View>
  );
}
