import React from "react";
import styled, { css } from "styled-components";
import { themes } from "../../../constants/themes";

interface INav {
  display?: string;
  width?: string | number;
  padding?: string;
  borderTop?: string;
  borderLeft?: string;
  borderRight?: string;
}

export const Nav = styled.nav<INav>`
  display: ${p => p.display};
  width: ${p => typeof p.width === "number" ? p.width+"%" : p.width+"px"};
  padding: ${p => p.padding};
  border-top: ${p => p.borderTop};
  border-left: ${p => p.borderLeft};
  border-right: ${p => p.borderRight};
`