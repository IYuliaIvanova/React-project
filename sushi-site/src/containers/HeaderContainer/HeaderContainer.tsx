import React from "react";
import { FlexBox } from "../../components/common-components/FlexBox/FlexBox"
import { Paragraph } from "../../components/common-components/Paragraph/Paragraph";
import { CustomLink } from "../../components/common-components/CustomLink/CustomLink";
import { COLOR } from "../../constants/color-constants"
import { Box } from "../../components/common-components/Box/Box";
import { Image } from "../../components/common-components/Image/Image";
import { CustomNavLink } from "../../components/common-components/CustomNavLink/CustomNavLink";
import { HeaderBox } from "../../components/common-components/HeaderBox/HeaderBox";
import { ONE_PHONE, TWO_PHONE } from "../../constants/href-constants";

export const HeaderContainer = () =>{
    return (
        <HeaderBox
            borderBottom={`1px solid ${COLOR.silverGray}`}
            padding="0 40px 0 42px" width={100}
            justifyContent="space-between"
            bgColor={COLOR.gray95}
        >
            <FlexBox >
                <FlexBox padding="6px 15px 8px 0" borderRight={`1px solid ${COLOR.silverGray}`} flexDirection="column" alignItems="center">
                    <Paragraph>Наш телефон</Paragraph>
                    <CustomLink
                        lineHeight="18"
                        fontWeight="500"
                        color={COLOR.pastelOrange}
                        href={`tel:${ONE_PHONE}`}
                    >
                        {ONE_PHONE}
                    </CustomLink>
                    <CustomLink
                        lineHeight="18"
                        fontWeight="500"
                        color={COLOR.pastelOrange}
                        margin="0 0 5px 0"
                        href={`tel:${TWO_PHONE}`}
                    >
                        {TWO_PHONE}
                    </CustomLink>
                    <Paragraph lineHeight="17" fontSize="14" color={COLOR.silverGray}>
                        <Image
                            src={require("../../assets/icons/clock.svg").default}
                            width="15"
                            height="15"
                            margin="0 5px 0 0"
                        />
                        работаем с 10:00 до 00:00
                    </Paragraph>
                </FlexBox>
                <FlexBox alignItems="start" flexDirection="column" padding="0 0 0 15px">
                    <Paragraph
                        margin="0 0 4px"
                        fontWeight="300"
                        fontSize="14"
                        lineHeight="17"
                        color={COLOR.silverGray}
                    >
                        Город:
                    </Paragraph>
                    <Paragraph fontWeight="400">Минск</Paragraph>
                </FlexBox>
            </FlexBox>
            <FlexBox justifyContent="space-between">
                <FlexBox columnGap="10">
                    <CustomNavLink to={"/reviews"}>
                        <Paragraph
                            margin="0 10px 0 0"
                            hover
                            fontWeight="400"
                        >
                            Отзывы
                        </Paragraph>
                    </CustomNavLink>
                    <CustomNavLink to={"/"}>
                        <Paragraph
                            margin="0 69px 0 0"
                            hover
                            fontWeight="400"
                        >
                            Доставка и оплата
                        </Paragraph>
                    </CustomNavLink>
                    <Image src={require("../../api/img/search.svg").default}/>
                </FlexBox>
            </FlexBox>
        </HeaderBox>
    )
}