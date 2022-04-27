import React from "react"
import styled, { css } from "styled-components";
import { COLOR } from "../../../constants/color-constants"

interface IButtonProps {
    width?: string
    height?: string
    bgColor?: string
    FS?: string
}

export const Button = styled.button<IButtonProps>`
  width: ${p => p.width || "143px"};
  height: ${p => p.height || "40px"};
  background-color: ${p => p.bgColor || COLOR.pinkishOrange};
  color: ${COLOR.gray95};
  border: none;
  border-radius: 5%;
  font-size: ${p => p.FS || "24px"};
  line-height: 30px;
  font-weight: 500;
  cursor: pointer;
`
