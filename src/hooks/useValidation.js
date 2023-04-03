import React from 'react';

export const useValidation = (toValidate, initState = true, validationMethod) => {
    const [isValid, setIsValid] = React.useState(initState);

    const validate = value => {
        if (!validationMethod) {
            throw new Error('Необходим метод валидации');
        }

        setIsValid(validationMethod(value));
    };

    return [isValid, validate];
};