import React from "react";
import { Paragraph } from "../../components/common-components/Paragraph/Paragraph";
import { Box } from "../../components/common-components/Box/Box";
import { Image } from "../../components/common-components/Image/Image";
import { CustomNavLink } from "../../components/common-components/CustomNavLink/CustomNavLink";
import { Navigation } from "../../components/common-components/Navigation/Navigation";
import { UnorderedList } from "../../components/common-components/UnorderedList/UnorderedList";
import { ListItem } from "../../components/common-components/ListItem/ListItem";
import { COLOR } from "../../constants/color-constants";
import { MAIN_NAVIGATION } from "../../constants/main-navigation-constants";

export const MainNavigation = () => {
    return (
        <Box
            padding="26px 40px 0 100px"
            maxWidth="320"
            width={100}
            textAlign="center"
        >
            <CustomNavLink
                display="inline-block"
                maxWidth="137"
                margin="0 0 30px"
                to={'/'}
            >
                <Image src={require("../../assets/icons/DeskTopLogo.svg").default}></Image>
            </CustomNavLink>
            <Navigation
                display="inline-block"
                width="180"
                padding="31px 0 0 20px"
                borderTop={`.5px solid ${COLOR.silverGray}`}
            >
                <UnorderedList>
                    {MAIN_NAVIGATION.map(({ path, name, id }) => {
                        return (
                            <ListItem id={id} margin="0 0 30px 0" key={id}>
                                <CustomNavLink justifyContent="start" display="flex" to={'/'}>
                                    <Image margin="0 20px 0 0" src={require(`../../assets/img/mainNavigationIcons/${path}.svg`)}></Image>
                                    <Paragraph hover>{name}</Paragraph>
                                </CustomNavLink>
                            </ListItem>
                        )
                    })}
                </UnorderedList>
            </Navigation>
        </Box>
    )
}