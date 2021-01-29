import withCustomError from '../withCustomError';

const validatorReturnUndefined = () => undefined;
const validatorReturnError = () => 'error';

describe('withCustomError', () => {
    it('should return undefined', () => {
        const validitor = withCustomError(validatorReturnUndefined)();
        expect(validitor()).toBe(undefined);
    });
    it('should return error', () => {
        const validitor = withCustomError(validatorReturnError)();
        expect(validitor()).toBe('error');
    });
    it('should return custom error', () => {
        const validitor = withCustomError(validatorReturnError)('custom error');
        expect(validitor()).toBe('custom error');
    });
    it('should return function error', () => {
        const functionError = () => 'function error';
        const validitor = withCustomError(validatorReturnError)(functionError);
        expect(validitor()).toBe('function error');
    });
});
