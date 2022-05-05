import React from "react";
import { useMediaQuery } from "../../api/hooks/useMediaQuery";
import { FlexBox } from "../../components/common-components/FlexBox/FlexBox";
import { CATEGORIES_DATA_DESKTOP, CATEGORIES_DATA_MOBILE } from "../../constants/categories-constants";
import { themes } from "../../constants/themes";
import { CategoriesItem } from "../CategoriesItem/CategoriesItem";

export const Categories = () => {
    const isMobile = useMediaQuery(themes.media.phone);

    return (
        <FlexBox 
            width={100}
            margin='0 0 52px 0'
            justifyContent="space-between"
            flexDirection="row" 
            columnGap={isMobile ? "10" : "26"}
            rowGap={isMobile ? "10" : "30"}
            flexWrap="wrap"
        >
            {isMobile ? CATEGORIES_DATA_MOBILE.map(({ id, img, p }) => {
                return (
                        <CategoriesItem key={id} id={id} img={img} p={p} />
                )
            }) : CATEGORIES_DATA_DESKTOP.map(({ id, img, p }) => {
                return (
                        <CategoriesItem key={id} id={id} img={img} p={p} />
                )
            })}
        </FlexBox>
    )
}