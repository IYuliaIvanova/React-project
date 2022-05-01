import React, { useState } from "react";
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
import { FooterBox } from "../../components/common-components/FooterBox/FooterBox";
import { Input } from "../../components/common-components/Input/Input";
import { Label } from "../../components/common-components/Label/Label";

export const FooterContainer = () =>{
    const [phone, setPhone] = useState('');

    const handleInputPhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const numb = e.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,3})(\d{0,2})(\d{0,2})/);
        if(numb != null){
            e.target.value = '+(' + numb[1] + ') ' + numb[2] + '-' + numb[3] + '-' + numb[4];
        }
        setPhone(e.target.value);
    } 

    return(
        <FooterBox backColor={COLOR.gray95} width={100} padding="0 16px">
            <FlexBox margin="0 auto" maxWidth="950" borderTop={`1px solid ${COLOR.silverGray}`} padding="22px 0 0 0" justifyContent="start" alignItems="start">
                <Box borderRight={`.5px solid ${COLOR.silverGray}`} padding="10px 133px 84px 0">
                    <Nav display="inline-block">
                        <Ul>
                            {FOOTER_NAVIGATION.map(({ path, name, id} )=>{
                                return(
                                    <Li id={id} margin="0 0 20px 0" key={id}>
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
                        <Label margin="0 0 10px 0" htmlFor="phone">Введите номер</Label>
                        <Input value={phone} onChange={handleInputPhoneChange} type="tel" id="phone" margin="0 0 20px 0" bgColor={COLOR.gray95} color={COLOR.silverGray} border="none" outline="none" placeholder='+996 (__) ___ __ __'/>
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