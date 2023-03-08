const min = 60;
const hour = 60 * min;

export const formatTime = sec => {
    if (!sec) {
        return null;
    }

    const clearHours = Math.floor(sec / hour);
    const clearMinutes = Math.floor((sec % hour) / min);

    if (!clearHours && !clearMinutes) {
        return null;
    }

    return `${clearHours ? `${clearHours} ч.` : ``} ${clearMinutes ? `${clearMinutes} мин.` : ``}`;
}

export default { formatTime };
