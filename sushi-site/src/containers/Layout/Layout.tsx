import React from "react";
import { HeaderContainer } from "../HeaderContainer/HeaderContainer";
import { FlexBox } from "../../components/common-components/FlexBox/FlexBox";
import { MainNavigation } from "../MainNavigation/MainNavigation";
import { FooterContainer } from "../FooterContainer/FooterContainer";
import { RightSidebar } from "../RightSidebar/RightSidebar";
import { Outlet } from "react-router-dom";
import { useMediaQuery } from "../../api/hooks/useMediaQuery";
import { themes } from "../../constants/themes";

export const Layout = () => {
    const isMobile = useMediaQuery(themes.media.phone);
    
    return (
        <FlexBox alignItems="start">
            <MainNavigation/>
            <FlexBox width={isMobile ? "365" : "1170"} flexDirection="column" alignItems="">
                <HeaderContainer/>
                <Outlet/>
                <FooterContainer/>
            </FlexBox>
            <RightSidebar/>
        </FlexBox>
    )
}