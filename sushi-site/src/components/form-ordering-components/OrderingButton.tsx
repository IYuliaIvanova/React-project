import styled, { css } from "styled-components";
import { themes } from "../../constants/themes";
import { Button } from "../common-components/Button/Button";

interface IOrderingButtonProps {
    isActive?: boolean;
}

export const OrderingButton = styled(Button)<IOrderingButtonProps>`
    color: ${themes.colors.black};
    background-color: ${themes.colors.white};
    
    ${p => p.isActive && css`
        color: ${themes.colors.white};
        background-color: ${themes.colors.pastelOrange};
    `}

    &._active {
        color: ${themes.colors.white};
        background-color: ${themes.colors.pastelOrange};
    }
`;