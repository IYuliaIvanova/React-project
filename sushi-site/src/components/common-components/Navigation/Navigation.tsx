import React from "react";
import styled from "styled-components";

interface INavigationProps {
  display?: string;
  width?: string | number;
  maxWidth?: string;
  padding?: string;
  borderTop?: string;
  borderLeft?: string;
  borderRight?: string;
}

export const Navigation = styled.nav<INavigationProps>`
  display: ${p => p.display};
  width: ${p => typeof p.width === "number" ? `${p.width}%` : `${p.width}px`};
  max-width: ${p => p.maxWidth}px;
  padding: ${p => p.padding};
  border-top: ${p => p.borderTop};
  border-left: ${p => p.borderLeft};
  border-right: ${p => p.borderRight};
`