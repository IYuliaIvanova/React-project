import React from "react";
import styled, {css} from "styled-components";
import {COLOR} from "../../../constants/color-constants";

interface IThirdLevelHeadingProps {
    padding?: string;
    fontWeight?: string;
    fontSize?: string;
    lineHeight?: string;
    fontStyle?: string;
    color?: string;
    margin?: string;
    bgColor?: string;
}

export const ThirdLevelHeading = styled.h3<IThirdLevelHeadingProps>`
  font-style: ${p => p.fontStyle || "normal"};
  font-weight: ${p => p.fontWeight || "500"};
  font-size: ${p => p.fontSize || "18"}px;
  line-height: ${p => p.lineHeight || "22"}px;
  color: ${p => p.color || COLOR.smokyBlack};
  background-color: ${p => p.bgColor};
  margin: ${p => p.margin};
  padding: ${p => p.padding};
`