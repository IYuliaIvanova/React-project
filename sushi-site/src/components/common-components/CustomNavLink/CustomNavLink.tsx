import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { themes } from "../../../constants/themes";

interface ICustomNavLinkProps {
    display?: string;
    width?: string;
    maxWidth?: string;
    height?: string;
    maxHeight?: string;
    justifyContent?: string;
    flexDirection?: string;
    flexWrap?: string;
    alignItems?: string;
    columnGap?: string;
    margin?: string;
    position?: string;
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
    txtDecoration?: string;
    color?: string;
}

export const CustomNavLink = styled(NavLink)<ICustomNavLinkProps>`
  text-decoration: ${p => p.txtDecoration || "none"};
  display: ${p => p.display || "block"};
  width: ${p => p.width}px;
  max-width: ${p => p.maxWidth}px;
  height: ${p => p.height}px;
  max-height: ${p => p.maxHeight}px;
  justify-content: ${p => p.justifyContent || "center"};
  flex-direction: ${p => p.flexDirection || 'row'};
  flex-wrap: ${p => p.flexWrap};
  align-items: ${p => p.alignItems || 'center'};
  column-gap: ${p => p.columnGap}px;
  margin: ${p => p.margin};
  color: ${p => p.color || themes.colors.smokyBlack};

  position: ${(p) => ((p.position !== 'relative' || 'static') ? `${p.position};
    top: ${p.top}px;
    bottom: ${p.bottom}px;
    left: ${p.left}px;
    right: ${p.right}px;` : 'relative'
  )};
`