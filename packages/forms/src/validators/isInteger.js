import withCustomError from '../helpers/withCustomError';
import isEmptyValue from '../helpers/isEmptyValue';

const isIntegerValue = (value) => Number(value) % 1 === 0;

const isInteger = (value) => {
    if (isEmptyValue(value) || isIntegerValue(value)) {
        return undefined;
    }
    return 'The value must be an integer.';
};

export default withCustomError(isInteger);
