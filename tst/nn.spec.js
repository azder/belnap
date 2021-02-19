import nn from '../src/nn.function.js';


describe('nn', () => {


    it(
        'is a function',
        () => expect(nn).toBeFun(),
    );


    it(
        'returns U for U',
        () => expect(nn).toMap(void 0, void 0),
    );


    it(
        'returns N for N',
        () => expect(nn).toMap(null, null),
    );


    it.each([
        false, 0, '',
    ])(
        'returns F for %p',
        $ => expect(nn).toMap(false, $),
    );


    it.each([
        true, 1, 'a',
    ])(
        'returns T for %p',
        $ => expect(nn).toMap(true, $),
    );

});
