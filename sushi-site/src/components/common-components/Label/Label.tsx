import React from "react";
import styled from "styled-components";

interface ILabelProp {
    width?: string;
    maxWidth?: string;
    height?: string;
    maxHeight?: string;
    position?: string;
    opacity?: string;
    txtDecoration?: string;
    margin?: string;
}

export const Label = styled.label<ILabelProp>`
    width: ${p => p.width}px;
    max-width: ${p => p.maxWidth}px;
    height: ${p => p.height}px;
    max-height: ${p => p.maxHeight}px;
    position: ${p => p.position};
    opacity: ${p => p.opacity};
    text-decoration: ${p => p.txtDecoration};
    margin: ${p => p.margin};
    cursor: pointer;
`