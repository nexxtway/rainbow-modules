export const currency = (value, currency) => {
    return new Intl.NumberFormat(undefined, { style: 'currency', currency }).format(value);
};

export const number = (value) => {
    return new Intl.NumberFormat(undefined, { style: 'decimal' }).format(value);
};

export const percent = (value) => {
    return new Intl.NumberFormat(undefined, {
        style: 'percent',
    }).format(value);
};

export const dateTime = (value) => {
    return new Intl.DateTimeFormat(undefined, {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
    }).format(value);
};

export const date = (value) => {
    return new Intl.DateTimeFormat().format(value);
};

export const time = (value) => {
    return new Intl.DateTimeFormat(undefined, {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
    }).format(value);
};

export const text = (value) => {
    return value;
};
