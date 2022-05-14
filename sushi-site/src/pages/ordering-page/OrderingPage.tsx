import { Box } from "../../components/common-components/Box/Box"
import { CustomLink } from "../../components/common-components/CustomLink/CustomLink"
import { FlexBox } from "../../components/common-components/FlexBox/FlexBox"
import { Paragraph } from "../../components/common-components/Paragraph/Paragraph"
import { COLOR } from "../../constants/color-constants"
import { ONE_PHONE, TWO_PHONE } from "../../constants/href-constants"
import { FormOrder } from "../../containers/FormOrder/FormOrder"
import { Image } from "../../components/common-components/Image/Image";
import { RightSidebar } from "../../containers/RightSidebar/RightSidebar"
import { CustomNavLink } from "../../components/common-components/CustomNavLink/CustomNavLink"
import { Modal } from "../../containers/Modal/Modal"
import { useState } from "react"
import { FormModalPay } from "../../containers/FormModalPay/FormModalPay"

export const OrderingPage = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log('open!');
        setIsOpen(true);
    }

    const handleSubmit = () => {
        console.log('Submit function!');
        setIsOpen(false);
    }

    const handleCancel = () => {
        console.log('Cancel function!');
        setIsOpen(false);
    }
    return (
        <FlexBox alignItems="start" justifyContent="start" height="100vh">
            <Box width="1500" backColor={COLOR.gray95} height="100%">
                <FlexBox padding="6px 15px 8px 100px" borderBottom={`1px solid ${COLOR.silverGray}`} justifyContent='start' columnGap="363">
                    <CustomNavLink 
                        to={`/`}
                    >
                        <Image margin="0 10px 0 0" src={require("../../assets/icons/left-arrow.svg").default}/>
                        <Paragraph>Продолжить выбор</Paragraph>
                    </CustomNavLink>
                    <FlexBox flexDirection="column">
                        <Paragraph>Наш телефон</Paragraph>
                        <CustomLink
                            lineHeight="18"
                            fontWeight="500"
                            color={COLOR.pastelOrange}
                            href={`tel:${ONE_PHONE}`}
                        >
                            {ONE_PHONE}
                        </CustomLink>
                        <CustomLink
                            lineHeight="18"
                            fontWeight="500"
                            color={COLOR.pastelOrange}
                            margin="0 0 5px 0"
                            href={`tel:${TWO_PHONE}`}
                        >
                            {TWO_PHONE}
                        </CustomLink>
                        <Paragraph lineHeight="17" fontSize="14" color={COLOR.silverGray}>
                            <Image
                                src={require("../../assets/icons/clock.svg").default}
                                width="15"
                                height="15"
                                margin="0 5px 0 0"
                            />
                            работаем с 10:00 до 00:00
                        </Paragraph>
                    </FlexBox>
                </FlexBox>
                <FlexBox padding="55px 392px 20px 100px" >
                    <Modal
                        title="Данные карты"
                        isOpen={isOpen}
                        onCancel={handleCancel}
                        onSubmit={handleSubmit}
                    >
                        <FormModalPay/>
                    </Modal>
                    <FormOrder openModal={openModal}/>
                </FlexBox>
            </Box>
            <RightSidebar/>
        </FlexBox>
    )
}