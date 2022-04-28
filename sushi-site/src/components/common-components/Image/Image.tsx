import React from "react";
import styled, { css } from "styled-components";

interface IImageProps {
    width?: string;
    maxWidth?: string;
    height?: string;
    maxHeight?: string;
    margin?: string;
}

export const Image = styled.img<IImageProps>`
    width: ${p => p.width}px;
    max-width: ${p => p.maxWidth}px;
    height: ${p => p.height}px;
    max-height: ${p => p.maxHeight}px;
    margin: ${p => p.margin};
`