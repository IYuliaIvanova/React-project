import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { FlexBox } from "../../components/common-components/FlexBox/FlexBox";
import { Box } from "../../components/common-components/Box/Box";
import { ThirdLevelHeading } from "../../components/common-components/ThirdLevelHeading/ThirdLevelHeading";
import { Span } from "../../components/common-components/Span/Span";
import { PlusButton } from "../../components/product-description-components/PlusButton";
import { MinusButton } from "../../components/product-description-components/MinusButton";
import { Paragraph } from "../../components/common-components/Paragraph/Paragraph";
import { Button } from "../../components/common-components/Button/Button";
import { COLOR } from "../../constants/color-constants";
import { getDecrement, getIncrement } from "../../utils/counters";
import { addProduct } from "../../redux/actions/cartActionCreators/actionCreators";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { themes } from "../../constants/themes";

interface IProductDescriptionProps {
    id: string,
    img: string,
    title: string,
    price: string,
    weight: string,
}

export const ProductDescription = ({ id, title, price, weight, }: IProductDescriptionProps) => {
    const [ productDescriptionCounter, setProductDescriptionCounter ] = useState(1)
    const isTabletLandscape = useMediaQuery(themes.media.tabletLandscape);
    const isDesktop = useMediaQuery(themes.media.desktop);

    const dispatch = useDispatch();
    const dispatchedAddProduct = () => dispatch(addProduct({ title, price, id }))

    return (
        <FlexBox 
            width={100} 
            justifyContent="space-around" 
            flexDirection={isTabletLandscape ? "column" : "row"}
            alignItems={isTabletLandscape ? "center" : ""}
        >
            <Box
                maxWidth="620"
                width={100}
                height="435"
                backgroundImage={require('../../assets/img/sushiSetsImg/biggestFila.png')}
                margin="0 30px 0 0"
            />
            <Box padding="0 16px 0 0 ">
                <ThirdLevelHeading
                    fontSize="48"
                    lineHeight="60"
                    margin="0 0 10px"
                >
                    {title}
                </ThirdLevelHeading>
                <Paragraph
                    fontWeight="300"
                    margin="0 0 40px"
                    color={COLOR.pastelOrange}
                >
                    {weight}
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
                        {+price * productDescriptionCounter} COM
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
                <Button onClick={dispatchedAddProduct} width="188">Хочу!</Button>
            </Box>
        </FlexBox>
    )
}