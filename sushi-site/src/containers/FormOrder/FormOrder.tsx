import React, { useState } from "react";
import { Box } from "../../components/common-components/Box/Box";
import { Button } from "../../components/common-components/Button/Button";
import { CustomNavLink } from "../../components/common-components/CustomNavLink/CustomNavLink";
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
import { OrderingGroupButton } from "../../components/form-ordering-components/OrderingGroupButton";
import { MinusButton } from "../../components/product-description-components/MinusButton";
import { PlusButton } from "../../components/product-description-components/PlusButton";
import { COLOR } from "../../constants/color-constants";
import { getDecrement, getIncrement } from "../../utils/counters";

interface IFormOrderProps {
    openModal: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const FormOrder = ({ openModal }: IFormOrderProps) => {
    const [countStick, setCountStick] = useState(0);
    const [countSouse, setCountSouse] = useState(0);

    const [isActivePaymentMethod, setIsActivePaymentMethod] = useState(false);
    const [isActiveDeliveryMethod, setIsActiveDeliveryMethod] = useState(false);
    const [isActiveTimeMethod, setIsActiveTimeMethod] = useState(false);

    const handleIsActivePaymentMethod = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsActivePaymentMethod(!isActivePaymentMethod);
    }

    const handleIsActiveDeliveryMethod = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsActiveDeliveryMethod(!isActiveDeliveryMethod);
    }

    const handleIsActiveTimeMethod = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsActiveTimeMethod(!isActiveTimeMethod);
    }
    return (
        <Form width='760'>
            <SecondLevelHeading margin="0 0 30px 0">Ваши данные</SecondLevelHeading>
            <FlexBox margin="0 0 40px 0" columnGap="40">
                <FlexBox flexDirection="column" rowGap="20">
                    <FlexBox columnGap="20" width={100}>
                        <Input width={50} placeholder="Телефон"></Input>
                        <Input width={50} placeholder="Имя"></Input>
                    </FlexBox>
                    <OrderingGroupButton width={100} onClick={handleIsActivePaymentMethod}>
                        <OrderingButton 
                            width={50} 
                            padding='5px 15px'
                            fontSize="18"
                            lineHeight="22"
                            isActive = {!isActivePaymentMethod}
                        >
                            <Image src={require('../../assets/icons/cash.svg').default} margin='0 10px 0 0'/>
                            Наличными
                        </OrderingButton>
                        <OrderingButton 
                            width={50} 
                            padding='5px 25px'
                            fontSize="18"
                            lineHeight="22"
                            isActive = {isActivePaymentMethod}
                            onClick={openModal}
                        >
                            <Image src={require('../../assets/icons/card.svg').default} margin='0 10px 0 0'/>
                            Картой
                        </OrderingButton>
                    </OrderingGroupButton>
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
                    <OrderingGroupButton width={100} onClick={handleIsActiveDeliveryMethod}>
                        <OrderingButton 
                            width={50} 
                            bgColor={COLOR.pastelOrange} 
                            padding='5px 15px'
                            fontSize="18"
                            lineHeight="22"
                            isActive = {!isActiveDeliveryMethod}
                        >
                            Курьером
                        </OrderingButton>
                        <OrderingButton 
                            width={50} 
                            padding='5px 25px'
                            fontSize="18"
                            lineHeight="22"
                            isActive = {isActiveDeliveryMethod}
                        >
                            Самовызов
                        </OrderingButton>
                    </OrderingGroupButton>
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
                    <OrderingGroupButton width={100} onClick={handleIsActiveTimeMethod}>
                        <OrderingButton 
                            width={50} 
                            padding='5px 15px'
                            fontSize="18"
                            lineHeight="22"
                            isActive={!isActiveTimeMethod}
                        >
                            Не сейчас
                        </OrderingButton>
                        <OrderingButton 
                            width={50} 
                            padding='5px 25px'
                            fontSize="18"
                            lineHeight="22"
                            isActive={isActiveTimeMethod}
                        >
                            На время
                        </OrderingButton>
                    </OrderingGroupButton>
                    <Input width={100} placeholder="E-mail(необязательно)"></Input>
                </FlexBox>
            </FlexBox>
            <Button width={100} margin='0 0 12px 0'>Оформить заказ</Button>
            <Paragraph 
                textAlign="center" 
                fontWeight="400" 
                fontSize="14" 
                lineHeight="17"
                color={COLOR.black}
            >
                Нажимая на кнопку Оформить заказ, Вы подтверждаете свое согласие на обработку персональных данных в соответствии с   
                <CustomNavLink 
                    display="inline" 
                    to={'/'} 
                    color={COLOR.black} 
                    txtDecoration='underline'
                > 
                    Публичной оффертой
                </CustomNavLink>
            </Paragraph>
        </Form>
    )
}