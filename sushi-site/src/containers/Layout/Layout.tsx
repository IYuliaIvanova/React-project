import React from "react";
import {HeaderContainer} from "../HeaderContainer/HeaderContainer";
import {FlexBox} from "../../components/common-components/FlexBox/FlexBox";
import {MainNavigation} from "../MainNavigation/MainNavigation";

export const Layout = () => {

    return (
        <FlexBox alignItems="flex-start">
            <MainNavigation></MainNavigation>
            <HeaderContainer></HeaderContainer>
        </FlexBox>
    )
}