const composeValidators = (...validators) => (value, allValues, meta) =>
    validators.reduce((error, validator) => error || validator(value, allValues, meta), undefined);

export default composeValidators;
