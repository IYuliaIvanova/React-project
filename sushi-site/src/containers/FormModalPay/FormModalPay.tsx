import { FlexBox } from "../../components/common-components/FlexBox/FlexBox"
import { Form } from "../../components/common-components/Form/Form"
import { Input } from "../../components/common-components/Input/Input"

export const FormModalPay = () => {
    return (
        <Form>
            <Input width={100} placeholder="Номер карты" margin="0 0 10px 0"></Input>
            <FlexBox columnGap="10" justifyContent="space-between" margin="0 0 10px 0">
                <Input width={30} placeholder="Month"></Input>
                <Input width={30} placeholder="Year"></Input>
                <Input width={30} placeholder="CVV"></Input>
            </FlexBox>
            <Input width={100} placeholder="Имя владельца (как на карте)"></Input>
        </Form>
    )
}