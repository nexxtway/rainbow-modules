import getTimeDiff from '../getTimeDiff';

describe('getTimeDiff', () => {
    it('should return the right values', () => {
        const date = Date.now();
        const diffs = [
            // second
            1000,
            // minute
            1000 * 60,
            // hour
            1000 * 60 * 60,
            // day
            1000 * 60 * 60 * 24,
            // month
            1000 * 60 * 60 * 24 * 30,
            // year
            1000 * 60 * 60 * 24 * 365,
        ];
        const expected = [
            [-1, 'seconds'],
            [-1, 'minutes'],
            [-1, 'hours'],
            [-1, 'days'],
            [-1, 'months'],
            [-1, 'years'],
        ];
        const results = diffs.map((value) => {
            return getTimeDiff(date - value);
        });
        expect(results).toEqual(expected);
    });
});
