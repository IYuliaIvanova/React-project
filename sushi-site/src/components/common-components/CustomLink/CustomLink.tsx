import React from "react";
import styled, { css } from "styled-components";
import { COLOR } from "../../../constants/color-constants"
import { themes } from "../../../constants/themes";

interface ICustomLink {
    width?: string;
    maxWidth?: string;
    height?: string;
    maxHeight?: string;
    fontWeight?: string;
    fontSize?: string;
    lineHeight?: string;
    fontStyle?: string;
    color?: string;
    margin?: string;
    social?: boolean;
    txtDecoration?: string
}

export const CustomLink = styled.a<ICustomLink>`
  width: ${p => p.width}px;
  max-width: ${p => p.maxWidth}px;
  height: ${p => p.height}px;
  max-height: ${p => p.maxHeight}px;
  font-style: ${p => p.fontStyle || "normal"};
  font-weight: ${p => p.fontWeight || "400"};
  font-size: ${p => p.fontSize || "18"}px;
  line-height: ${p => p.lineHeight || "22"}px;
  cursor: pointer;
  text-decoration: ${p => p.txtDecoration || "none"};
  color: ${p => p.color || themes.colors.smokyBlack};
  transition: all 0.5s linear;
  margin: ${p => p.margin};
  
  &:hover {
    color: ${themes.colors.pastelOrange}
  }

  ${prop => prop.social && css`
    opacity: 0.4;

    &:hover {
      opacity: 1
    }

  `}
`