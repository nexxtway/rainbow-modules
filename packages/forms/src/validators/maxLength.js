import withCustomError from '../helpers/withCustomError';

const maxLength = (maxLengthValue) => (value) => {
    if (value && value.length > 0) {
        return value.length > maxLengthValue
            ? `The input has more characters than ${maxLengthValue}`
            : undefined;
    }
    return undefined;
};

export default (maxLengthValue, err) => withCustomError(maxLength(maxLengthValue))(err);
