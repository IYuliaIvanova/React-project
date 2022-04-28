import React from "react";
import { FlexBox } from "../../components/common-components/FlexBox/FlexBox"
import { Paragraph } from "../../components/common-components/Paragraph/Paragraph";
import { CustomLink } from "../../components/common-components/CustomLink/CustomLink";
import { COLOR } from "../../constants/color-constants"
import { Box } from "../../components/common-components/Box/Box";
import { Image } from "../../components/common-components/Image/Image";

export const HeaderContainer = () =>{

    return(
        <FlexBox borderBottom={`1px solid ${COLOR.silverGray}`} padding="6px 40px 8px 42px" width="1170" justifyContent="space-between" bgColor={COLOR.gray95}>
            <FlexBox>
                <FlexBox padding="0 15px 0 0" borderRight={`1px solid ${COLOR.silverGray}`} flexDirection="column">
                    <Paragraph>Наш телефон</Paragraph>
                    <CustomLink lineHeight="18" fontWeight="500" color={COLOR.pastelOrange} href="tel:+996 705 188 955">+996 705 188 955</CustomLink>
                    <CustomLink lineHeight="18" fontWeight="500" color={COLOR.pastelOrange} margin="0 0 5px 0" href="tel:+996 555 188 955">+996 555 188 955</CustomLink>
                    <Paragraph lineHeight="17" fontSize="14" color={COLOR.silverGray}>
                        <Image src={require("../../assets/img/clock.svg").default} width="15" height="15" margin="0 5px 0 0"></Image>
                        работаем с 10:00 до 00:00
                    </Paragraph>
                </FlexBox>
                <Box padding="0 0 0 15px">
                    <Paragraph margin="0 0 4px" fontWeight="300" fontSize="14" lineHeight="17" color={COLOR.silverGray}>Город:</Paragraph>
                    <Paragraph fontWeight="400">Минск</Paragraph>
                </Box>
            </FlexBox>
            <FlexBox justifyContent="space-between">
                <FlexBox columnGap="10">
                    <Paragraph margin="0 10px 0 0" hover fontWeight="400">Отзывы</Paragraph>
                    <Paragraph margin="0 69px 0 0" hover fontWeight="400">Доставка и оплата</Paragraph>
                    <Image src={require("../../api/img/search.svg").default}></Image>
                </FlexBox>
            </FlexBox>


        </FlexBox>
    )
}