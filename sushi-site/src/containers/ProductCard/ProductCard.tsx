import React from "react";
import { Box } from "../../components/common-components/Box/Box";
import { Image } from "../../components/common-components/Image/Image";
import { ThirdLevelHeading } from "../../components/common-components/ThirdLevelHeading/ThirdLevelHeading";
import { Paragraph } from "../../components/common-components/Paragraph/Paragraph";
import { COLOR } from "../../constants/color-constants"
import { FlexBox } from "../../components/common-components/FlexBox/FlexBox";
import { Button } from "../../components/common-components/Button/Button";
import { Span } from "../../components/common-components/Span/Span";
import { useNavigate } from "react-router-dom";

interface IProductCard {
    margin?: string;
    src?: string;
    title: string;
    height?: string;
    pieces: string;
    price: string;
    weight: string;
    linkTo?: string
    id?: string
}

export const ProductCard = ({ margin, src, title, pieces, price, weight, linkTo, id }: IProductCard) => {
    const navigate = useNavigate()

    const handlerClickNavigate = () => {
        navigate(`/${linkTo}`, { state: { id, title, price, weight, src } })
    }

    return (
        <Box
            maxWidth="289"
            margin={margin}
            padding="0 18px"
            width={100}
            backColor={COLOR.white}
        >
            <Box>
            <Image height="210" margin="0 0 30px" src={require(`../../assets/img/sushiSetsImg/${src}.png`)}></Image>
            </Box>
            <ThirdLevelHeading
                margin="0 0 16.6px"
                fontSize="24"
                lineHeight="30"
                height="60"
            >
                {title}
            </ThirdLevelHeading>
            <Paragraph
                fontWeight="400"
                color={COLOR.silverGray}
                margin="0 0 20px"
            >
                {`${weight} ${pieces}`}
            </Paragraph>
            <FlexBox
                padding="11px 0 10px 0"
                borderTop={`1px solid 
                ${COLOR.silverGray}`}
                justifyContent="space-between"
                alignItems="center"
            >
                <Span
                    fontSize="24"
                    lineHeight="30"
                    fontWeight="700"
                >
                    {price} COM
                </Span>
                    <Button onClick={handlerClickNavigate} width="143">Хочу!</Button>
            </FlexBox>
        </Box>
    )
}