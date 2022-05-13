import styled from "styled-components";
import { themes } from "../../constants/themes";
import { Input } from "../common-components/Input/Input";

export const OrderingCheckbox = styled(Input)`
    cursor:pointer;
    
    & + label span {
        display:inline-block;
        width:20px;
        height:20px;
        border-radius: 50%;
        border: 1px solid ${themes.colors.pastelOrange};
        background-color: ${themes.colors.white};
        cursor:pointer;
    }

    &:checked + label span {
        background-image:${`url(${require(`../../assets/img/checkboxImg/ok.png`)})`};
        background-repeat: no-repeat;
        background-position: center;
    }
`;