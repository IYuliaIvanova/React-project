import React from "react";
import { FlexBox } from "../../components/common-components/FlexBox/FlexBox"
import { Paragraph } from "../../components/common-components/Paragraph/Paragraph";
import { CustomLink } from "../../components/common-components/CustomLink/CustomLink";
import { COLOR } from "../../constants/color-constants"
import { Box } from "../../components/common-components/Box/Box";
import { Image } from "../../components/common-components/Image/Image";
import { Nav } from "../../components/common-components/Nav/Nav";
import { Ul } from "../../components/common-components/Ul/Ul";
import { Li } from "../../components/common-components/Li/Li";
import { CustomNavLink } from "../../components/common-components/CustomNavLink/CustomNavLink";
import { FOOTER_NAVIGATION } from "../../constants/footer-navigation-constants";
import { Span } from "../../components/common-components/Span/Span";
import {FooterBox} from "../../components/common-components/FooterBox/FooterBox";

export const FooterContainer = () =>{
    return(
        <FooterBox backColor={COLOR.gray95} width="1170">
            <FlexBox margin="0 auto" maxWidth="950" borderTop={`1px solid ${COLOR.silverGray}`} padding="22px 0 0 0" justifyContent="start" alignItems="start">
                <Box borderRight={`.5px solid ${COLOR.silverGray}`} padding="10px 133px 84px 0">
                    <Nav display="inline-block">
                        <Ul>
                            {FOOTER_NAVIGATION.map(({ path, name} )=>{
                                return(
                                    <Li margin="0 0 20px 0" key={path + name}>
                                        <CustomNavLink  to={'/'}>
                                            <Paragraph hover>{name}</Paragraph>
                                        </CustomNavLink>
                                    </Li>
                                )
                            })}
                        </Ul>
                    </Nav>
                </Box>
                <Box borderRight={`.5px solid ${COLOR.silverGray}`} padding="10px 77px 73px 40px">
                    <FlexBox flexDirection="column" maxWidth="233" alignItems="start">
                        <Paragraph margin="0 0 10px 0">Введите номер</Paragraph>
                        <Paragraph margin="0 0 20px 0" color={COLOR.silverGray}>+996 (__) ___ __ __</Paragraph>
                        <Paragraph margin="0 0 10px 0" color={COLOR.silverGray}>Выберите удобный мессенджер для общения</Paragraph>
                        <FlexBox columnGap="30">
                            <CustomLink href="https://www.whatsapp.com/" target="_blank" social width="50" height="50">
                                <Image width="50" height="50" src={require("../../assets/img/whatsapp.svg").default}></Image>
                            </CustomLink>
                            <CustomLink href="https://web.telegram.org/" target="_blank" social width="50" height="50">
                                <Image width="50" height="50" src={require("../../assets/img/telegram.svg").default}></Image>
                            </CustomLink>
                            <CustomLink href="https://www.instagram.com/" target="_blank" social width="50" height="50">
                                <Image width="50" height="50" src={require("../../assets/img/instagram.svg").default}></Image>
                            </CustomLink>
                        </FlexBox> 
                    </FlexBox>
                </Box>
                <FlexBox flexDirection="column" alignItems="start" justifyContent="start" padding="10px 5px 5px 41px">
                    <CustomLink margin="0 0 5px 0" lineHeight="18" fontWeight="400" color={COLOR.silverGray} href="tel:+996 705 188 955">
                        Тел:
                        <Span link txtDecoration="underline" lineHeight="18" fontWeight="400" color={COLOR.silverGray}>
                            +996 705 188 955
                        </Span> 
                    </CustomLink>
                    <CustomLink margin="0 0 5px 0" lineHeight="18" fontWeight="400" color={COLOR.silverGray} href="tel:+996 555 188 955">
                        Тел:
                        <Span link txtDecoration="underline" lineHeight="18" fontWeight="400" color={COLOR.silverGray}>
                            +996 555 188 955
                        </Span>
                    </CustomLink>
                    <CustomLink lineHeight="18" fontWeight="400" color={COLOR.silverGray} margin="0 0 5px 0" href="">Адрес:Бакаева 126</CustomLink>
                </FlexBox>
            </FlexBox>
        </FooterBox>
    )
}