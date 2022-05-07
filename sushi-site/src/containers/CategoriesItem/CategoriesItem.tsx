import React from "react";
import { useMediaQuery } from "../../api/hooks/useMediaQuery";
import { CustomNavLink } from "../../components/common-components/CustomNavLink/CustomNavLink";
import { Image } from "../../components/common-components/Image/Image";
import { Paragraph } from "../../components/common-components/Paragraph/Paragraph";
import { COLOR } from "../../constants/color-constants";
import { themes } from "../../constants/themes";

interface ICategoriesItemProp {
    id: string;
    img: string;
    p: string
}

export const CategoriesItem = ({ id, img, p }: ICategoriesItemProp) => {
    const isMobile = useMediaQuery(themes.media.phone);
    
    return (
        <CustomNavLink 
            position="relative"     
            maxWidth={isMobile ? "330" :"470"}
            maxHeight={isMobile ? "157" : "200"} 
            to={'/'}
        >
            <Image width={100} height={100} src={require(`../../assets/img/categoriesImg/${img}.png`)}></Image>
            <Paragraph 
                position="absolute" 
                bottom="10" 
                left="10"
                fontSize="24"
                lineHeight="30"
                color={COLOR.white}
            >{p}</Paragraph>
        </CustomNavLink>
    )
}