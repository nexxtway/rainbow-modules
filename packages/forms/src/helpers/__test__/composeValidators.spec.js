import compose from '../composeValidators';

const validatorReturnUndefined = () => undefined;
const validatorReturnError = () => 'error';
describe('composeValidators', () => {
    it('should return undefined', () => {
        const validator = compose(validatorReturnUndefined, validatorReturnUndefined);
        expect(validator()).toBe(undefined);
    });
    it('should return error', () => {
        const validator = compose(validatorReturnUndefined, validatorReturnError);
        expect(validator()).toBe('error');
    });
});
