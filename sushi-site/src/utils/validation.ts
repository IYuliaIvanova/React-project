import React from "react";

export interface IValidator {
    validFunc(inputValue: string, validCount: number): boolean,
    error: string
}

const isEmpty = (inputValue: string): boolean => {
    return !inputValue.length;
};

const validLengthCount = (inputValue: string, validCount: number): boolean => {
    return inputValue.length > 0 && inputValue.length < validCount;
};

const validators: IValidator[] = [
    { validFunc: validLengthCount, error: 'Ошибка, должно быть введено не менее 3 символов'},
    { validFunc: isEmpty, error: 'Ошибка, необходимо ввести данные' },
]

export const inputValidationError = (inputValue: string, setErrors:(error: (string | boolean)[]) => void) => {
    const errors = validators.map((item) => item.validFunc(inputValue, 3) && item.error).filter((item) => item);
    setErrors(errors)
};

export const phoneMask = (inputValue: string, setPhone: (arg: string) => void) => {
    const result = inputValue.replaceAll(/\D/g, '').match(/(\d{0,3})(\d{0,2})(\d{0,3})(\d{0,2})(\d{0,2})/);
    if (result) {
        const [ numbOne, numbTwo, numbThree, numbFour, numbFive, numbSix ] = result;
        inputValue = `+${numbTwo} (${numbThree})-${numbFour}-${numbFive}-${numbSix}`;
    }
    setPhone(inputValue);
}

export const validEmailError = (inputValue: string, setError:(error: (string | boolean)) => void) => {
    const reg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    if(!reg.test(inputValue.toLowerCase()) && inputValue !==''){
        setError('Ошибка, введите правильно почту __@__.__')
    } else {
        setError(false);
    }
};

export const cardNumberMask = (inputValue: string, setCardNumber: (arg: string) => void) => {
    const result = inputValue.replaceAll(/\D/g, '').match(/(\d{0,4})(\d{0,4})(\d{0,4})(\d{0,4})/);
    if (result) {
        const [ numbOne, numbTwo, numbThree, numbFour, numbFive ] = result;
        inputValue = `${numbTwo} ${numbThree} ${numbFour} ${numbFive}`;
    }
    setCardNumber(inputValue);
}