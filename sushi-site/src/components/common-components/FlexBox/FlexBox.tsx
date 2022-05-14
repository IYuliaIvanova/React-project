import React from "react";
import styled from "styled-components";

interface IFlexBoxProps {
  width?: string | number;
  maxWidth?: string;
  minWidth?: string;
  height?: string;
  maxHeight?: string;
  alignItems?: string;
  alignSelf?: string;
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
  rowGap?: string;
  borderRadius?: string;
  boxShadow?: string;
}

 export const FlexBox = styled.div<IFlexBoxProps>`
    width: ${p => typeof p.width === "number" ? `${p.width}%` : `${p.width}px`};
    max-width: ${p => p.maxWidth}px;
    min-width: ${p => p.minWidth}px;
    height: ${p => p.height};
    max-height: ${p => p.maxHeight}px;
    display: flex;
    align-items: ${p => p.alignItems};
    align-self: ${p => p.alignSelf || 'center'};
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
    border-radius: ${p => p.borderRadius};
    box-shadow: ${p => p.boxShadow};

    position: ${(p) => ((p.position !== 'relative') && (p.position !== 'static') ? `${p.position};
      top: ${p.top}px;
      bottom: ${p.bottom}px;
      left: ${p.left}px;
      right: ${p.right}px;` : 'relative'
    )};

    overflow: ${p => p.overflow};
    transition: all 0.5s linear;
    row-gap: ${p => p.rowGap}px;
 `
