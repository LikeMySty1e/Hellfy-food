import React from 'react';

// let firstTime = true;

export const useValidation = (toValidate, initState = true, validationMethod, needToObserve = true) => {
    const [isValid, setIsValid] = React.useState(initState);

    // React.useEffect(() => {
    //     if (firstTime) {
    //         firstTime = false;
    //     } else {
    //         if (needToObserve && !!validationMethod) {
    //             validationMethod(toValidate);
    //         }
    //     }
    // }, [toValidate]);

    const validate = value => {
        if (!validationMethod) {
            throw new Error('Необходим метод валидации');
        }

        setIsValid(validationMethod(value || toValidate));
    };

    // const hardSet = (fields = {}) => {
    //     const fieldsKeys = Object.keys(fields);
    //     const validatedFields = {};
    //
    //     fieldsKeys.map(field => {
    //         if (Object.hasOwn(validation, field)) {
    //             validatedFields[field] = fields[field];
    //         }
    //     });
    //
    //     setValidation({ ...validation, ...validatedFields });
    //
    //     return isValid({ ...validation, ...validatedFields });
    // };

    return [isValid, validate];
};