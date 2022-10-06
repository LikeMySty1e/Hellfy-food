const validationHelper = {
    validateState(state) {
        let check = true;

        console.log(state);

        Object.values(state).map(value => {
            if (typeof value !== 'boolean' && !value) {
                check = false;
            }
        })

        return check;
    }
}

export default validationHelper;
