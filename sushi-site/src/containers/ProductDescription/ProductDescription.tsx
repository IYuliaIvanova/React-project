import React, { useState } from "react";
import { FlexBox } from "../../components/common-components/FlexBox/FlexBox";
import { Box } from "../../components/common-components/Box/Box";
import { BiggestFila } from "../../assets";
import { ThirdLevelHeading } from "../../components/common-components/ThirdLevelHeading/ThirdLevelHeading";
import { Span } from "../../components/common-components/Span/Span";
import { PlusButton } from "../../components/product-description-components/PlusButton";
import { MinusButton } from "../../components/product-description-components/MinusButton";
import { Paragraph } from "../../components/common-components/Paragraph/Paragraph";
import { Button } from "../../components/common-components/Button/Button";
import { COLOR } from "../../constants/color-constants";
import { getDecrement, getIncrement } from "../../utils/counters";

export const ProductDescription = () => {

    const [ productDescriptionCounter, setProductDescriptionCounter ] = useState(0)

    return (
        <FlexBox maxWidth="1170" width={100} justifyContent="space-around">
            <Box
                maxWidth="620"
                width={100}
                height="435"
                backgroundImage={BiggestFila}
                margin="0 30px 0 0"
            />
            <Box padding="0 16px 0 0 ">
                <ThirdLevelHeading
                    fontSize="48"
                    lineHeight="60"
                    margin="0 0 10px"
                >
                    Филадельфия и лосось сет
                </ThirdLevelHeading>
                <Paragraph
                    fontWeight="300"
                    margin="0 0 40px"
                    color={COLOR.pastelOrange}
                >
                    1260 грамм
                </Paragraph>
                <FlexBox
                    justifyContent="flex-start"
                    alignItems="center"
                    margin="0 0 26px"
                >
                    <Span
                        fontWeight="700"
                        fontSize="24"
                        lineHeight="30"
                        margin="0 19px 0 0"
                    >
                        1150 COM
                    </Span>
                    <MinusButton
                        onClick={() => getDecrement(productDescriptionCounter, setProductDescriptionCounter)}
                        margin="0 19px 0 0"
                        cursor="pointer"
                        src={require(`../../assets/icons/buttons/minusButton.svg`).default}
                        width='21'
                        height='21'
                    />
                    <Span fontWeight="700"
                          fontSize="36"
                          lineHeight="45"
                    >
                        {productDescriptionCounter}
                    </Span>
                    <PlusButton
                        onClick={() => getIncrement(productDescriptionCounter, setProductDescriptionCounter)}
                        margin="0 0 0 19px"
                        cursor="pointer"
                        src={require(`../../assets/icons/buttons/plusButton_40x40.svg`).default}
                    />
                </FlexBox>
                <FlexBox
                    flexDirection="column"
                    alignItems="start"
                    margin='0 0 31px'
                >
                    <Span margin="0 0 10px">Состав</Span>
                    <Paragraph fontWeight="300" >Лосось, сыр "Филадельфия", огурец, авокадо</Paragraph>
                </FlexBox>
                <Button width="188">Хочу!</Button>
            </Box>
        </FlexBox>
    )
}