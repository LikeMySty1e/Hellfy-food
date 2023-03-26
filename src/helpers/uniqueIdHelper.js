let inc = 0;

export function getUniqueId() {
    inc = inc + 1;

    return `${Math.random().toString(16).slice(2)}_${inc}`;
}

export default { getUniqueId };
