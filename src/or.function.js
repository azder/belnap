const N = null;
const U = void 0;


const or = (

    (a, b) => {

        if ((a === N && b === U) || (a === U && b === N)) {
            return true;
        }

        if (a || b) {
            return a || b;
        }

        if (U === a || U === b) {
            return U;
        }

        if (N === a || N === b) {
            return N;
        }

        return a && b;
    }

);


// noinspection JSUnusedGlobalSymbols
export default (

    or

);
