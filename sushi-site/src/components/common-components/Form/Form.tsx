import React from "react";
import styled from "styled-components";

interface IFormProps {
    width?: string | number;
    maxWidth?: string;
    height?: string;
    maxHeight?: string;
    bgColor?: string;
}

export const Form = styled.form<IFormProps>`
    width: ${p => typeof p.width === "number" ? `${p.width}%`: `${p.width}px`};
    max-width: ${p => p.maxWidth}px;
    height: ${p => p.height}px;
    max-height: ${p => p.maxHeight}px;
    background-color: ${p => p.bgColor};
`