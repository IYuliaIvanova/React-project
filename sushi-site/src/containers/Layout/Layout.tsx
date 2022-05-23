import React from "react";
import { HeaderContainer } from "../HeaderContainer/HeaderContainer";
import { FlexBox } from "../../components/common-components/FlexBox/FlexBox";
import { MainNavigation } from "../MainNavigation/MainNavigation";
import { FooterContainer } from "../FooterContainer/FooterContainer";
import { RightSidebar } from "../RightSidebar/RightSidebar";
import { Outlet } from "react-router-dom";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { themes } from "../../constants/themes";

export const Layout = () => {
    const isMobile = useMediaQuery(themes.media.phone);
    
    return (
        <FlexBox alignItems="start" justifyContent="center">
            {!isMobile && <MainNavigation/>}
            <FlexBox alignSelf="auto" width={100} maxWidth={isMobile ? '365' : '1170'} flexDirection="column">
                <HeaderContainer/>
                <Outlet/>
                <FooterContainer/>
            </FlexBox>
            {!isMobile && <RightSidebar/>}
        </FlexBox>
    )
}