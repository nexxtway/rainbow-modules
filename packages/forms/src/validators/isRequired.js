import withCustomError from '../helpers/withCustomError';

const isRequired = (value) => (value ? undefined : 'Required.');

export default withCustomError(isRequired);
