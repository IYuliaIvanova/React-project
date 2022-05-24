import React from "react";
import { useSelector } from "react-redux";
import { Box } from "../../components/common-components/Box/Box";
import { Paragraph } from "../../components/common-components/Paragraph/Paragraph";
import { COLOR } from "../../constants/color-constants";
import { ProductCardInCart } from "../ProductCardInCart/ProductCardInCart";
import { RootState } from "../../redux/reducers";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { themes } from "../../constants/themes";


export const RightSidebar = () => {
    const cart = useSelector((state: RootState) => state.cart)
    const isTabletLandscape = useMediaQuery(themes.media.tabletLandscape);
    return (
        <Box textAlign="center" maxWidth={isTabletLandscape ? "330" :"430"} width={100} padding="55px 100px 5px 40px">
            {cart.length === 0 ?
                <Box borderRadius="5px" maxWidth="290" width={100} backColor={COLOR.gray95}>
                    <Box padding="12px 13px 0 12px" margin="0 0 26px 0">
                        <Paragraph
                            fontSize="24"
                            lineHeight="30"
                            margin="0 0 10px 0"
                        >
                            Ваша корзина пуста.
                        </Paragraph>
                        <Paragraph fontWeight="400" color={COLOR.silverGray}>Добавьте же скорее что-нибудь!</Paragraph>
                    </Box>
                    <Paragraph
                        fontWeight="400"
                        color={COLOR.gray95}
                        lineHeight="17"
                        padding="12px 32px 11px"
                        bgColor={COLOR.pastelOrange}
                    >
                        Бесплатная доставка от 800 СОМ
                    </Paragraph>
                </Box>
                :
                <Box borderRadius="5px" maxWidth="290" width={100} backColor={COLOR.gray95} padding="10px 0" margin="0 0 10px">
                    <Paragraph
                        fontSize="24"
                        lineHeight="30"
                        margin="0 0 10px 0"
                    >
                        Корзина
                    </Paragraph>
                    {cart.map(({ title, price, id }) => {
                        return (
                            <ProductCardInCart title={title} price={price}/>
                        )
                    })}
                </Box>
            }        
        </Box>
    )
}