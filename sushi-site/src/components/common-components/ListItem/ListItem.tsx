import React from "react";
import styled, { css } from "styled-components";

interface IListItem {
    margin?: string;
}

export const ListItem = styled.li<IListItem>`
  margin: ${p => p.margin};
`