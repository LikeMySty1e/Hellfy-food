export const isNull = value => {
    return (value == null);
}

export const isEmail = email => {
    const regex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]*$/;

    return regex.test(email);
}

export const isValid = value => {
    let isValid = !!value;

    if (typeof value === `string`) {
        isValid = !!value.trim();
    }

    if (!isNull(value) && typeof value === `object`) {
        isValid = !!Object.values(value).every(Boolean);
    }

    return isValid;
};