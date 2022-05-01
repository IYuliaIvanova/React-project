import React from "react";
import styled, { css } from "styled-components";

interface IInputProp {
    width?: string;
    maxWidth?: string;
    height?: string;
    maxHeight?: string;
    position?: string;
    opacity?: string;
    checked?: boolean;
    margin?: string;
    border?: string;
    outline?: string;
    bgColor?: string;
}

export const Input = styled.input<IInputProp>`
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

    ${p => p.checked && css`
    `}
`

