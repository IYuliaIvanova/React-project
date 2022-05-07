import React from "react";
import styled, { css } from "styled-components";

interface IFooterBoxProps {
    width?: string | number;
    maxWidth?: string;
    backColor?: string;
    padding?: string;
}

export const FooterBox = styled.footer<IFooterBoxProps>`
  width: ${p => typeof p.width === "number" ? p.width+"%" : p.width+"px"};
  max-width: ${p => p.maxWidth}px;
  background-color: ${p => p.backColor};
  padding: ${p => p.padding};
`