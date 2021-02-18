import { isNull, isNumber } from '@rainbow-modules/validation';

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

const initDate = (value) => {
    if (!isNull(value)) {
        const date = new Date(value);
        return isNumber(date.getTime()) && date;
    }
    return undefined;
};

export const dateTime = (value) => {
    const date = initDate(value);
    if (date) {
        return new Intl.DateTimeFormat(undefined, {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
        }).format(date);
    }
    return '';
};

export const date = (value) => {
    const date = initDate(value);
    if (date) {
        return new Intl.DateTimeFormat().format(date);
    }
    return '';
};

const formatTime = (date) => {
    return new Intl.DateTimeFormat(undefined, {
        hour: 'numeric',
        minute: 'numeric',
    }).format(date);
};

export const time = (value) => {
    let dateValue = value;
    if (typeof value === 'string') {
        const [hours, minutes] = value.split(':');
        const date = new Date();
        date.setHours(hours);
        date.setMinutes(minutes);
        dateValue = date;
    }
    const date = initDate(dateValue);
    if (date) {
        return formatTime(date);
    }
    return '';
};

export const text = (value) => {
    return value;
};
