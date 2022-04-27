import React from "react";
import styled, { css } from "styled-components";
import { COLOR } from "../../../constants/color-constants"

interface ICustomLink {
    fontWeight?: string;
    fontSize?: string;
    lineHeight?: string;
    fontStyle?: string;
    color?: string;
    margin?: string;
}

export const CustomLink = styled.a<ICustomLink>`
  font-style: ${p => p.fontStyle || "normal"};
  font-weight: ${p => p.fontWeight || "400"};
  font-size: ${p => p.fontSize || "18"}px;
  line-height: ${p => p.lineHeight || "22"}px;
  cursor: pointer;
  text-decoration: none;
  color: ${p => p.color || COLOR.smokyBlack};
  transition: all 0.5s linear;
  margin: ${p => p.margin};
  
  &:hover {
    color: ${COLOR.pastelOrange}
  }
`