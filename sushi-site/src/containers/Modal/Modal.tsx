import React from "react";
import { Box } from "../../components/common-components/Box/Box";
import { Button } from "../../components/common-components/Button/Button";
import { FlexBox } from "../../components/common-components/FlexBox/FlexBox";
import { SecondLevelHeading } from "../../components/common-components/SecondLevelHeading/SecondLevelHeading";
import { Portal } from "../../components/form-ordering-components/Portal";
import { ModalOverlay } from "../../components/modal-components/ModalOverlay";
import { ModalWindow } from "../../components/modal-components/ModalWindow";

interface IModalProps {
    title: string;
    isOpen: boolean;
    onCancel: (e: React.MouseEvent<HTMLDivElement | HTMLButtonElement>) => void;
    onSubmit: (e: React.MouseEvent<HTMLButtonElement>) => void;
    children: React.ReactNode;
}

export const Modal = ({ title, isOpen, onCancel, onSubmit, children }: IModalProps) => {
    return (
        <>
            {
                isOpen && (
                    <Portal>
                        <ModalOverlay className="modalOverlay">
                            <ModalWindow className="modalWindow">
                                <FlexBox width={100} className="modalHeader" justifyContent="space-between"> 
                                    <SecondLevelHeading className="modalTitle">{title}</SecondLevelHeading>
                                    <Button width='30' height='30' onClick={onCancel}>&#9746;</Button>
                                </FlexBox>
                                <Box className="modalBody" padding="20px">
                                    {children}
                                </Box>
                                <FlexBox width={100} className="modalFooter" justifyContent="flex-end" columnGap="20">
                                    <Button width='50' onClick={onSubmit}>OK</Button>
                                    <Button width='100' onClick={onCancel}>Cancel</Button>
                                </FlexBox>
                            </ModalWindow>
                        </ModalOverlay>
                    </Portal>
                )
            }
        </>
    )
}
