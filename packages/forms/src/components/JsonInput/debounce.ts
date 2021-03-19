const debounce = (func: () => void, timeout = 500): (() => void) => {
    let timer: NodeJS.Timeout;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(this, args);
        }, timeout);
    };
};

export default debounce;
