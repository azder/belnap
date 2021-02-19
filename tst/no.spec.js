import no from '../src/no.function.js';


describe('no', () => {


    it(
        'is a function',
        () => expect(no).toBeFun(),
    );


    it(
        'returns U for U',
        () => expect(no).toMap(void 0, void 0),
    );


    it(
        'returns N for N',
        () => expect(no).toMap(null, null),
    );


    it.each([
        false, 0, '',
    ])(
        'returns true for %p',
        $ => expect(no).toMap(true, $),
    );


    it.each([
        true, 1, 'a',
    ])(
        'returns false for %p',
        $ => expect(no).toMap(false, $),
    );

});
