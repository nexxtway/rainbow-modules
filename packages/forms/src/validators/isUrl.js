import { isUrl } from '@rainbow-modules/validation';
import withCustomError from '../helpers/withCustomError';
import isEmptyValue from '../helpers/isEmptyValue';

const isValidUrl = (value) => {
    if (isEmptyValue(value) || isUrl(value)) {
        return undefined;
    }
    return 'The url is invalid.';
};

export default withCustomError(isValidUrl);
