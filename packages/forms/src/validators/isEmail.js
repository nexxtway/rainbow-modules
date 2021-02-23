import { isEmail } from '@rainbow-modules/validation';
import withCustomError from '../helpers/withCustomError';
import isEmptyValue from '../helpers/isEmptyValue';

const isValidEmail = (value) => {
    if (isEmptyValue(value) || isEmail(value)) {
        return undefined;
    }
    return 'The email is invalid.';
};

export default withCustomError(isValidEmail);
