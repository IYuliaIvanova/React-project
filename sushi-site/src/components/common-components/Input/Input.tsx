import React from "react";
import styled, { css } from "styled-components";

interface IInputProps {
    width?: string;
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
}

export const Input = styled.input<IInputProps>`
    width: ${p => p.width}px;
    max-width: ${p => p.maxWidth}px;
    height: ${p => p.height}px;
    max-height: ${p => p.maxHeight}px;
    position: ${p => p.position};
    opacity: ${p => p.opacity};
    margin: ${p => p.margin};
    border: ${p => p.border};
    outline: ${p => p.outline};
    background-color: ${p => p.bgColor};

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

