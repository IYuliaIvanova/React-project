import React, { useMemo, useState } from "react";
import { sendOrdering } from "../../api/fetchRequest/fetchOrder";
import { Box } from "../../components/common-components/Box/Box";
import { Button } from "../../components/common-components/Button/Button";
import { CustomNavLink } from "../../components/common-components/CustomNavLink/CustomNavLink";
import { FlexBox } from "../../components/common-components/FlexBox/FlexBox";
import { Form } from "../../components/common-components/Form/Form";
import { Image } from "../../components/common-components/Image/Image";
import { Input } from "../../components/common-components/Input/Input";
import { Label } from "../../components/common-components/Label/Label";
import { Loader } from "../../components/common-components/Loader/Loader";
import { Paragraph } from "../../components/common-components/Paragraph/Paragraph";
import { SecondLevelHeading } from "../../components/common-components/SecondLevelHeading/SecondLevelHeading";
import { Span } from "../../components/common-components/Span/Span";
import { ErrorText } from "../../components/form-ordering-components/ErrorText";
import { OrderingButton } from "../../components/form-ordering-components/OrderingButton";
import { OrderingCheckbox } from "../../components/form-ordering-components/OrderingCheckbox";
import { OrderingGroupButton } from "../../components/form-ordering-components/OrderingGroupButton";
import { MinusButton } from "../../components/product-description-components/MinusButton";
import { PlusButton } from "../../components/product-description-components/PlusButton";
import { COLOR } from "../../constants/color-constants";
import { getDecrement, getIncrement } from "../../utils/counters";
import { cardNumberMask, inputValidationError, phoneMask, validEmailError } from "../../utils/validation";

