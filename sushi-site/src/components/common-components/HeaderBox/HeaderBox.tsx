import React from "react";
import styled from "styled-components";

interface IHeaderBoxProps {
    width?: string | number;
    maxWidth?: string;
    height?: string;
    maxHeight?: string;
    alignItems?: string;
    justifyContent?: string;
    flexDirection?: string;
    flexWrap?: string;
    margin?: string;
    padding?: string;
    bgColor?: string;
    borderBottom?: string;
}

export const HeaderBox = styled.header<IHeaderBoxProps>`
    width: ${p => typeof p.width === "number" ? `${p.width}%` : `${p.width}px`};
    max-width: ${p => p.maxWidth}px;
    height: ${p => p.height}px;
    max-height: ${p => p.maxHeight}px;
    display: flex;
    align-items: ${p => p.alignItems || 'center'};
    justify-content: ${p => p.justifyContent || 'center'};
    flex-direction: ${p => p.flexDirection || 'row'};
    flex-wrap: ${p => p.flexWrap};
    margin: ${p => p.margin};
    padding: ${p => p.padding};
    background-color: ${p => p.bgColor};
    border-bottom: ${p => p.borderBottom};
`
