import { classNames } from './classNames';

describe('classNames', () => {
    test('strings', () => {
        expect(classNames('first', 'second')).toBe('first second');
    });

    test('negative values', () => {
        expect(classNames(false, undefined, null, 0)).toBe('');
    });

    test('object', () => {
        expect(classNames({
            first: true,
            second: false,
            third: undefined,
            fourth: null,
            fifth: 0
        })).toBe('first');
    });

    test('full', () => {
        expect(classNames(
            'string',
            false,
            undefined,
            null,
            0,
            {
                first: true,
                second: false,
                third: undefined,
                fourth: null,
                fifth: 0
            }
        )).toBe('string first');
    });
});