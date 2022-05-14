import React, { useState } from "react"
import { Box } from "../../components/common-components/Box/Box"
import { FlexBox } from "../../components/common-components/FlexBox/FlexBox";
import { Image } from "../../components/common-components/Image/Image";
import { Paragraph } from "../../components/common-components/Paragraph/Paragraph";
import { SortSelect } from "../../containers/SortSelect/SortSelect";
import { COLOR } from "../../constants/color-constants";
import { SortItemsConstants } from "../../constants/sort-items-constants";
import { NEW_SUSHI_SETS } from "../../constants/new-sushi-sets";
import { ProductCard } from "../../containers/ProductCard/ProductCard";
import { HiddenText } from "../../containers/HiddenText/HiddenText";
import { productCardsSort } from "../../utils/product-cards-sort";

export const SushiSetsPage = () => {

    const [sushiSetsArray, setSushiSetsArray] = useState(NEW_SUSHI_SETS)

    return (
        <Box width={100} padding="32px 110px 60px 110px" backColor={COLOR.gray95}>
            <FlexBox justifyContent="space-between" margin="0 0 30px">
                <FlexBox>
                    <Image
                        width="40"
                        height="43"
                        src={require(`../../assets/img/mainNavigationIcons/sets.svg`).default}
                        margin="0 21px 0 0 "
                    />
                    <Paragraph
                        fontWeight="400"
                        fontSize="36"
                        lineHeight="48"
                    >
                        Сеты
                    </Paragraph>
                </FlexBox>
                <SortSelect
                    setArray={setSushiSetsArray}
                    productCardsSort={productCardsSort}
                    dataSelect={SortItemsConstants}
                />
            </FlexBox>
            <FlexBox
                flexWrap="wrap"
                columnGap="41"
                rowGap="20"
                justifyContent="flex-start"
                margin="0 0 174px"
            >
                {sushiSetsArray.map(({ id, img, title, pieces, price, weight, linkTo})=> {
                    return (
                        <ProductCard
                            title={title}
                            src={img}
                            pieces={pieces}
                            price={price}
                            weight={weight}
                            linkTo={linkTo}
                        />
                    )
                })}
            </FlexBox>
            <HiddenText/>
        </Box>
    )
}