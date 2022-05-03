import React from "react";
import styled, { css } from "styled-components";

interface IUnorderedList {
  maxWidth?: number;
  backgroundColor?: string;
}

export const UnorderedList = styled.ul<IUnorderedList>`
  list-style-type: none;
  padding-left: 0;
  max-width: ${(p) => p.maxWidth}px;
  background-color: ${(p) => p.backgroundColor};
`

