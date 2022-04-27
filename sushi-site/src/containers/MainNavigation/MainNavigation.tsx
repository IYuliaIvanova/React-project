import React from "react";
import { FlexBox } from "../../components/common-components/FlexBox/FlexBox"
import { Paragraph } from "../../components/common-components/Paragraph/Paragraph";
import { Box } from "../../components/common-components/Box/Box";
import { Icon } from "../../components/common-components/Icon/Icon";
import { CustomNavLink } from "../../components/common-components/CustomNavLink/CustomNavLink";
import { Nav } from "../../components/common-components/Nav/Nav";
import { Ul } from "../../components/common-components/Ul/Ul";
import { Li } from "../../components/common-components/Li/Li";
import { mainNavigationData } from "./MainNavigationConstants";

export const MainNavigation = () => {
    return(
        <Box padding="0 0 0 123px" width="320">
            <Box>
                <CustomNavLink margin="0 0 60px" to={'/'}>
                    <Icon src={require("../../assets/img/DeskTopLogo.svg").default}></Icon>
                </CustomNavLink>
            </Box>
            <Nav padding="0 0 0 8px">
                <Ul>
                    {mainNavigationData.map(({path, name})=>{
                        return(
                            <Li margin="0 0 30px 0" key={path+name}>
                                <CustomNavLink justifyContent="start" display="flex" to={'/'}>
                                    <Icon margin="0 20px 0 0" src={require(`../../assets/img/${path}.svg`)}></Icon>
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