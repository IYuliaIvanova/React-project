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
}

export const Input = styled.input<IInputProp>`
    width: ${p => p.width}px;
    max-width: ${p => p.maxWidth}px;
    height: ${p => p.height}px;
    max-height: ${p => p.maxHeight}px;
    position: ${p => p.position};
    opacity: ${p => p.opacity};

    ${p => p.checked && css`
    `}
`

