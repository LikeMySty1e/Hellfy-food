const localStorageKeys = {
    tokenKey: `authorisationLocalToken`,
    registrationProgressKey: `registrationProgressLocal`
}

const localStorageHelper = {
    setLocalToken: token => {
        localStorage.setItem(localStorageKeys.tokenKey, token);
    },

    getLocalToken: () => {
        return localStorage.getItem(localStorageKeys.tokenKey);
    },

    deleteLocalToken: () => {
        localStorage.removeItem(localStorageKeys.tokenKey)
    },

    setLocalRegistrationProgress: progress => {
        localStorage.setItem(localStorageKeys.registrationProgressKey, progress);
    },

    getLocalRegistrationProgress: () => {
        return localStorage.getItem(localStorageKeys.registrationProgressKey);
    },

    deleteLocalRegistrationProgress: () => {
        localStorage.removeItem(localStorageKeys.registrationProgressKey)
    },
}

export default localStorageHelper;
