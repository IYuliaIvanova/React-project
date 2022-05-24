import React from "react";
import styled from "styled-components";

interface IIconProps {
    width?: string;
    maxWidth?: string;
    height?: string;
    maxHeight?: string;
    margin?: string
}

export const Icon = styled.svg<IIconProps>`
    width: ${p => p.width}px;
    max-width: ${p => p.maxWidth}px;
    height: ${p => p.height}px;
    max-height: ${p => p.maxHeight}px;
    margin: ${p => p.margin};
`