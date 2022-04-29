import React from "react";
import styled, { css } from "styled-components";

interface IFooterBox {
    width?: string | number;
    maxWidth?: string;
    backColor?: string;
}

export const FooterBox = styled.footer<IFooterBox>`
  width: ${p => typeof p.width === "number" ? p.width+"%" : p.width+"px"};
  max-width: ${p => p.maxWidth}px;
  background-color: ${p => p.backColor};
`