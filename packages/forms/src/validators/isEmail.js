import { isEmail } from '@rainbow-modules/validation';
import withCustomError from '../helpers/withCustomError';

const isValidEmail = (value) => (isEmail(value) ? undefined : 'The email is invalid.');

export default withCustomError(isValidEmail);
