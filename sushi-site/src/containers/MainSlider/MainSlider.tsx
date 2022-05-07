import React, { useState } from "react"
import { Box } from "../../components/common-components/Box/Box"
import { FlexBox } from "../../components/common-components/FlexBox/FlexBox";
import { Image } from "../../components/common-components/Image/Image";
import {Button} from "../../components/common-components/Button/Button";
import {COLOR} from "../../constants/color-constants";
import { IMainSliderConstantsProps } from "../../constants/main-slider-constants";

interface ICarouselProps {
    windowWidth: string;
    amountOfCards: IMainSliderConstantsProps[];
    children: React.ReactNode
}

export const MainSlider = ({ windowWidth, amountOfCards, children }: ICarouselProps) => {
    const [offset, setOffsetMainSlider] = useState(0)


    const handleDotClick = (slidIndex: number) => {
        setOffsetMainSlider(() => {
            return -slidIndex * +windowWidth
        })
    }

    return (
        <FlexBox margin="0 0 30px 0" flexDirection="column" alignItems="center">
            <FlexBox margin="0 0 11px 0" width={100} >
                <Box
                    overflow="hidden"
                    width={windowWidth}
                >
                    <FlexBox
                        width={100}
                        style={{transform: `translateX(${offset}px)`}}
                        justifyContent="flex-start"
                    >
                        {children}
                    </FlexBox>
                </Box>
            </FlexBox>
                <Box margin="o auto">
                    {amountOfCards.map((item, index) => {
                        return (
                            <Button onClick={() => handleDotClick(index)}
                                    width="10"
                                    height="10"
                                    bgColor={COLOR.silverGray}
                                    borderRadius={50}
                                    margin="0 10px 0 0"
                            >
                            </Button>
                        )
                    })}
                </Box>
        </FlexBox>
    )
}

