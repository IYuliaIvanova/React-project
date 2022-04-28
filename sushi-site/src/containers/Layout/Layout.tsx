import React from "react";
import { HeaderContainer } from "../HeaderContainer/HeaderContainer";
import { FlexBox } from "../../components/common-components/FlexBox/FlexBox";
import { MainNavigation } from "../MainNavigation/MainNavigation";
import { FooterContainer } from "../FooterContainer/FooterContainer";
import { RightSidebar } from "../RightSidebar/RightSidebar";

export const Layout = () => {

    return (
        <FlexBox alignItems="start">
            <MainNavigation></MainNavigation>
            <FlexBox flexDirection="column" alignItems="">
                <HeaderContainer></HeaderContainer>
                <FooterContainer></FooterContainer>
            </FlexBox>
            <RightSidebar></RightSidebar>
        </FlexBox>
    )
}