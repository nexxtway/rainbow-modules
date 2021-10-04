const composeValidators = (...validators) => (...rest) =>
    validators.reduce((error, validator) => error || validator(...rest), undefined);

export default composeValidators;
