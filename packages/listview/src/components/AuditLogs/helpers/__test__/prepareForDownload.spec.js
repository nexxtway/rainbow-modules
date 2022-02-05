import { prepareForDownload } from '..';

describe('prepareForDownload', () => {
    it('should return the correct data when format is csv', () => {
        const data = [
            {
                createdAt: {
                    seconds: 1643950800,
                    nanoseconds: 0,
                },
                labels: {
                    username: 'leo@nexxt',
                },
                textPayload: 'This log has been generated',
                severity: 'info',
            },
            {
                severity: 'warning',
                textPayload: 'This is a warning log.',
                createdAt: {
                    seconds: 1643864400,
                    nanoseconds: 0,
                },
                labels: {
                    other: 'foo',
                    username: 'leo@nexxt',
                },
            },
            {
                textPayload: 'Deployment has failed',
                severity: 'error',
                labels: {
                    app: 'react-rainbow-components',
                },
                createdAt: {
                    seconds: 1643778000,
                    nanoseconds: 0,
                },
            },
            {
                severity: 'debug',
                labels: {
                    username: 'david@nexxt',
                    other: 'foo',
                },
                textPayload: 'Lorem ipsum dolor sit amet',
                createdAt: {
                    seconds: 1643778000,
                    nanoseconds: 0,
                },
            },
        ];
        const expected = [
            {
                severity: 'info',
                createdAt: '2022-02-04T00:00:00.000-05:00',
                textPayload: 'This log has been generated',
                'label.username': 'leo@nexxt',
                'label.other': '',
                'label.app': '',
            },
            {
                severity: 'warning',
                createdAt: '2022-02-03T00:00:00.000-05:00',
                textPayload: 'This is a warning log.',
                'label.username': 'leo@nexxt',
                'label.other': 'foo',
                'label.app': '',
            },
            {
                severity: 'error',
                createdAt: '2022-02-02T00:00:00.000-05:00',
                textPayload: 'Deployment has failed',
                'label.username': '',
                'label.other': '',
                'label.app': 'react-rainbow-components',
            },
            {
                severity: 'debug',
                createdAt: '2022-02-02T00:00:00.000-05:00',
                textPayload: 'Lorem ipsum dolor sit amet',
                'label.username': 'david@nexxt',
                'label.other': 'foo',
                'label.app': '',
            },
        ];
        expect(prepareForDownload({ data, format: 'csv' })).toEqual(expected);
    });

    it('should return the correct data when format is csv', () => {
        const data = [
            {
                createdAt: {
                    seconds: 1643950800,
                    nanoseconds: 0,
                },
                labels: {
                    username: 'leo@nexxt',
                },
                textPayload: 'This log has been generated',
                severity: 'info',
            },
            {
                severity: 'warning',
                textPayload: 'This is a warning log.',
                createdAt: {
                    seconds: 1643864400,
                    nanoseconds: 0,
                },
                labels: {
                    other: 'foo',
                    username: 'leo@nexxt',
                },
            },
            {
                textPayload: 'Deployment has failed',
                severity: 'error',
                labels: {
                    app: 'react-rainbow-components',
                },
                createdAt: {
                    seconds: 1643778000,
                    nanoseconds: 0,
                },
            },
            {
                severity: 'debug',
                labels: {
                    username: 'david@nexxt',
                    other: 'foo',
                },
                textPayload: 'Lorem ipsum dolor sit amet',
                createdAt: {
                    seconds: 1643778000,
                    nanoseconds: 0,
                },
            },
        ];
        const expected = [
            {
                severity: 'info',
                createdAt: '2022-02-04T00:00:00.000-05:00',
                textPayload: 'This log has been generated',
                labels: {
                    username: 'leo@nexxt',
                },
            },
            {
                severity: 'warning',
                createdAt: '2022-02-03T00:00:00.000-05:00',
                textPayload: 'This is a warning log.',
                labels: {
                    other: 'foo',
                    username: 'leo@nexxt',
                },
            },
            {
                severity: 'error',
                createdAt: '2022-02-02T00:00:00.000-05:00',
                textPayload: 'Deployment has failed',
                labels: {
                    app: 'react-rainbow-components',
                },
            },
            {
                severity: 'debug',
                createdAt: '2022-02-02T00:00:00.000-05:00',
                textPayload: 'Lorem ipsum dolor sit amet',
                labels: {
                    username: 'david@nexxt',
                    other: 'foo',
                },
            },
        ];
        expect(prepareForDownload({ data, format: 'json' })).toEqual(expected);
    });
});
