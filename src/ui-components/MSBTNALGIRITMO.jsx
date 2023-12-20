/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Text, View } from "@aws-amplify/ui-react";
export default function MSBTNALGIRITMO(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="298px"
      height="76px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      borderRadius="15px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(71,66,66,0.45)"
      {...getOverrideProps(overrides, "MSBTNALGIRITMO")}
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
        top="19px"
        left="21px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="SELECIONA EL MODELO CON EL &#xA;QUE QUIERES TRABAJAR"
        {...getOverrideProps(
          overrides,
          "SELECIONA EL MODELO CON EL QUE QUIERES TRABAJAR"
        )}
      ></Text>
    </View>
  );
}
