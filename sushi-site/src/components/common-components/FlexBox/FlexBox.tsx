import React from "react";
import styled, { css } from "styled-components";

interface FlexBoxProps {
    alignItems?: string;
    justifyContent?: string;
    flexDirection?: string;
    flexWrap?: string;
    margin?: string;
    padding?: string;
    columnGap?: string;
    bgColor?: string;
    width?: string;
    borderBottom?: string;
    borderLeft?: string;
    borderRight?: string;
}

 export const FlexBox = styled.div<FlexBoxProps>`
   width: ${p => p.width}px;
   display: flex;
   align-items: ${p => p.alignItems || 'center'};
   justify-content: ${p => p.justifyContent || 'center'};
   flex-direction: ${p => p.flexDirection || 'row'};
   flex-wrap: ${p => p.flexWrap};
   column-gap: ${p => p.columnGap}px;
   margin: ${p => p.margin};
   padding: ${p => p.padding};
   background-color: ${p => p.bgColor};
   border-bottom: ${p => p.borderBottom};
   border-left: ${p => p.borderLeft};
   border-right: ${p => p.borderRight};
 `;