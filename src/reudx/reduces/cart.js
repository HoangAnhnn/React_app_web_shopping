import * as types from '../constants/actionProduct';

let initState = [];

let shopping_cart = JSON.parse(localStorage.getItem(types.SHOPTING_CART));
// // console.log(shopping_cart);
shopping_cart !== null && shopping_cart.length > 0 ? (initState = shopping_cart) : (initState = []);
// console.log(initState);
const checkProductInCart = (product, state) => {
    // console.log(initState);
    for (let i = 0; i < state.length; i++) {
        if (
            state[i].color === product.color &&
            state[i].size === product.size &&
            state[i].product.id === product.product.id
        ) {
            return i;
        }
    }

    // initState.forEach((item, index) => {
    //     if (item.color === product.color && item.size === product.size && item.product.id === item.product.id) {
    //         return index;
    //     }
    // });
    return -1;
};

// console.log(initState);
const cart = (state = initState, action) => {
    let { payload } = { ...action };
    // console.log(payload);
    console.log();
    switch (action.type) {
        case types.ADD_PRODUCT:
            let index = checkProductInCart(payload, state);
            if (index >= 0) {
                let product = { ...state[index], quantity: state[index].quantity + payload.quantity };

                state.splice(index, 1, product);
                // console.log('sản phẩm đã có sửa sản phẩm');
            } else {
                // console.log('sản phẩm chưa có thêm mới sản phẩm');
                state.push(payload);
            }
            localStorage.setItem(types.SHOPTING_CART, JSON.stringify(state));

            return [...state];

        case types.REMOVE_PRODUCT:
            // console.log(payload);
            let index2 = checkProductInCart(payload, state);
            state.splice(index2, 1);
            localStorage.setItem(types.SHOPTING_CART, JSON.stringify(state));

            return [...state];

        case types.EDIT_PRODUCT:
            // console.log(payload);
            let index3 = checkProductInCart(payload, state);
            state.splice(index3, 1, payload);
            localStorage.setItem(types.SHOPTING_CART, JSON.stringify(state));

            return [...state];
        case types.BUY_PRODUCT:
            // console.log(payload);
            console.log('hello');

            state.splice(0);
            localStorage.setItem(types.SHOPTING_CART, JSON.stringify(state));

            return [...state];

        default:
            return state;
    }
};

export default cart;
