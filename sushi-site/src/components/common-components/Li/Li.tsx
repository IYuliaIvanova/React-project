import React from "react";
import styled, { css } from "styled-components";

interface ILi {
    margin?: string;
}

export const Li = styled.li<ILi>`
  margin: ${p => p.margin};
`