import * as types from '../constants/actionProduct';

const initState = {
    status: false,
    product: {},
};

const showProduct = (state = initState, action) => {
    switch (action.type) {
        case types.SHOW_PRODUCT:
            // console.log(action);
            let { payload } = action;

            return { ...state, status: payload.status, product: payload.product };

        case types.HIDE_PRODCUT:
            // console.log('hello');
            // console.log(state);
            return { ...state, status: false, product: {} };
        default:
            return state;
    }
};

export default showProduct;
