import React from "react"
import styled from "styled-components";
import { themes } from "../../../constants/themes";

interface IButtonProps {
    width?: string | number;
    height?: string;
    margin?: string;
    padding?: string;
    bgColor?: string;
    borderRadius?: number;
    fontSize?: string;
    lineHeight?: string;
    color?: string;
}

export const Button = styled.button<IButtonProps>`
  width: ${p => typeof p.width === "number" ? `${p.width}%` : `${p.width}px` || '143px'};
  height: ${p => p.height || "40"}px;
  margin: ${p => p.margin};
  padding: ${p => p.padding};
  background-color: ${p => p.bgColor || themes.colors.pinkishOrange};
  color: ${p => p.color || themes.colors.gray95};
  border: none;
  border-radius: ${p => p.borderRadius || 5}px;
  font-size: ${p => p.fontSize || "24"}px;
  line-height: ${p => p.lineHeight || "30"}px;
  font-weight: 500;
  cursor: pointer;
`
