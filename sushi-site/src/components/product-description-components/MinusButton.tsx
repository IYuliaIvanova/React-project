import React from "react"
import styled from "styled-components";

interface IMinusButtonProps {
    onClick?: () => void;
    width?: string | number;
    maxWidth?: string;
    height?: string | number;
    maxHeight?: string;
    margin?: string;
    cursor?: string;
}

export const MinusButton = styled.img<IMinusButtonProps>`
    width: ${p => typeof p.width === "number" ? `${p.width}%` : `${p.width}px`};
    max-width: ${p => p.maxWidth}px;
    height: ${p => typeof p.height === "number" ? `${p.height}%` : `${p.height}px`};
    max-height: ${p => p.maxHeight}px;
    margin: ${p => p.margin};
    cursor: ${p => p.cursor};
`