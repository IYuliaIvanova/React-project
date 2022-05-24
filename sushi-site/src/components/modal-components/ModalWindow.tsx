import styled from "styled-components";
import { themes } from "../../constants/themes";
import { FlexBox } from "../common-components/FlexBox/FlexBox";


export const ModalWindow = styled(FlexBox)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: ${themes.colors.backgroundGray};
    border: 5px solid ${themes.colors.white};
    border-radius: 5px;
    min-height: 200px;
    max-width: 600px;
    padding: 10px;
    flex-direction: column;
    justify-content: space-between;
`;
