import withCustomError from '../helpers/withCustomError';

const max = (maxValue) => (value) => {
    if (value || value === 0) {
        return value > maxValue ? `The value is greater than ${maxValue}` : undefined;
    }
    return undefined;
};

export default (maxValue, err) => withCustomError(max(maxValue))(err);
