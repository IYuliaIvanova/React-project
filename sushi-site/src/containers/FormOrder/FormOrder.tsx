import React from "react";
import { Box } from "../../components/common-components/Box/Box";
import { Button } from "../../components/common-components/Button/Button";
import { FlexBox } from "../../components/common-components/FlexBox/FlexBox";
import { Form } from "../../components/common-components/Form/Form";
import { Image } from "../../components/common-components/Image/Image";
import { Input } from "../../components/common-components/Input/Input";
import { Label } from "../../components/common-components/Label/Label";
import { Paragraph } from "../../components/common-components/Paragraph/Paragraph";
import { SecondLevelHeading } from "../../components/common-components/SecondLevelHeading/SecondLevelHeading";
import { COLOR } from "../../constants/color-constants";

export const FormOrder = () => {
    return (
        <Form width='760'>
            <SecondLevelHeading margin="0 0 30px 0">Ваши данные</SecondLevelHeading>
            <FlexBox margin="0 0 40px 0">
                <FlexBox flexDirection="column" rowGap="20">
                    <FlexBox columnGap="20">
                        <Input width="170" placeholder="Телефон"></Input>
                        <Input width="170" placeholder="Имя"></Input>
                    </FlexBox>
                    <Box>
                        <Button 
                            width='180' 
                            bgColor={COLOR.pastelOrange} 
                            padding='5px 15px'
                            fontSize="18"
                            lineHeight="22"
                        >
                            <Image src={require('../../assets/icons/cash.svg').default} margin='0 10px 0 0'/>
                            Наличными
                        </Button>
                        <Button 
                            width='180' 
                            bgColor={COLOR.white} 
                            color={COLOR.black}
                            padding='5px 25px'
                            fontSize="18"
                            lineHeight="22"
                        >
                            <Image src={require('../../assets/icons/card.svg').default} margin='0 10px 0 0'/>
                            Картой
                        </Button>
                    </Box>
                    <Box>
                        <Input 
                            type='checkbox'
                            opacity="0" 
                            position="absolute"
                            id="frmCheckbox"
                        />
                        <Label htmlFor="frmCheckbox" margin="0 10px 0 0"> Подготовить сдачу с</Label>
                        <Input width="170" placeholder="Сумма"></Input>
                    </Box>
                    
                </FlexBox>
                <FlexBox>

                </FlexBox>
            </FlexBox>
            <Button width={100} margin='0 0 12px 0'>Оформить заказ</Button>
            <Paragraph>Нажимая на кнопку Оформить заказ, Вы подтверждаете свое согласие на обработку персональных данных в соответствии с Публичной оффертой</Paragraph>
        </Form>
    )
}