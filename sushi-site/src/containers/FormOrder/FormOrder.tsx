import React, { useState } from "react";
import { Box } from "../../components/common-components/Box/Box";
import { Button } from "../../components/common-components/Button/Button";
import { FlexBox } from "../../components/common-components/FlexBox/FlexBox";
import { Form } from "../../components/common-components/Form/Form";
import { Image } from "../../components/common-components/Image/Image";
import { Input } from "../../components/common-components/Input/Input";
import { Label } from "../../components/common-components/Label/Label";
import { Paragraph } from "../../components/common-components/Paragraph/Paragraph";
import { SecondLevelHeading } from "../../components/common-components/SecondLevelHeading/SecondLevelHeading";
import { Span } from "../../components/common-components/Span/Span";
import { OrderingButton } from "../../components/form-ordering-components/OrderingButton";
import { OrderingCheckbox } from "../../components/form-ordering-components/OrderingCheckbox";
import { MinusButton } from "../../components/product-description-components/MinusButton";
import { PlusButton } from "../../components/product-description-components/PlusButton";
import { COLOR } from "../../constants/color-constants";
import { getDecrement, getIncrement } from "../../utils/counters";

export const FormOrder = () => {
    const [countStick, setCountStick] = useState(0);
    const [countSouse, setCountSouse] = useState(0);
    return (
        <Form width='760'>
            <SecondLevelHeading margin="0 0 30px 0">Ваши данные</SecondLevelHeading>
            <FlexBox margin="0 0 40px 0" columnGap="40">
                <FlexBox flexDirection="column" rowGap="20">
                    <FlexBox columnGap="20" width={100}>
                        <Input width={50} placeholder="Телефон"></Input>
                        <Input width={50} placeholder="Имя"></Input>
                    </FlexBox>
                    <Box width={100}>
                        <OrderingButton 
                            width={50} 
                            padding='5px 15px'
                            fontSize="18"
                            lineHeight="22"
                            isActive
                        >
                            <Image src={require('../../assets/icons/cash.svg').default} margin='0 10px 0 0'/>
                            Наличными
                        </OrderingButton>
                        <OrderingButton 
                            width={50} 
                            padding='5px 25px'
                            fontSize="18"
                            lineHeight="22"
                        >
                            <Image src={require('../../assets/icons/card.svg').default} margin='0 10px 0 0'/>
                            Картой
                        </OrderingButton>
                    </Box>
                    <FlexBox width={100} justifyContent="space-between">
                        <OrderingCheckbox 
                            type='checkbox'
                            opacity="0" 
                            position="absolute"
                            id="frmCheckbox"
                        />
                        <Label htmlFor="frmCheckbox" margin="0 10px 0 0"><Span></Span> Подготовить сдачу с</Label>
                        <Input width="152" placeholder="Сумма"></Input>
                    </FlexBox>
                    <Input width={100} placeholder="Комменатрий к заказу"></Input>
                    <FlexBox justifyContent="space-between" width={100}>
                        <Paragraph margin="0 57px 0 0">Палочки</Paragraph>
                        <FlexBox>
                            <MinusButton 
                                width='10' 
                                height='20' 
                                cursor="pointer" 
                                src={require(`../../assets/icons/buttons/minusButton.svg`).default}
                                margin="0 9px 0 0"
                                onClick={() => getDecrement(countStick, setCountStick)}
                            />
                            <Span margin="0 9px 0 0">{countStick}</Span>
                            <PlusButton 
                                width='20' 
                                height='20' 
                                cursor="pointer"    
                                src={require(`../../assets/icons/buttons/plusButton_40x40.svg`).default}
                                onClick={() => getIncrement(countStick, setCountStick)}
                            />
                        </FlexBox>
                    </FlexBox>
                    <FlexBox justifyContent="space-between" width={100}>
                        <Paragraph margin="0 57px 0 0">Соевый соус</Paragraph>
                        <FlexBox>
                            <MinusButton 
                                width='10' 
                                height='20' 
                                cursor="pointer" 
                                src={require(`../../assets/icons/buttons/minusButton.svg`).default}
                                margin="0 9px 0 0"
                                onClick={() => getDecrement(countSouse, setCountSouse)}
                            />
                            <Span margin="0 9px 0 0">{countSouse}</Span>
                            <PlusButton 
                                width='20' 
                                height='20' 
                                cursor="pointer"    
                                src={require(`../../assets/icons/buttons/plusButton_40x40.svg`).default}
                                onClick={() => getIncrement(countSouse, setCountSouse)}
                            />
                        </FlexBox>
                    </FlexBox>
                    <Input width={100} placeholder="Введите промокод"></Input>
                </FlexBox>
                <FlexBox flexDirection="column" rowGap="20" alignSelf="start">
                    <Box width={100}>
                        <Button 
                            width={50} 
                            bgColor={COLOR.pastelOrange} 
                            padding='5px 15px'
                            fontSize="18"
                            lineHeight="22"
                        >
                            Курьером
                        </Button>
                        <Button 
                            width={50} 
                            bgColor={COLOR.white} 
                            color={COLOR.black}
                            padding='5px 25px'
                            fontSize="18"
                            lineHeight="22"
                        >
                            Самовызов
                        </Button>
                    </Box>
                    <FlexBox columnGap="20" width={100}>
                        <Input width="260" placeholder="Улица"></Input>
                        <Input width="80" placeholder="Дом"></Input>
                    </FlexBox>
                    <FlexBox columnGap="13" width={100}>
                        <Input width="80" placeholder="Кв"></Input>
                        <Input width="80" placeholder="Подъезд" fontSize="14"></Input>
                        <Input width="80" placeholder="Этаж"></Input>
                        <Input width="80" placeholder="Код"></Input>
                    </FlexBox>
                    <Box width={100}>
                        <Button 
                            width={50} 
                            bgColor={COLOR.pastelOrange} 
                            padding='5px 15px'
                            fontSize="18"
                            lineHeight="22"
                        >
                            Не сейчас
                        </Button>
                        <Button 
                            width={50} 
                            bgColor={COLOR.white} 
                            color={COLOR.black}
                            padding='5px 25px'
                            fontSize="18"
                            lineHeight="22"
                        >
                            На время
                        </Button>
                    </Box>
                    <Input width={100} placeholder="E-mail(необязательно)"></Input>
                </FlexBox>
            </FlexBox>
            <Button width={100} margin='0 0 12px 0'>Оформить заказ</Button>
            <Paragraph 
                textAlign="center" 
                fontWeight="400" 
                fontSize="14" 
                lineHeight="17"
            >
                Нажимая на кнопку Оформить заказ, Вы подтверждаете свое согласие на обработку персональных данных в соответствии с Публичной оффертой
            </Paragraph>
        </Form>
    )
}