import React from "react";
import { FlexBox } from "../../components/common-components/FlexBox/FlexBox";
import { Image } from "../../components/common-components/Image/Image";
import { Paragraph } from "../../components/common-components/Paragraph/Paragraph";
import { Span } from "../../components/common-components/Span/Span";
import { PlusButton } from "../../components/product-description-components/PlusButton";

interface IRecomendProductCardProps {
    margin?: string
}

export const RecomendProductCard = ({ margin }: IRecomendProductCardProps) => {
    return (
        <FlexBox margin={margin} flexDirection="column" alignItems="center" maxWidth="200" width={100}>
            <Image margin="0 0 10px" src={require(`../../assets/img/recomendProductImg/fila.png`)}></Image>
            <Paragraph margin="0 0 10px">Филадельфия</Paragraph>
            <FlexBox alignItems="center">
                <Span
                    fontWeight="700"
                    fontSize="24"
                    lineHeight="30"
                    margin="0 10px 0 0"
                >
                    140 СОМ
                </Span>
                <PlusButton width="26" src={require(`../../assets/icons/buttons/plusButton_40x40.svg`).default}></PlusButton>
            </FlexBox>
        </FlexBox>
    )
}