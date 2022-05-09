import React from "react";
import { Box } from "../../components/common-components/Box/Box";
import { Paragraph } from "../../components/common-components/Paragraph/Paragraph";
import { COLOR } from "../../constants/color-constants";

export const RightSidebar = () => {
    return (
        <Box textAlign="center" maxWidth="420" padding="55px 100px 5px 40px">
            <Box borderRadius="5" maxWidth="290" backColor={COLOR.gray95}>
                <Box padding="12px 13px 0 12px" margin="0 0 26px 0">
                    <Paragraph
                        fontSize="24"
                        lineHeight="30"
                        margin="0 0 10px 0"
                    >
                        Ваша корзина пуста.
                    </Paragraph>
                    <Paragraph fontWeight="400" color={COLOR.silverGray}>Добавьте же скорее что-нибудь!</Paragraph>
                </Box>
                <Paragraph
                    fontWeight="400"
                    color={COLOR.gray95}
                    lineHeight="17"
                    padding="12px 32px 11px"
                    bgColor={COLOR.pastelOrange}
                >
                    Бесплатная доставка от 800 СОМ
                </Paragraph>
            </Box>
        </Box>
    )
}