import React from "react";
import styled, { css } from "styled-components";

interface INav {
    padding?: string;
}

export const Nav = styled.nav<INav>`
  padding: ${p => p.padding};
`