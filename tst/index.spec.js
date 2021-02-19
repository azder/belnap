import * as M from '../src/index.js';


describe.each([
    ['nn', 'nono'],
    ['no', 'not', 'n'],
    ['an', 'and', 'a'],
    ['or', 'o'],
])('module', (key, ...aliases) => {


    it(`has "${key}" which is a function`, () => {

        expect(M[key]).toBeFun(key);
    });


    it.each(
        aliases,
    )(`has "${key}" aliased as %p`, alias => {

        expect([key, alias, M[key]]).toEqual([key, alias, M[alias]]);
    });


});
