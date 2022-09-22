import * as types from '../constants/actionProduct';

let initState = { staus: false, notify: '' };

const notify = (state = initState, action) => {
    switch (action.type) {
        case types.SHOW_NOTIFY:
            state = true;
            return { status: true, notify: types.NOTIFY_ADD_CART };
        case types.HIDE_NOTIFY:
            return { status: false, notify: '' };
        case types.BUY_NOTIFY:
            return { status: true, notify: types.NOTIFY_BUY };
        default:
            return state;
    }
};
export default notify;
