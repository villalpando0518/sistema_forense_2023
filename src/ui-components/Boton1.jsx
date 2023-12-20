/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "./utils";
import { Icon } from "@aws-amplify/ui-react";
export default function Boton1(props) {
  const { botonPrimario, overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        Boton1: {
          paths: [
            {
              d: "M0 16C0 7.16344 7.16344 0 16 0L171 0C179.837 0 187 7.16344 187 16L187 37C187 45.8366 179.837 53 171 53L16 53C7.16345 53 0 45.8366 0 37L0 16Z",
              fill: "rgba(53,111,129,0.25)",
              fillRule: "nonzero",
              style: { transform: "translate(0%, 0%)" },
            },
            {
              d: "M0 16C0 7.16344 7.16344 0 16 0L171 0C179.837 0 187 7.16344 187 16L187 37C187 45.8366 179.837 53 171 53L16 53C7.16345 53 0 45.8366 0 37L0 16Z",
              fill: "rgba(53,111,129,0.25)",
              fillRule: "nonzero",
              style: { transform: "translate(0%, 0%)" },
            },
          ],
        },
      },
      variantValues: { property1: "boton" },
    },
    {
      overrides: {
        Boton1: {
          paths: [
            {
              d: "M0 16C0 7.16344 7.16344 0 16 0L171 0C179.837 0 187 7.16344 187 16L187 37C187 45.8366 179.837 53 171 53L16 53C7.16345 53 0 45.8366 0 37L0 16Z",
              fill: "rgba(50,93,106,1)",
              fillRule: "nonzero",
              style: { transform: "translate(0%, 0%)" },
            },
            {
              d: "M0 16C0 7.16344 7.16344 0 16 0L171 0C179.837 0 187 7.16344 187 16L187 37C187 45.8366 179.837 53 171 53L16 53C7.16345 53 0 45.8366 0 37L0 16Z",
              fill: "rgba(50,93,106,1)",
              fillRule: "nonzero",
              style: { transform: "translate(0%, 0%)" },
            },
          ],
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        },
      },
      variantValues: { property1: "BotonSelec" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Icon
      width="187px"
      height="53px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      viewBox={{ minX: 0, minY: 0, width: 187, height: 53 }}
      paths={[
        {
          d: "M0 16C0 7.16344 7.16344 0 16 0L171 0C179.837 0 187 7.16344 187 16L187 37C187 45.8366 179.837 53 171 53L16 53C7.16345 53 0 45.8366 0 37L0 16Z",
          fill: "rgba(53,111,129,0.5)",
          fillRule: "nonzero",
          style: { transform: "translate(0%, 0%)" },
        },
        {
          d: "M0 16C0 7.16344 7.16344 0 16 0L171 0C179.837 0 187 7.16344 187 16L187 37C187 45.8366 179.837 53 171 53L16 53C7.16345 53 0 45.8366 0 37L0 16Z",
          fill: "rgba(53,111,129,0.5)",
          fillRule: "nonzero",
          style: { transform: "translate(0%, 0%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Boton1")}
      {...rest}
    ></Icon>
  );
}
