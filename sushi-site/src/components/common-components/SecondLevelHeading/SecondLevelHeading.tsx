import React from "react";
import styled from "styled-components";
import { COLOR } from "../../../constants/color-constants";

interface ISecondLevelHeadingProps {
    padding?: string;
    fontWeight?: string;
    fontSize?: string;
    lineHeight?: string;
    fontStyle?: string;
    color?: string;
    margin?: string;
    bgColor?: string;
}

export const SecondLevelHeading = styled.h2<ISecondLevelHeadingProps>`
  font-style: ${p => p.fontStyle || "normal"};
  font-weight: ${p => p.fontWeight || "500"};
  font-size: ${p => p.fontSize || "24"}px;
  line-height: ${p => p.lineHeight || "30"}px;
  color: ${p => p.color || COLOR.black};
  background-color: ${p => p.bgColor};
  margin: ${p => p.margin};
  padding: ${p => p.padding};
`