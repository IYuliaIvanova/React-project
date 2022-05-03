import React, { useState } from "react";
import { COLOR } from "../../constants/color-constants";
import { FlexBox } from "../../components/common-components/FlexBox/FlexBox";
import { Paragraph } from "../../components/common-components/Paragraph/Paragraph";
import { Carousel } from "../../containers/Carousel/Carousel";
import { NEW_SUSHI_SETS } from "../../constants/new-sushi-sets";
import { POPULAR_SUSHI_SETS } from "../../constants/popular-sushi-sets";
import { ProductCard } from "../../containers/ProductCard/ProductCard";
import { NOVELTIES, POPULAR } from "../../constants/data-type-constants";

export const MainPage = () => {
    const [typeOfData, setTypeOfData] = useState(NEW_SUSHI_SETS)

    const changeTypeOfData = (e: React.MouseEvent<HTMLParagraphElement>) => {
        const { target } = e
        const { textContent } = target as HTMLParagraphElement

        switch (textContent) {
            case NOVELTIES:
                return setTypeOfData(NEW_SUSHI_SETS);
            case POPULAR:
                return setTypeOfData(POPULAR_SUSHI_SETS);
            default:
        }
    }

    return(
        <FlexBox
            justifyContent="flex-start"
            flexDirection="column"
            padding="30px 110px 60px 110px"
            backColor={COLOR.gray95}
            width={100}
        >
            <FlexBox margin="0 0 30px 17px" alignSelf="flex-start">
                <Paragraph
                    fontSize="24"
                    lineHeight="30"
                    margin="0 30px 0 0"
                    hover
                    onClick={changeTypeOfData}
                >
                    Новинки
                </Paragraph>
                <Paragraph
                    fontSize="24"
                    lineHeight="30"
                    hover
                    onClick={changeTypeOfData}
                >
                    Популярное
                </Paragraph>
            </FlexBox>
            <Carousel
                windowWidth="949"
                amountOfCardsOnWindow={3}
                amountOfCards={typeOfData.length}
            >
                {typeOfData.map(({ id, img, h3, p }, index, arr) => {
                    if ((index+1) % 3 === 0) {
                        return (
                            <ProductCard key={id} src={img}></ProductCard>
                        )
                    } else if (index === 0) {
                        return (
                            <ProductCard key={id} src={img} margin="0 41px 0 0"></ProductCard>
                        )
                    } else {
                        return (
                            <ProductCard key={id} src={img} margin="0 41px 0 0"></ProductCard>
                        )
                    }
                })}
            </Carousel>
        </FlexBox>
    )
}