import firebase from 'firebase';
import normalizeCreatedAt from '../normalizeCreatedAt';

describe('normalizeCreatedAt', () => {
    it('should return the same number when date is a number', () => {
        expect(normalizeCreatedAt(1234)).toBe(1234);
    });

    it('should return the timestamp of the date', () => {
        const date = new Date();
        expect(normalizeCreatedAt(date)).toBe(date.getTime());
    });

    it('should return the timestamp of the date when it is a firebase Timestamp', () => {
        const date = firebase.firestore.Timestamp.fromDate(new Date());
        expect(normalizeCreatedAt(date)).toBe(date.toDate().getTime());
    });

    it('should return null when date is incorrect', () => {
        const values = ['string', true, -10, undefined, null, [], {}];
        values.forEach((value) => {
            expect(normalizeCreatedAt(value)).toBe(null);
        });
    });
});
