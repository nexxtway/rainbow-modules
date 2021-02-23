import withCustomError from '../helpers/withCustomError';
import isEmptyValue from '../helpers/isEmptyValue';

const isRequired = (value) => (isEmptyValue(value) ? 'Required.' : undefined);

export default withCustomError(isRequired);
