import DaysEnum from "../enums/DaysEnum";

export default {
    getDayOfWeek(date) {
        const dayOfWeek = date ? new Date(date).getDay() : new Date().getDay();

        if (isNaN(dayOfWeek)) {
            return DaysEnum.monday;
        }

        const dayOfWeekRu = (dayOfWeek - 1) > 0 ? dayOfWeek - 1 : 6 // У миликанесов неделя начинается с воскресенья

        return Object.values(DaysEnum)[dayOfWeekRu] || DaysEnum.monday;
    }
};


