import React from "react";
import styled from "styled-components";
import { Box } from "../common-components/Box/Box";

interface IOrderingGroupButtonProps {
    onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export const OrderingGroupButton = styled(Box)<IOrderingGroupButtonProps>``;