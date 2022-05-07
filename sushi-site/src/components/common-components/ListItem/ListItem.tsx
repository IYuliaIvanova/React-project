import React from "react";
import styled, { css } from "styled-components";

interface IListItemProps {
    margin?: string;
}

export const ListItem = styled.li<IListItemProps>`
  margin: ${p => p.margin};
`