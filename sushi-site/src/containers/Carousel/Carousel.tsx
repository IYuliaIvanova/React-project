import React, { useState } from "react"
import { Box } from "../../components/common-components/Box/Box"
import { FlexBox } from "../../components/common-components/FlexBox/FlexBox";
import { Image } from "../../components/common-components/Image/Image";

interface ICarousel {
    children: React.ReactNode;
    windowWidth: string;
    amountOfCards: number;
    amountOfCardsOnWindow: number;
    arrowsMargin: string;
}

export const Carousel = ({ children, amountOfCardsOnWindow, windowWidth, amountOfCards, arrowsMargin }: ICarousel) => {
    const [offset, setOffset] = useState(0)

    const handleLeftArrowClick = () => {
        setOffset((currentOffset) => {
            const newOffset = currentOffset + Number(windowWidth)
            return Math.min(newOffset, 0)
        })
    }

    const handleRightArrowClick = () => {
        setOffset((currentOffset) => {
            const newOffset = currentOffset - +windowWidth
            const minOffset = (-Number(windowWidth) * (Math.ceil(amountOfCards / amountOfCardsOnWindow) - 1))
            return Math.max(minOffset, newOffset)
        })
    }

    return (
        <FlexBox position="relative">
            <Image
                onClick={handleLeftArrowClick}
                cursor="pointer"
                margin={`0 ${arrowsMargin}px 0 0`}
                src={require("../../assets/icons/sliderArrowLeft.svg").default}
            >
            </Image>
            <Box
                overflow="hidden"
                width={windowWidth}
            >
                <FlexBox
                    width={100}
                    style={{transform: `translateX(${offset}px)`}}
                    justifyContent="flex-start"
                    alignItems="normal"
                >
                    {children}
                </FlexBox>
            </Box>
            <Image
                onClick={handleRightArrowClick}
                cursor="pointer"
                margin={`0 0 0 ${arrowsMargin}px`}
                src={require("../../assets/icons/sliderArrowRight.svg").default}
            >
            </Image>
        </FlexBox>
    )
}