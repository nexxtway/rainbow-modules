import isValidPubSubTopic from '../isValidPubSubTopic';

describe('isValidPubSubTopic()', () => {
    it('should return false', () => {
        [
            null,
            undefined,
            '',
            Array.from(new Array(256)).fill('A').join(''),
            'goog',
            'gOOg',
            'g00o00g',
            'g0ogle',
            'GOOGLE',
            'g00g',
            'go0g',
            'event_google',
            'event_gOOgle',
            'event_g000000gle',
            '_SEND',
            'SEND_',
            'EVENT+-',
            'AN@EVENT',
        ].forEach((value) => expect(isValidPubSubTopic(value)).toBe(false));
    });
    it('should return true', async () => {
        expect.assertions(6);
        [
            'event',
            'Event',
            'EVENT',
            'SEND_MESSAGE',
            'SOME_OTHER_EVENT',
            'event_To_Be_sent',
        ].forEach((value) => expect(isValidPubSubTopic(value)).toBe(true));
    });
});
