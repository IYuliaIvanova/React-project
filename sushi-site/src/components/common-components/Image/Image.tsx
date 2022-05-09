import React from "react";
import styled, { css } from "styled-components";

interface IImageProps {
    width?: string | number;
    maxWidth?: string;
    height?: string | number;
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
    width: ${p => typeof p.width === "number" ? `${p.width}%` : `${p.width}px`};
    max-width: ${p => p.maxWidth}px;
    height: ${p => typeof p.height === "number" ? `${p.width}%` : `${p.width}px`};
    max-height: ${p => p.maxHeight}px;
    margin: ${p => p.margin};
    
    position: ${(p) => ((p.position !== 'relative') && (p.position !== 'static') ? `${p.position};
      top: ${p.top}px;
      bottom: ${p.bottom}px;
      left: ${p.left}px;
      right: ${p.right}px;` : 'relative'
    )};
    
    ${p => p.cursor && css`
      cursor: pointer;
    `}
`