import React from "react";
import { Box } from "../../components/common-components/Box/Box";
import { FlexBox } from "../../components/common-components/FlexBox/FlexBox";
import { Input } from "../../components/common-components/Input/Input";
import { Label } from "../../components/common-components/Label/Label";
import { ListItem } from "../../components/common-components/ListItem/ListItem";
import { Paragraph } from "../../components/common-components/Paragraph/Paragraph";
import { UnorderedList } from "../../components/common-components/UnorderedList/UnorderedList";
import { COLOR } from "../../constants/color-constants";

export const HiddenText = () => {
    return (
        <Box backColor={COLOR.gray95} width={100} padding="60px 16px">
            <FlexBox 
                margin="0 auto" 
                maxWidth="950"
                flexDirection="column"
                alignItems="start"
            >
                <Paragraph 
                    color={COLOR.silverGray}
                    fontWeight='700'
                    fontSize="24"
                    lineHeight="30"
                    margin="0 0 10px 0"
                >
                    Заказать суши в Бишкеке
                </Paragraph>
                <Input 
                    hiddenTxt
                    type="checkbox"
                    opacity="0" 
                    position="absolute"
                    id="readMoreChecker"
                >
                </Input>
                <Box 
                    className="limiter"     
                    maxHeight="228"     
                    position="relative" 
                    overflow="hidden"
                    margin="0 0 42px 0"
                >
                    <Paragraph margin="0 0 10px 0" color={COLOR.silverGray}>Ресторан “Суши и Лапша” предлагаем своим клиентам самые вкусные суши с доставкой на дом, приготовленные по классическим и адаптированным к европейской аудитории рецептам, а также собственным наработкам наших поваров. Мы ценим время наших клиентов, поэтому вы можете заказать суши в Харькове с доставкой на дом или в офис.</Paragraph>
                    <UnorderedList color={COLOR.silverGray}>В нашем меню более 20 видов суши:
                        <ListItem color={COLOR.silverGray}>Классические с сырым лососем, тунцом, окунем.</ListItem>
                        <ListItem color={COLOR.silverGray}>Экзотические с тигровой креветкой, морским гребешком.</ListItem>
                        <ListItem color={COLOR.silverGray}>Пикантные с копченым лососем, угрем.</ListItem>
                    </UnorderedList>
                    <Paragraph margin="0 0 10px 0" color={COLOR.silverGray}>В меню также представлены гунканы: с начинкой из красной икры и тобико, а также феликсы, где японский майонез сочетается с рыбой, морепродуктами, угрем. Любители острых блюд могут купить суши с соусом спайси. Популярные начинки — копченая курица, снежный краб, креветки, гребешки, тунец, лосось и окунь.</Paragraph>
                    <Box 
                        className="bottom"
                        width={100}    
                        height="109" 
                        background={COLOR.linerGrayGradient} 
                        position="absolute" 
                        bottom="0" 
                        opacity="1"
                    ></Box>
                </Box>
                <Label 
                    hiddenTxt 
                    htmlFor="readMoreChecker" 
                    className="read-more-btn" 
                    fontSize="24" 
                    color={COLOR.pinkishOrange}
                >
                    Подробнее
                </Label>
            </FlexBox>
        </Box>
    )
}