export const getIncrement = (countValue: number, setCountValue: (value: any) => void) => {
    setCountValue(countValue + 1);
}

export const getDecrement = (countValue: number, setCountValue: (value: any) => void) => {
    setCountValue(countValue - 1);
}