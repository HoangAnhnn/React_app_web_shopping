import * as types from '../constants/actionProduct';

const initState = false;
const showSearch = (state = initState, action) => {
    switch (action.type) {
        case types.SHOW_SEARCH:
            return true;
        case types.HIDE_SEARCH:
            return false;
        default:
            return state;
    }
};
export default showSearch;
