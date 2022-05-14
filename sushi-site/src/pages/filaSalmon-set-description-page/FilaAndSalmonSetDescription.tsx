import React from "react";
import { Box } from "../../components/common-components/Box/Box";
import { ProductDescription } from "../../containers/ProductDescription/ProductDescription";
import { RecomendProductCard } from "../../containers/RecomendProductCard/RecomendProductCard";
import { Carousel } from "../../containers/Carousel/Carousel";
import { COLOR } from "../../constants/color-constants";
import { Paragraph } from "../../components/common-components/Paragraph/Paragraph";
import { FlexBox } from "../../components/common-components/FlexBox/FlexBox";
import { Image} from "../../components/common-components/Image/Image";
import { CustomNavLink } from "../../components/common-components/CustomNavLink/CustomNavLink";
// import { useHistory } from "react-router-dom";  как заюзать?

export const FilaAndSalmonSetDescription = () => {

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
                <ProductDescription></ProductDescription>
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
                        windowWidth="860"
                        amountOfCardsOnWindow={3}
                        amountOfCards={4}
                    >
                        <RecomendProductCard margin="0 120px 0 0"></RecomendProductCard>
                        <RecomendProductCard margin="0 120px 0 0"></RecomendProductCard>
                        <RecomendProductCard margin="0 120px 0 0"></RecomendProductCard>
                        <RecomendProductCard margin="0"></RecomendProductCard>
                    </Carousel>
                </Box>
            </>
    )
}