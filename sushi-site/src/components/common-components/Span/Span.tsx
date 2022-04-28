import React from "react";
import styled, { css } from "styled-components";
import { themes } from "../../../constants/themes";

interface ISpanProps {
    color?: string;
    margin?: string;
    padding?: string;
    fontWeight?: string;
    fontSize?: string;
    lineHeight?: string;
    fontStyle?: string;
    txtDecoration?: string;
    link?: boolean;
}

export const Span = styled.span<ISpanProps>`
  margin: ${p => p.margin};
  padding: ${p => p.padding};
  font-style: ${p => p.fontStyle || "normal"};
  font-weight: ${p => p.fontWeight || "500"};
  font-size: ${p => p.fontSize || "18"}px;
  line-height: ${p => p.lineHeight || "22"}px;
  color: ${p => p.color || themes.colors.smokyBlack};
  text-decoration: ${p => p.txtDecoration || "none"};

  ${p => p.link && css`
    cursor: pointer;
    transition: all 0.5s linear;

    &:hover {
      color: ${themes.colors.pastelOrange}
    }
  `}
`