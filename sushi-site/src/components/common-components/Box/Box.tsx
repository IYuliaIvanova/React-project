import React from "react";
import styled, { css } from "styled-components";

interface BoxProps {
    width?: string;
    height?: string;
    backColor?: string;
    margin?: string;
    padding?: string
    borderBottom?: string;
    borderLeft?: string;
    borderRight?: string;
}

export const Box = styled.div<BoxProps>`
  display: block;
  width: ${p => p.width}px;
  height: ${p => p.height}px;
  background-color: ${p => p.backColor};
  margin: ${p => p.margin};
  padding: ${p => p.padding};
  border-bottom: ${p => p.borderBottom};
  border-left: ${p => p.borderLeft};
  border-right: ${p => p.borderRight};
`