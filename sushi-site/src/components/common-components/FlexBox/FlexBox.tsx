import React from "react";
import styled, { css } from "styled-components";

interface IFlexBoxProps {
  width?: string;
  maxWidth?: string;
  height?: string;
  maxHeight?: string;
  alignItems?: string;
  justifyContent?: string;
  flexDirection?: string;
  flexWrap?: string;
  margin?: string;
  padding?: string;
  columnGap?: string;
  bgColor?: string;
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
}

 export const FlexBox = styled.div<IFlexBoxProps>`
  width: ${p => p.width}px;
  max-width: ${p => p.maxWidth}px;
  height: ${p => p.height}px;
  max-height: ${p => p.maxHeight}px;
  display: flex;
  align-items: ${p => p.alignItems || 'center'};
  justify-content: ${p => p.justifyContent || 'center'};
  flex-direction: ${p => p.flexDirection || 'row'};
  flex-wrap: ${p => p.flexWrap};
  column-gap: ${p => p.columnGap}px;
  margin: ${p => p.margin};
  padding: ${p => p.padding};
  background-color: ${p => p.bgColor};
  border-top: ${p => p.borderTop};
  border-bottom: ${p => p.borderBottom};
  border-left: ${p => p.borderLeft};
  border-right: ${p => p.borderRight};
  position: ${p => p.position};
  top: ${p => p.top}px;
  bottom: ${p => p.bottom}px;
  left: ${p => p.left}px;
  right: ${p => p.right}px;
  overflow: ${p => p.overflow};
 `;