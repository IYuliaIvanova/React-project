import React, { useState } from "react";
import { FlexBox } from "../../components/common-components/FlexBox/FlexBox"
import { Paragraph } from "../../components/common-components/Paragraph/Paragraph";
import { CustomLink } from "../../components/common-components/CustomLink/CustomLink";
import { COLOR } from "../../constants/color-constants"
import { Box } from "../../components/common-components/Box/Box";
import { Image } from "../../components/common-components/Image/Image";
import { Navigation } from "../../components/common-components/Navigation/Navigation";
import { UnorderedList } from "../../components/common-components/UnorderedList/UnorderedList";
import { ListItem } from "../../components/common-components/ListItem/ListItem";
import { CustomNavLink } from "../../components/common-components/CustomNavLink/CustomNavLink";
import { FOOTER_NAVIGATION } from "../../constants/footer-navigation-constants";
import { Span } from "../../components/common-components/Span/Span";
import { FooterBox } from "../../components/common-components/FooterBox/FooterBox";
import { Input } from "../../components/common-components/Input/Input";
import { Label } from "../../components/common-components/Label/Label";
import { INSTAGRAM, WHATSAPP, TELEGRAM } from "../../constants/social-constants";
import { FOOTER_PHONE_MASK } from "../../constants/masks-constants";
import { ONE_PHONE, TWO_PHONE } from "../../constants/href-constants";

export const FooterContainer = () =>{
    const [phone, setPhone] = useState('');

    const handleInputPhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const result = e.target.value.replaceAll(/\D/g, '').match(/(\d{0,2})(\d{0,3})(\d{0,2})(\d{0,2})/);
        if (result) {
            const [ numbOne, numbTwo, numbThree, numbFour, numbFive ] = result
            e.target.value = `+(${numbTwo}) ${numbThree}-${numbFour}-${numbFive}`;
        }
        setPhone(e.target.value);
    } 

    return (
        <FooterBox backColor={COLOR.gray95} width={100} padding="0 16px">
            <FlexBox
                margin="0 auto"
                maxWidth="950"
                borderTop={`1px solid ${COLOR.silverGray}`}
                padding="22px 0 0 0"
                justifyContent="start"
                alignItems="start"
            >
                <Box borderRight={`.5px solid ${COLOR.silverGray}`} padding="10px 133px 84px 0">
                    <Navigation display="inline-block">
                        <UnorderedList>
                            {FOOTER_NAVIGATION.map(({ path, children, id}) => {
                                return (
                                    <ListItem id={id} margin="0 0 20px 0" key={id}>
                                        <CustomNavLink  to={`/${path}`}>
                                            <Paragraph hover>{children}</Paragraph>
                                        </CustomNavLink>
                                    </ListItem>
                                )
                            })}
                        </UnorderedList>
                    </Navigation>
                </Box>
                <Box borderRight={`.5px solid ${COLOR.silverGray}`} padding="10px 77px 73px 40px">
                    <FlexBox flexDirection="column" maxWidth="233" alignItems="start">
                        <Label margin="0 0 10px 0" htmlFor="phone">Введите номер</Label>
                        <Input 
                            value={phone}
                            onChange={handleInputPhoneChange}
                            type="tel"
                            id="phone"
                            margin="0 0 20px 0"
                            bgColor={COLOR.gray95}
                            color={COLOR.silverGray}
                            placeholder={FOOTER_PHONE_MASK}
                        />
                        <Paragraph margin="0 0 10px 0" color={COLOR.silverGray}>Выберите удобный мессенджер для общения</Paragraph>
                        <FlexBox columnGap="30">
                            <CustomLink
                                href={WHATSAPP}
                                target="_blank"
                                social
                                width="50"
                                height="50"
                            >
                                <Image
                                    width="50"
                                    height="50"
                                    src={require("../../assets/icons/whatsapp.svg").default}
                                >
                                </Image>
                            </CustomLink>
                            <CustomLink
                                href={TELEGRAM}
                                target="_blank"
                                social
                                width="50"
                                height="50"
                            >
                                <Image width="50" height="50" src={require("../../assets/icons/telegram.svg").default}></Image>
                            </CustomLink>
                            <CustomLink
                                href={INSTAGRAM}
                                target="_blank"
                                social
                                width="50"
                                height="50"
                            >
                                <Image width="50" height="50" src={require("../../assets/icons/instagram.svg").default}></Image>
                            </CustomLink>
                        </FlexBox> 
                    </FlexBox>
                </Box>
                <FlexBox
                    flexDirection="column"
                    alignItems="start"
                    justifyContent="start"
                    padding="10px 5px 5px 41px"
                    alignSelf="start"
                >
                    <CustomLink
                        margin="0 0 5px 0"
                        lineHeight="18"
                        fontWeight="400"
                        color={COLOR.silverGray}
                        href={`tel:${ONE_PHONE}`}
                    >
                        Тел:
                        <Span
                            link txtDecoration="underline"
                            lineHeight="18"
                            fontWeight="400"
                            color={COLOR.silverGray}
                        >
                            {ONE_PHONE}
                        </Span> 
                    </CustomLink>
                    <CustomLink
                        margin="0 0 5px 0"
                        lineHeight="18"
                        fontWeight="400"
                        color={COLOR.silverGray}
                        href={`tel:${TWO_PHONE}`}
                    >
                        Тел:
                        <Span
                            link
                            txtDecoration="underline"
                            lineHeight="18"
                            fontWeight="400"
                            color={COLOR.silverGray}
                        >
                            {TWO_PHONE}
                        </Span>
                    </CustomLink>
                    <CustomLink
                        lineHeight="18"
                        fontWeight="400"
                        color={COLOR.silverGray}
                        margin="0 0 5px 0"
                        href=""
                    >
                        Адрес:Бакаева 126
                    </CustomLink>
                </FlexBox>
            </FlexBox>
        </FooterBox>
    )
}