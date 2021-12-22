import * as actions from "./actions/actionTypes";

const  initialState = {
    theme: "light",
};

const themeReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.CHANGE_THEME:
            return {
                ...state,
                theme: action.payload.theme,
            };
        default:
            return state
    }
}

export default themeReducer