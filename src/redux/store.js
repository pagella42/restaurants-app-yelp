import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducer";
import { fetchRestaurants, fetchRestaurantsError, selectItem } from "./reducer";
import axios from "axios";
import {
  CREATE_ROUTE,
  REQUEST_RESULTS_LIMIT,
  USER_DEFAULT_LOCATION,
} from "../Consts";

export const getRestaurants = (location, category) => {
  return async (dispatch) => {
    if (!location && !category) {
      dispatch(fetchRestaurants([]));
    }

    let URL = `restaurants/${REQUEST_RESULTS_LIMIT}`;
    
    if (location) {
      URL = URL + `/${location}/null`;
    } else if (category) {
      URL = URL + `/${USER_DEFAULT_LOCATION}/${category}`;
    }

    axios
      .get(CREATE_ROUTE(URL))
      .then((response) => {
        dispatch(fetchRestaurants(response.data.data));
      })
      .catch((error) => {
        dispatch(fetchRestaurantsError(error));
      });
  };
};

export const setSelectedItem = (item) => {
  return async (dispatch) => {
      dispatch(selectItem(item));
  };
};

export default createStore(reducer, applyMiddleware(thunk));
