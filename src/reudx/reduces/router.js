import * as types from '../constants/actionProduct';

const initState = 'home';
const router = (state = initState, action) => {
    switch (action.type) {
        case types.CHOOSE_ROUTER:
            state = action.payload;
            return state;

        default:
            return state;
    }
};
export default router;
