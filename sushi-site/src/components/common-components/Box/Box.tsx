import React from "react";
import styled from "styled-components";

interface IBoxProps {
    width?: string | number;
    maxWidth?: string;
    height?: string;
    maxHeight?: string;
    minHeight?: string;
    backColor?: string;
    textAlign?: string;
    margin?: string;
    padding?: string;
    borderTop?: string;
    borderBottom?: string;
    borderLeft?: string;
    borderRight?: string;
    position?: string;
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
    overflow?: string;
    opacity?: string;
    borderRadius?: string;
    background?: string;
}

export const Box = styled.div<IBoxProps>`
  display: block;
  position: ${p => p.position};
  top: ${p => p.top}px;
  bottom: ${p => p.bottom}px;
  left: ${p => p.left}px;
  right: ${p => p.right}px;
  width: ${p => typeof p.width === "number" ? `${p.width}%`: `${p.width}px`};
  max-width: ${p => p.maxWidth}px;
  height: ${p => p.height}px;
  max-height: ${p => p.maxHeight}px;
  min-height: ${p => p.minHeight}px;
  background-color: ${p => p.backColor};
  text-align: ${p => p.textAlign};
  margin: ${p => p.margin};
  padding: ${p => p.padding};
  border-top: ${p => p.borderTop};
  border-bottom: ${p => p.borderBottom};
  border-left: ${p => p.borderLeft};
  border-right: ${p => p.borderRight};
  overflow: ${p => p.overflow};
  opacity: ${p => p.opacity};
  border-radius: ${p => p.borderRadius}px;
  background: ${p => p.background};
`