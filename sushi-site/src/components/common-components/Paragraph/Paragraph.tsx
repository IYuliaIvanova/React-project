import React from "react";
import styled, { css } from "styled-components";

interface IParagraphProps {
    padding?: string;
    fontWeight?: string;
    fontSize?: string;
    lineHeight?: string;
    fontStyle?: string;
    color?: string;
    hover?: boolean;
    margin?: string;
    bgColor?: string;
    position?: string;
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
    cursor?: string;
    $activeColor?: string;
}

export const Paragraph = styled.p<IParagraphProps>`
  display: inline-block;
  font-style: ${p => p.fontStyle || "normal"};
  font-weight: ${p => p.fontWeight || "500"};
  font-size: ${p => p.fontSize || "18"}px;
  line-height: ${p => p.lineHeight || "22"}px;
  color: ${p => p.color || p.theme.colors.smokyBlack};
  background-color: ${p => p.bgColor};
  margin: ${p => p.margin};
  padding: ${p => p.padding};
  cursor: ${p => p.cursor};
  
  ${p => p.hover && css`
    cursor: pointer;
    transition: all 0.5s linear;

    &:hover {
      color: ${p.theme.colors.pastelOrange};
    }
  `}

  position: ${(p) => ((p.position !== 'relative') && (p.position !== 'static') ? `${p.position};
    top: ${p.top}px;
    bottom: ${p.bottom}px;
    left: ${p.left}px;
    right: ${p.right}px;` : 'relative'
  )};
`

// color: ${p => p.$activeColor ? p.$activeColor : p.theme.colors.smokyBlack || p.color}; знаю что нельзя оставлять но нужнооо)))