import styled from "styled-components";
import { themes } from "../../constants/themes";
import { Box } from "../common-components/Box/Box";

export const ModalOverlay = styled(Box)`
    background-color: ${themes.colors.modalOverlay};
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
`;
