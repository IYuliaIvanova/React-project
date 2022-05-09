import React from "react";
import styled from "styled-components";
import { COLOR } from "../../../constants/color-constants";

interface IUnorderedListProps {
    padding?: string;
    fontWeight?: string;
    fontSize?: string;
    lineHeight?: string;
    fontStyle?: string;
    color?: string;
    margin?: string;
}

export const UnorderedList = styled.ul<IUnorderedListProps>`
  list-style-type: none;
  font-style: ${p => p.fontStyle || "normal"};
  font-weight: ${p => p.fontWeight || "500"};
  font-size: ${p => p.fontSize || "18"}px;
  line-height: ${p => p.lineHeight || "22"}px;
  color: ${p => p.color || COLOR.smokyBlack};
`