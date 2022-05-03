import React from "react"
import styled, { css } from "styled-components";
import { COLOR } from "../../../constants/color-constants"
import { themes } from "../../../constants/themes";

interface IButtonProps {
    width?: string
    height?: string
    bgColor?: string
    fontSize?: string
}

export const Button = styled.button<IButtonProps>`
  width: ${p => p.width || "143px"};
  height: ${p => p.height || "40px"};
  background-color: ${p => p.bgColor || themes.colors.pinkishOrange};
  color: ${themes.colors.gray95};
  border: none;
  border-radius: 5%;
  font-size: ${p => p.fontSize || "24px"};
  line-height: 30px;
  font-weight: 500;
  cursor: pointer;
`
