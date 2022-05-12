import React from "react";
import styled, { css } from "styled-components";
import { themes } from "../../../constants/themes";

interface ILabelProps {
    width?: string;
    maxWidth?: string;
    height?: string;
    maxHeight?: string;
    position?: string;
    opacity?: string;
    txtDecoration?: string;
    margin?: string;
    fontWeight?: string;
    fontSize?: string;
    lineHeight?: string;
    fontStyle?: string;
    color?: string;
    hiddenTxt?: boolean;
}

export const Label = styled.label<ILabelProps>`
    width: ${p => p.width}px;
    max-width: ${p => p.maxWidth}px;
    height: ${p => p.height}px;
    max-height: ${p => p.maxHeight}px;
    position: ${p => p.position};
    opacity: ${p => p.opacity};
    text-decoration: ${p => p.txtDecoration};
    margin: ${p => p.margin};
    font-style: ${p => p.fontStyle || "normal"};
    font-weight: ${p => p.fontWeight || "400"};
    font-size: ${p => p.fontSize || "18"}px;
    line-height: ${p => p.lineHeight || "22"}px;
    color: ${p => p.color};
    cursor: pointer;

    ${p => p.hiddenTxt && css`
        position: relative;
        align-self: center;

        &::before {
            content: "";
            position: absolute;
            bottom: 10px;
            right: -25px;
            width: 10px;
            height: 10px;
            border: 1px solid ${themes.colors.pinkishOrange};
            border-width: 0 1px 1px 0;
            transform: rotate(45deg);
        }
    `} 
`