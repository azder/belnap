import an from './an.function.js';
import Belnap from './belnap.class.js';
import nn from './nn.function.js';
import no from './no.function.js';
import or from './or.function.js';


export {default as an} from './an.function.js';
export {default as nn} from './nn.function.js';
export {default as no} from './no.function.js';
export {default as or} from './or.function.js';

export {default as and} from './an.function.js';
export {default as nono} from './nn.function.js';
export {default as not} from './no.function.js';


export {default as a} from './an.function.js';
export {default as n} from './no.function.js';
export {default as o} from './or.function.js';


const {freeze, assign} = Object;


// noinspection JSUnusedGlobalSymbols
assign(Belnap, {

    nn,
    no,
    an,
    or,

    and:  an,
    nono: nn,
    not:  no,

    a: an,
    n: nn,
    o: or,

});


freeze(Belnap);


// noinspection JSUnusedGlobalSymbols
export default (

    Belnap

);
