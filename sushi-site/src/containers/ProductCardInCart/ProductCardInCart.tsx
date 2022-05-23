import React from "react";
import { FlexBox } from "../../components/common-components/FlexBox/FlexBox";
import { Box } from "../../components/common-components/Box/Box";
// import { BiggestFila } from "../../assets";
import { Paragraph } from "../../components/common-components/Paragraph/Paragraph";
import { MinusButton } from "../../components/product-description-components/MinusButton";
import { Span } from "../../components/common-components/Span/Span";
import { PlusButton } from "../../components/product-description-components/PlusButton";

interface IProductCardInCartProps {
    title: string;
    price: string;
}

export const ProductCardInCart = ({ title, price }: IProductCardInCartProps) => {
    return (
        <Box>
            <FlexBox justifyContent="flex-start">
                <Box
                    width="70"
                    height="47"
                    backgroundImage={require('../../assets/img/sushiSetsImg/biggestFila.png')}
                    margin="0 7px 0 0"
                />
                <Box>
                    <Paragraph>{title}</Paragraph>
                    <FlexBox alignItems="center">
                        <MinusButton
                            margin="0 9px 0 0"
                            cursor="pointer"
                            src={require(`../../assets/icons/buttons/minusButton.svg`).default}
                            width="10"
                            height='10'
                        />
                        <Span
                            fontWeight="700"
                        >
                            0
                        </Span>
                        <PlusButton
                            width="19"
                            margin="0 30px 0 9px"
                            cursor="pointer"
                            src={require(`../../assets/icons/buttons/plusButton_40x40.svg`).default}
                        />
                        <Paragraph>{price} СОМ</Paragraph>
                    </FlexBox>
                </Box>
            </FlexBox>
        </Box>
    )
}