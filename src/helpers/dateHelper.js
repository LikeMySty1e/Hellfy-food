import DaysEnum from "../enums/DaysEnum";

export default {
    getDayOfWeek(date) {
        const dayOfWeek = date ? new Date(date).getDay() : new Date().getDay();

        if (isNaN(dayOfWeek)) {
            return DaysEnum.monday;
        }

        return Object.values(DaysEnum)[dayOfWeek] || DaysEnum.monday;
    }
};


