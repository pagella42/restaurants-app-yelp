import store from "./store";

const initialState = {
    restaurants: [],
    selectedScreen: "",
    selectedItem: null
}

//Define your action types 
const GET_RESTAURANTS_FULFILLED = 'GET_RESTAURANTS_FULFILLED';
const GET_RESTAURANTS_ERROR = 'GET_RESTAURANTS_ERROR';
const ITEM_SELECTED_FULFILLED = 'ITEM_SELECTED_FULFILLED';

//REDUCER

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_RESTAURANTS_FULFILLED:
            return { ...state, restaurants: action.payload }
        case GET_RESTAURANTS_ERROR:
            return { ...state, restaurants: [], error: action.payload }
        case ITEM_SELECTED_FULFILLED:
            return { ...state, selectedItem: action.payload  }
        default:
            return state;
    }
}
//ACTIONS

export const fetchRestaurants = (data) => {
    return {
        type: GET_RESTAURANTS_FULFILLED,
        payload: data,
    };
}

export const fetchRestaurantsError = (data) => {
    return {
        type: GET_RESTAURANTS_ERROR,
        payload: data,
    };
}

export const selectItem = (data) => {
    return {
        type: ITEM_SELECTED_FULFILLED,
        payload: data,
    };
}


export default reducer;