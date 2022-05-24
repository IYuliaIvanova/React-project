import React from "react";
import styled from "styled-components";

interface IFormProps {
    width?: string | number;
    maxWidth?: string;
    height?: string;
    maxHeight?: string;
    bgColor?: string;
    display?: string;
    alignItems?: string;
    justifyContent?: string;
    flexDirection?: string;
    flexWrap?: string;
    columnGap?: string;
    rowGap?: string;
}

export const Form = styled.form<IFormProps>`
    display: ${p => p.display};
    width: ${p => typeof p.width === "number" ? `${p.width}%`: `${p.width}px`};
    max-width: ${p => p.maxWidth}px;
    height: ${p => p.height}px;
    max-height: ${p => p.maxHeight}px;
    background-color: ${p => p.bgColor};
    align-items: ${p => p.alignItems};
    justify-content: ${p => p.justifyContent};
    flex-direction: ${p => p.flexDirection};
    flex-wrap: ${p => p.flexWrap};
    column-gap: ${p => p.columnGap}px;
    row-gap: ${p => p.rowGap}px;
`