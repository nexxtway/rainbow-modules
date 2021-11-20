import isValidBucketName from '../isValidBucketName';

describe('isValidBucketName', () => {
    it('should return false', () => {
        [
            'goog',
            'goo00g',
            'g00g',
            'g0og',
            'goog',
            'g00g',
            'go0g',
            'bucket_google',
            'bucket_g00gle',
            'bucket_gOOgle',
            'bucket_goooooooogle',
            'bucket_g00000000gle',
            'bucket name',
            '9bucket',
            '_bucket',
            'bucket_',
            'bucket+-',
            'a@bucket',
        ].forEach((value) => expect(isValidBucketName(value)).toBe(false));
    });
    it('should return true', () => {
        [
            null,
            undefined,
            '',
            'bucket',
            'bucket-123',
            'bucket-name',
            'bucket_name',
            'some_other_bucket_name',
            'some-other_bucket-name',
            'some-other-bucket-name',
            'some.other.bucket.name',
            'some.other-bucket_name',
        ].forEach((value) => expect(isValidBucketName(value)).toBe(true));
    });
});
