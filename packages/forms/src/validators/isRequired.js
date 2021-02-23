import withCustomError from '../helpers/withCustomError';

const isRequired = (value) =>
    value === undefined || value === null || value === '' ? 'Required.' : undefined;

export default withCustomError(isRequired);
