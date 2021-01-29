import withCustomError from '../helpers/withCustomError';

const min = (minValue) => (value) => {
    if (value || value === 0) {
        return value < minValue ? `The value is less than ${minValue}` : undefined;
    }
    return undefined;
};

export default (minValue, err) => withCustomError(min(minValue))(err);
