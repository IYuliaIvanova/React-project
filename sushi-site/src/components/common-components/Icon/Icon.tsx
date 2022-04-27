import React from "react";
import styled, { css } from "styled-components";

interface IIconProps {
    margin?: string
}

export const Icon = styled.img<IIconProps>`
    cursor: pointer;
    margin: ${p => p.margin};
`