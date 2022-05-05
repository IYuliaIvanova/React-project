import React, { useState } from "react"
import { Box } from "../../components/common-components/Box/Box"
import { FlexBox } from "../../components/common-components/FlexBox/FlexBox";
import { Image } from "../../components/common-components/Image/Image";
import {Button} from "../../components/common-components/Button/Button";
import {COLOR} from "../../constants/color-constants";

interface ICarousel {
    windowWidth: string;
    amountOfCards: number;
    amountOfCardsOnWindow: number;
}

export const MainSlider = ({ amountOfCardsOnWindow, windowWidth, amountOfCards }: ICarousel) => {
    const [offset, setOffsetMainSlider] = useState(0)

    const handleDotClick = (x: number) => {
        setOffsetMainSlider((currentOffset) => {
            const newOffset = -x * +windowWidth
            console.log(windowWidth)
            // const minOffset = (-Number(windowWidth) * (Math.ceil(amountOfCards / amountOfCardsOnWindow) - 1))
            console.log(newOffset)
            return newOffset
        })
    }

    return (
        <>
        <FlexBox position="relative" width={100}>
            <Box
                overflow="hidden"
                width={windowWidth}
            >
                <FlexBox
                    width={100}
                    style={{transform: `translateX(${offset}px)`}}
                    justifyContent="flex-start"
                >
                    <Image src={require(`../../assets/img/MainSliderImg/first.png`)}></Image>
                    <Image src={require(`../../assets/img/MainSliderImg/first.png`)}></Image>
                    <Image src={require(`../../assets/img/MainSliderImg/first.png`)}></Image>
                </FlexBox>
            </Box>
        </FlexBox>
            <div>
                {[1, 2, 3].map((item, index) => {
                    return (
                        <Button onClick={() => handleDotClick(index)} width="10" height="10" bgColor={COLOR.silverGray} borderRadius={50} margin="0 10px 0 0"></Button>
                    )
                })}
            </div>
        </>
    )
}

