import styled from "styled-components";
import { COLOR } from "../../constants/color-constants";
import { Paragraph } from "../common-components/Paragraph/Paragraph";

export const ErrorText = styled(Paragraph)`
    color: ${COLOR.red};
`;