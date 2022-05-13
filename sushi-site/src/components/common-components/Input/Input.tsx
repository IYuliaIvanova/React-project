import React from "react";
import styled, { css } from "styled-components";

interface IInputProps {
    width?: string | number;
    maxWidth?: string;
    height?: string;
    maxHeight?: string;
    position?: string;
    opacity?: string;
    margin?: string;
    border?: string;
    outline?: string;
    bgColor?: string;
    hiddenTxt?: boolean;
    fontWeight?: string;
    fontSize?: string;
    lineHeight?: string;
    color?: string;
}

export const Input = styled.input<IInputProps>`
    display: inline-block;
    width: ${p => typeof p.width === "number" ? `${p.width}%`: `${p.width}px`};
    max-width: ${p => p.maxWidth}px;
    height: ${p => p.height}px;
    max-height: ${p => p.maxHeight}px;
    position: ${p => p.position};
    opacity: ${p => p.opacity};
    margin: ${p => p.margin};
    padding: 9px 10px;
    border: none;
    border-radius: 5px;
    outline: none;
    background-color: ${p => p.bgColor};
    font-weight: ${p => p.fontWeight || 400}px;
    font-size: ${p => p.fontSize || 18}px;
    line-height: ${p => p.lineHeight || 22}px;
    color: ${p => p.color};

    ${p => p.hiddenTxt && css`
        &:checked ~ .limiter {
            max-height: none;
        }
        
        &:checked ~ .limiter .bottom {
            opacity: 0;
        }

        &:checked ~ .read-more-btn:before {
            transform: rotate(-130deg);
        }
    `}
`

