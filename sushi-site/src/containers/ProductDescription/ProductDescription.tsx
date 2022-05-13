import React from "react";
import { FlexBox } from "../../components/common-components/FlexBox/FlexBox";
import { Box } from "../../components/common-components/Box/Box";
import { BiggestFila } from "../../assets";
import {ThirdLevelHeading} from "../../components/common-components/ThirdLevelHeading/ThirdLevelHeading";
import {Span} from "../../components/common-components/Span/Span";
import { Button } from "../../components/common-components/Button/Button";
import {PlusButton} from "../../components/product-description-components/PlusButton";
import {MinusButton} from "../../components/product-description-components/MinusButton";


export const ProductDescription = () => {
    return (
        <FlexBox maxWidth="1170" width={100} justifyContent="space-between">
            <Box
                maxWidth="620"
                width={100}
                height="435"
                backgroundImage={BiggestFila}
            />
            <Box>
                <ThirdLevelHeading>Филадельфия и лосось сет</ThirdLevelHeading>
                <Span>1260 грамм</Span>
                <FlexBox>
                    <Span>1150 COM</Span>
                    <MinusButton cursor="pointer" src={require(`../../assets/icons/buttons/minusButton.svg`).default}/>
                    <Span>0</Span>
                    <PlusButton cursor="pointer" src={require(`../../assets/icons/buttons/plusButton_40x40.svg`).default}/>
                </FlexBox>
            </Box>
        </FlexBox>
    )
}