import React from "react";
import { FlexBox } from "../../components/common-components/FlexBox/FlexBox"
import { Paragraph } from "../../components/common-components/Paragraph/Paragraph";
import { Box } from "../../components/common-components/Box/Box";
import { Image } from "../../components/common-components/Image/Image";
import { CustomNavLink } from "../../components/common-components/CustomNavLink/CustomNavLink";
import { Nav } from "../../components/common-components/Nav/Nav";
import { Ul } from "../../components/common-components/Ul/Ul";
import { Li } from "../../components/common-components/Li/Li";
import { COLOR } from "../../constants/color-constants";
import { MAIN_NAVIGATION } from "../../constants/main-navigation-constants";

export const MainNavigation = () => {

    return(
        <Box padding="26px 40px 0 100px" width="320" textAlign="center">
            <CustomNavLink display="inline-block" width="137" margin="0 0 30px" to={'/'}>
                <Image src={require("../../assets/img/DeskTopLogo.svg").default}></Image>
            </CustomNavLink>
            <Nav display="inline-block" width="180" padding="31px 0 0 20px" borderTop={`.5px solid ${COLOR.silverGray}`}>
                <Ul>
                    {MAIN_NAVIGATION.map(({ path, name} )=>{
                        return(
                            <Li margin="0 0 30px 0" key={path + name}>
                                <CustomNavLink justifyContent="start" display="flex" to={'/'}>
                                    <Image margin="0 20px 0 0" src={require(`../../assets/img/${path}.svg`)}></Image>
                                    <Paragraph hover>{name}</Paragraph>
                                </CustomNavLink>
                            </Li>
                        )
                    })}
                </Ul>
            </Nav>
        </Box>
    )
}