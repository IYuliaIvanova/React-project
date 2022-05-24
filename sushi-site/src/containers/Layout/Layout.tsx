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
    const isTabletLandscape = useMediaQuery(themes.media.tabletLandscape);
    const isDesktop = useMediaQuery(themes.media.desktop);
    console.log(isTabletLandscape)
    return (
        <FlexBox 
            alignItems="start" 
            justifyContent="center" 
            margin={isTabletLandscape ? "0 auto" : ''}
        >
            {!isTabletLandscape && <MainNavigation/>}
            <FlexBox alignSelf="auto" width={100} maxWidth={isDesktop ? '800' : '1170'} flexDirection="column">
                <HeaderContainer/>
                <Outlet/>
                <FooterContainer/>
            </FlexBox>
            {!isTabletLandscape && <RightSidebar/>}
        </FlexBox>
    )
}