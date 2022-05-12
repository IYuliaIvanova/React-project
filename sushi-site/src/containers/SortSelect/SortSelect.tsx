import React, { useState } from "react";
import { Box } from "../../components/common-components/Box/Box";
import { Span } from "../../components/common-components/Span/Span";
import { COLOR } from "../../constants/color-constants";
import { Paragraph } from "../../components/common-components/Paragraph/Paragraph";
import { ISortItemsConstantsProps } from "../../constants/sort-items-constants";
import {INewSushiSets, NEW_SUSHI_SETS } from "../../constants/new-sushi-sets";

interface ISortSelectProps {
    dataSelect: ISortItemsConstantsProps[];
    productCardsSort: (value: string, setArray: (value: any) => void, array: INewSushiSets[]) => void; // как протипизировать
    setArray: (value: any) => void; // как протипизировать
}

export const SortSelect = ({ dataSelect, productCardsSort, setArray }: ISortSelectProps) => {

    const [selectActive, setSelectActive] = useState(false)
    const [selected, setSelected] = useState("По умолчанию")

    return (
        <Box
            maxWidth="198"
            width={100}
            boxShadow="0px 0px 18px 6px rgba(0, 0, 0, 0.09)"
            borderRadius="15px 15px 0px 0px"
            backColor={COLOR.white}
            position="relative"
        >
            <Box
                padding="4px 19px 10px 14px"
                onClick={() => setSelectActive(!selectActive)}
                cursor="pointer"
            >
                <Span
                    fontWeight="300"
                    fontSize="14"
                    lineHeight="17"
                    color={COLOR.silverGray}
                >
                    Сортировка
                </Span>
                <Paragraph fontWeight="400">{selected}</Paragraph>
            </Box>
            {selectActive &&
                <Box
                    boxShadow="0px 0px 18px 6px rgba(0, 0, 0, 0.09)"
                    position="absolute"
                    backColor={COLOR.white}
                    width={100}
                    padding="10px 11px 0 14px"
                    borderTop={`1px solid ${COLOR.silverGray}`}
                >
                    {dataSelect.map(({ id, sortValue }) => {
                        return (
                            <Paragraph
                                onClick={()=>{
                                productCardsSort(sortValue, setArray, NEW_SUSHI_SETS)
                                setSelectActive(false)
                                setSelected(sortValue)
                            }}
                                margin="0 0 20px"
                                fontWeight="400"
                                key={id}
                                cursor="pointer"
                                color={sortValue===selected ? COLOR.pastelOrange : COLOR.smokyBlack}
                            >
                                {sortValue}
                            </Paragraph>
                        )
                    })}
                </Box>
            }
        </Box>
    )
}