export const FormOrder = () => {
    const [countStick, setCountStick] = useState(0);
    const [countSouse, setCountSouse] = useState(0);
    const [sum, setSum] = useState(0);

    const [isActivePaymentMethod, setIsActivePaymentMethod] = useState(false);
    const [isActiveDeliveryMethod, setIsActiveDeliveryMethod] = useState(false);
    const [isActiveTimeMethod, setIsActiveTimeMethod] = useState(false);

    const [phone, setPhone] = useState('+375 (**) ***-**-**');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [cardNumber, setCardNumber] = useState('**** **** **** ****');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const [nameOwner, setNameOwner] = useState('');
    const [cvv, setCvv] = useState('');
    const [comment, setComment] = useState('');
    const [promo, setPromo] = useState('');
    const [street, setStreet] = useState('');
    const [house, setHouse] = useState(0);
    const [apartment, setApartment] = useState(0);
    const [floor, setFloor] = useState(0);
    const [code, setCode] = useState(0);

    const [emailError, setEmailError] = useState<(string | boolean)>(false)
    const [error, setError] = useState<(string | boolean)[]>([]);

    const [inputIsDirty, setInputIsDirty] = useState(false);
    const [isChecked, setIsChecked] = useState(false);

    const isDisabled = useMemo(() => {
        return !!error.length || !!emailError
    }, [error, emailError, phone])

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>): void => {
        setInputIsDirty(true)
    }

    const handleCheckbox = (e: React.MouseEvent<HTMLInputElement>): void => {
        setIsChecked(!isChecked)
    }

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

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
        e.preventDefault();
        switch (e.target.id) {
            case 'phone':
                const phone = phoneMask(e.target.value);
                setPhone(phone);
                break;
            case 'inputName':
                setName(e.target.value)
                inputValidationError(e.target.value, setError);
                break;
            case 'inputEmail':
                setEmail(e.target.value)
                validEmailError(e.target.value, setEmailError);
                break;
            case 'cardNumb':
                cardNumberMask(e.target.value, setCardNumber);
                break;
            case 'sum':
                setSum(Number(e.target.value));
                break;  
            case 'comments':
                setComment(e.target.value);
                break; 
            case 'promo':
                setPromo(e.target.value);
                break;     
            default:
                break;
        }
    }

    const sendOrder = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = {
            phone: phone,
            name: name,
            cash: !isActivePaymentMethod,
            card: isActivePaymentMethod,
            sum: sum,
            comments: comment,
            sticks: countStick,
            souse: countSouse,
            promo: promo,
            courier: !isActiveDeliveryMethod,
            pickup: isActiveDeliveryMethod,
            street: street,
            house: house,
            apartment: apartment,
            floor: floor,
            code: code,
            email: email,
        }
        sendOrdering(data);
    }
    return (
        <Form onSubmit={sendOrder}>
            <SecondLevelHeading margin="0 0 30px 0">Ваши данные</SecondLevelHeading>
            <FlexBox margin="0 0 40px 0" columnGap="40">
                <FlexBox flexDirection="column" rowGap="20" width='360'>
                    <FlexBox columnGap="20" width={100}>
                        <Input
                            id='phone' 
                            width='170'
                            height="40"
                            fontSize="16"
                            name="phone"
                            placeholder="Телефон" 
                            value={phone} 
                            onChange={handleInput} 
                            required
                        />
                        <Box width='170'>
                            <Input 
                                id='inputName'
                                width={100} 
                                placeholder="Имя"
                                onBlur={handleBlur} 
                                onChange={handleInput}
                            />
                            {(inputIsDirty && error) && <ErrorText>{error}</ErrorText>}
                        </Box>  
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
                        >
                            <Image src={require('../../assets/icons/card.svg').default} margin='0 10px 0 0'/>
                            Картой
                        </OrderingButton>
                    </OrderingGroupButton>
                    {isActivePaymentMethod && 
                        <FlexBox flexDirection="column" alignSelf="start">
                            <Label htmlFor="cardNumb">Номер карты</Label>
                            <Input 
                                id='cardNumb' 
                                width={100} 
                                margin="0 0 10px 0"
                                value={cardNumber}
                                onChange={handleInput}
                            />
                            <FlexBox columnGap="10" justifyContent="space-between" margin="0 0 10px 0">
                                <Input 
                                    id='month'
                                    width={30} 
                                    placeholder="Month" 
                                    type='number' 
                                    min={0} 
                                    max={12}
                                    value={month}
                                    onChange={handleInput}
                                />
                                <Input 
                                    id='year'
                                    width={30} 
                                    placeholder="Year" 
                                    type='number' 
                                    min={0} 
                                    value={year}
                                    onChange={handleInput}
                                />
                                <Input 
                                    id='cvv'
                                    width={30} 
                                    placeholder="CVV"
                                    value={cvv}
                                    onChange={handleInput}
                                />
                            </FlexBox>
                            <Input 
                                id='nameOwner'
                                width={100} 
                                placeholder="Имя владельца (как на карте)" 
                                type='text'
                                value={nameOwner}
                                onChange={handleInput}
                            />
                        </FlexBox>
                    }
                    {!isActivePaymentMethod && 
                        <FlexBox width={100} justifyContent="space-between">
                            <OrderingCheckbox 
                                type='checkbox'
                                id="frmCheckbox"
                                onClick={handleCheckbox}
                            />
                            <Label htmlFor="frmCheckbox" margin="0 10px 0 0"><Span/> Подготовить сдачу с</Label>
                            <Input 
                                id='sum'
                                width="152" 
                                placeholder="Сумма" 
                                type='number' 
                                value={sum}
                                onChange={handleInput}
                                min={0}
                            />
                        </FlexBox>
                    }
                    <Input 
                        id='comments'
                        value={comment}
                        onChange={handleInput}
                        width={100}     
                        placeholder="Комменатрий к заказу"
                    />
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
                        <Input width="260" placeholder="Улица"/>
                        <Input width="80" placeholder="Дом" type='number' min={0}/>
                    </FlexBox>
                    <FlexBox columnGap="13" width={100}>
                        <Input 
                            width="80" 
                            placeholder="Кв" 
                            type='number' 
                            min={0}
                        />
                        <Input 
                            width="90" 
                            placeholder="Подъезд" 
                            fontSize="14" 
                            type='number' 
                            min={0}
                        />
                        <Input 
                            width="80" 
                            placeholder="Этаж" 
                            type='number' 
                            min={0}
                        />
                        <Input 
                            width="80"  
                            placeholder="Код" 
                            type='number' 
                            min={0}
                        />
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
                    <Box width={100}>
                        <Input 
                            id='inputEmail'
                            width={100} 
                            placeholder="E-mail(необязательно)"
                            onBlur={handleBlur} 
                            onChange={handleInput}
                        />
                        {(inputIsDirty && emailError) && <ErrorText>{emailError}</ErrorText>}
                    </Box> 
                </FlexBox>
            </FlexBox>
            <Button 
                type='submit' 
                width={100} 
                margin='0 0 12px 0'
                disabled={isDisabled}
                bgColorHover={COLOR.pastelOrange}
                bgColorActive={COLOR.red}
            >
                Оформить заказ
            </Button>
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