import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Box } from "../../components/common-components/Box/Box";
import { ProductDescription } from "../../containers/ProductDescription/ProductDescription";
import { RecomendProductCard } from "../../containers/RecomendProductCard/RecomendProductCard";
import { Carousel } from "../../containers/Carousel/Carousel";
import { COLOR } from "../../constants/color-constants";
import { Paragraph } from "../../components/common-components/Paragraph/Paragraph";
import { FlexBox } from "../../components/common-components/FlexBox/FlexBox";
import { Image} from "../../components/common-components/Image/Image";
import { CustomNavLink } from "../../components/common-components/CustomNavLink/CustomNavLink";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { themes } from "../../constants/themes";

interface IState {
    id: string,
    src: string,
    title: string,
    price: string,
    weight: string,
    linkTo: string
}

export const ProductDescriptionPage = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const isTabletLandscape = useMediaQuery(themes.media.tabletLandscape);

    const state = location.state as IState

    const { id, src, title, price, weight } = state

    const getPreviousPage = () => {
        navigate(-1)
    }
    return (
            <>
                <FlexBox
                    maxWidth="1170"
                    width={100}
                    padding="53px 40px 58px"
                    bgColor={COLOR.gray95}
                    justifyContent="space-between"
                >
                    <CustomNavLink
                        to={`/`}
                        display="flex"
                        alignItems="center"
                        onClick={getPreviousPage}
                    >
                    <Image margin="0 10px 0 0" src={require("../../assets/icons/left-arrow.svg").default}/>
                    <Paragraph>Назад</Paragraph>
                    </CustomNavLink>
                    <CustomNavLink
                        to={`/`}
                        display="flex"
                        alignItems="center"
                    >
                        <Paragraph>Вперед</Paragraph>
                        <Image margin="0 0 0 10px" src={require("../../assets/icons/right-arrow.svg").default}/>
                    </CustomNavLink>
                </FlexBox>
                <ProductDescription
                    id={id}
                    img={src}
                    title={title}
                    price={price}
                    weight={weight}
                />
                <Box backColor={COLOR.gray95} padding="30px 0">
                    <Paragraph
                        fontSize="24"
                        lineHeight="30"
                        margin="0 0 20px"
                        textAlign="center"
                    >
                        Рекомендуем к этому товару
                    </Paragraph>
                    <Carousel
                        arrowsMargin="95"
                        windowWidth={isTabletLandscape ? "260" : "860"}
                        amountOfCardsOnWindow={isTabletLandscape ? 1 : 3}
                        amountOfCards={isTabletLandscape ? 5 : 4}
                    >
                        <RecomendProductCard margin={isTabletLandscape ? "0 60px 0 0" : "0 90px 0 0"}/>
                        <RecomendProductCard margin={isTabletLandscape ? "0 60px 0 0" : "0 90px 0 0"}/>
                        <RecomendProductCard margin={isTabletLandscape ? "0 60px 0 0" : "0 90px 0 0"}/>
                        <RecomendProductCard margin={isTabletLandscape ? "0 60px 0 0" : "0 90px 0 0"}/>
                        <RecomendProductCard margin={isTabletLandscape ? "0 60px 0 0" : "0 90px 0 0"}/>
                    </Carousel>
                </Box>
            </>
    )
}