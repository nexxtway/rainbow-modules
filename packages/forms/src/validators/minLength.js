import withCustomError from '../helpers/withCustomError';

const minLength = (minLengthValue) => (value) => {
    if (value && value.length > 0) {
        return value.length < minLengthValue
            ? `The input has less characters than ${minLengthValue}`
            : undefined;
    }
    return undefined;
};

export default (minValue, err) => withCustomError(minLength(minValue))(err);
