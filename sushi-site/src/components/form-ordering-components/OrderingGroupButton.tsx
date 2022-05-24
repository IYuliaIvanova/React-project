import React from "react";
import styled from "styled-components";
import { Box } from "../common-components/Box/Box";

interface IOrderingGroupButtonProps {
    width?: string | number;
    onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export const OrderingGroupButton = styled.div<IOrderingGroupButtonProps>`
    display: block;
    width: ${p => typeof p.width === "number" ? `${p.width}%`: `${p.width}px`};
`;