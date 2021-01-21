const withCustomError = (validator) => (errorMessage) => (...args) => {
    const result = validator(...args);
    if (result !== undefined) {
        if (typeof errorMessage === 'function') {
            return errorMessage(...args);
        }
        if (typeof errorMessage === 'string') {
            return errorMessage;
        }
        return result;
    }
    return undefined;
};

export default withCustomError;
