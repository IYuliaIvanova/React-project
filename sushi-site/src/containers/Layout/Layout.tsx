import React from "react";
import { HeaderContainer } from "../HeaderContainer/HeaderContainer";
import { FlexBox } from "../../components/common-components/FlexBox/FlexBox";
import { MainNavigation } from "../MainNavigation/MainNavigation";
import { FooterContainer } from "../FooterContainer/FooterContainer";
import { RightSidebar } from "../RightSidebar/RightSidebar";
import { Outlet } from "react-router-dom";

export const Layout = () => {
    return (
        <FlexBox alignItems="start">
            <MainNavigation/>
            <FlexBox width="1170" flexDirection="column" alignItems="">
                <HeaderContainer/>
                <Outlet/>
                <FooterContainer/>
            </FlexBox>
            <RightSidebar/>
        </FlexBox>
    )
}