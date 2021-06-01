export const getDecimal = value => {
    const [whole, decimal] = String(value).split('.');
    if (Number(decimal)){
        return Number(decimal)
    }
    return Number(0);
}

export const getWhole = value => {
    const [whole, decimal] = String(value).split('.');
    if (Number(whole)){
        return Number(whole)
    }
    return Number(0);
}