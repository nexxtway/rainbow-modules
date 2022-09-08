import { isNumber as isNumberValidator } from '@rainbow-modules/validation';
import isEmptyValue from '../helpers/isEmptyValue';
import withCustomError from '../helpers/withCustomError';

const isNumber = (value) => {
    if (isEmptyValue(value) || isNumberValidator(Number(value))) {
        return undefined;
    }

    return 'The value must be a number.';
};

export default withCustomError(isNumber);
