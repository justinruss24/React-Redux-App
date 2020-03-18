import { FETCH_DATA, NEW_DRINK, SET_ERROR } from "../actions/actions";

const initialState = {
    drink: [],
    isFetchingData: false,
    error: ""
};

export const drinkReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA:
            return {
                isFetchingData: true,
                drink: {}
            };
        case NEW_DRINK:
            return {
                drink: action.payload,
                isFetchingData: false
            };
        case SET_ERROR:
            return {
                isFetchingData: false,
                error: action.payload
            };
        default:
            return state;
    }
};