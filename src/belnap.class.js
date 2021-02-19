import an from './an.function.js';
import nn from './nn.function.js';
import no from './no.function.js';
import or from './or.function.js';


const BELNAP = Symbol('BELNAP');


const extract = (

    $ => null === $ || void 0 === $
        ? $
        : (
            Object.getOwnPropertySymbols($).includes(BELNAP)
                ? $[BELNAP]
                : $
        )

);


class Belnap {

    constructor($) {
        this[BELNAP] = $;
    }

    static of($) {
        return new Belnap($);
    }

    nn() {
        this[BELNAP] = nn(this[BELNAP]);
        return this;
    }

    no() {
        this[BELNAP] = no(this[BELNAP]);
        return this;
    }

    an($) {

        this[BELNAP] = an(this[BELNAP], extract($));
        return this;
    }

    or($) {
        this[BELNAP] = or(this[BELNAP], extract($));
        return this;
    }

}


// noinspection JSUnusedGlobalSymbols
export default (

    $ => Belnap.of($)

);
