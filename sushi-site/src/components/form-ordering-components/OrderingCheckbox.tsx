import styled from "styled-components";
import { themes } from "../../constants/themes";

export const OrderingCheckbox = styled.input`
    position: absolute;
    cursor: pointer;
    opacity: 0;
    
    & + label span {
        display: inline-block;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        border: 1px solid ${themes.colors.pastelOrange};
        background-color: ${themes.colors.white};
        cursor: pointer;
    }

    &:checked + label span {
        background-image: ${`url(${require(`../../assets/img/checkboxImg/ok.png`)})`};
        background-repeat: no-repeat;
        background-position: center;
    }
`;