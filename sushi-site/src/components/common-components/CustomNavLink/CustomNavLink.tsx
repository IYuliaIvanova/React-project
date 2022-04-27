import React from "react";
import styled, { css } from "styled-components";
import { NavLink, Link } from "react-router-dom";

interface ICustomNavLink {
    display?: string;
    justifyContent?: string;
    flexDirection?: string;
    flexWrap?: string;
    alignItems?: string;
    columnGap?: string;
    margin?: string;
}

export const CustomNavLink = styled(NavLink)<ICustomNavLink>`
  text-decoration: none;
  display: ${p => p.display || "block"};
  justify-content: ${p => p.justifyContent || "center"};
  flex-direction: ${p => p.flexDirection || 'row'};
  flex-wrap: ${p => p.flexWrap};
  align-items: ${p => p.alignItems || 'center'};
  column-gap: ${p => p.columnGap}px;
  margin: ${p => p.margin};
`