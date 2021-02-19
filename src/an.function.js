const N = null;
const U = void 0;


const an = (

    (a, b) => {


        if ((a === N && b === U) || (a === U && b === N)) {
            return false;
        }

        if (a === N) {
            return b ? N : b;
        }

        if (b === N) {
            return a ? N : a;
        }

        if (a === U || b === U) {
            return U;
        }

        return a || b;
    }

);


// noinspection JSUnusedGlobalSymbols
export default (

    an

);
