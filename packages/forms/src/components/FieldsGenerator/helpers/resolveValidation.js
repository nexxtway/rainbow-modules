import compose from '../../../helpers/composeValidators';
import isRequired from '../../../validators/isRequired';
import max from '../../../validators/max';
import min from '../../../validators/min';
import maxLength from '../../../validators/maxLength';
import minLength from '../../../validators/minLength';

const resolveValidation = (schema, extras, validations) => {
    const { required, minValue, maxValue, maxLengthValue, minLengthValue } = schema;
    const standarValidations = [];
    if (required) {
        standarValidations.push(isRequired(required.errorMessage));
    }
    if (maxValue || maxValue === 0) {
        standarValidations.push(max(maxValue, schema.max.errorMessage));
    }
    if (minValue || minValue === 0) {
        standarValidations.push(min(minValue, schema.min.errorMessage));
    }
    if (maxLengthValue || maxLengthValue === 0) {
        standarValidations.push(maxLength(maxLengthValue, schema.maxLength.errorMessage));
    }
    if (minLengthValue || minLengthValue === 0) {
        standarValidations.push(minLength(minLengthValue, schema.minLength.errorMessage));
    }
    const customValidations = Object.keys(extras)
        .filter(
            (extraProp) => validations[extraProp] && typeof validations[extraProp] === 'function',
        )
        .map((validate) => (...params) => validations[validate](...params, extras[validate]));

    return compose(...standarValidations, ...customValidations);
};

export default resolveValidation;
