import * as types from '../constants/actionProduct';

export const act_show_product = (payload) => {
    return {
        type: types.SHOW_PRODUCT,
        payload: payload,
    };
};
export const act_hide_product = () => {
    return {
        type: types.HIDE_PRODCUT,
    };
};

export const act_show_notify = () => {
    return {
        type: types.SHOW_NOTIFY,
    };
};

export const act_hide_notify = () => {
    return {
        type: types.HIDE_NOTIFY,
    };
};

export const act_add_cart = (payload) => {
    return {
        type: types.ADD_PRODUCT,
        payload: payload,
    };
};

export const act_remove_cart = (payload) => {
    return {
        type: types.REMOVE_PRODUCT,
        payload: payload,
    };
};
export const act_edit_cart = (payload) => {
    return {
        type: types.EDIT_PRODUCT,
        payload: payload,
    };
};
export const act_buy_cart = (payload) => {
    return {
        type: types.BUY_PRODUCT,
        payload: payload,
    };
};
export const act_choose_router = (payload) => {
    return {
        type: types.CHOOSE_ROUTER,
        payload: payload,
    };
};
export const act_buy_notify = (payload) => {
    return {
        type: types.BUY_NOTIFY,
        payload: payload,
    };
};

export const act_show_search = (payload) => {
    return {
        type: types.SHOW_SEARCH,
        payload: payload,
    };
};

export const act_hide_search = (payload) => {
    return {
        type: types.HIDE_SEARCH,
        payload: payload,
    };
};
