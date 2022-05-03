import React from "react";
import styled, { css } from "styled-components";

interface IImageProps {
    width?: string;
    maxWidth?: string;
    height?: string;
    maxHeight?: string;
    margin?: string;
    cursor?: string;
    left?: string;
    right?: string;
    position?: string;
    top?: string;
    bottom?: string;
}

export const Image = styled.img<IImageProps>`
    width: ${p => p.width}px;
    max-width: ${p => p.maxWidth}px;
    height: ${p => p.height}px;
    max-height: ${p => p.maxHeight}px;
    margin: ${p => p.margin};
    position: ${p => p.position};
    top: ${p => p.top}px;
    bottom: ${p => p.bottom}px;
    left: ${p => p.left}px;
    right: ${p => p.right}px;
    
    ${p => p.cursor && css`
      cursor: pointer;
    `}
`