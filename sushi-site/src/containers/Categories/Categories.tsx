import React from "react";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { FlexBox } from "../../components/common-components/FlexBox/FlexBox";
import { CATEGORIES_DATA_DESKTOP, CATEGORIES_DATA_MOBILE } from "../../constants/categories-constants";
import { themes } from "../../constants/themes";
import { CategoriesItem } from "../CategoriesItem/CategoriesItem";

export const Categories = () => {
    const isTabletLandscape = useMediaQuery(themes.media.tabletLandscape);

    return (
        <FlexBox 
            width={100}
            margin='0 0 52px 0'
            justifyContent={isTabletLandscape ? "space-between" : "center"}
            flexDirection="row" 
            columnGap={isTabletLandscape ? "10" : "26"}
            rowGap={isTabletLandscape ? "10" : "30"}
            flexWrap="wrap"
        >
            {isTabletLandscape ? CATEGORIES_DATA_MOBILE.map(({ id, img, children }) => {
                return (
                        <CategoriesItem key={id} id={id} img={img} children={children}/>
                )
            }) : CATEGORIES_DATA_DESKTOP.map(({ id, img, children }) => {
                return (
                        <CategoriesItem key={id} id={id} img={img} children={children}/>
                )
            })}
        </FlexBox>
    )
}