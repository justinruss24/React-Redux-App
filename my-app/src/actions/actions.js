import axios from "axios";

export const FETCH_DATA = "FETCH_DATA";
export const NEW_DRINK = "NEW_DRINK";
export const SET_ERROR = "SET_ERROR";

export const getData = () => dispatch => {
    axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
        .then(res => {
            console.log(res.data.drinks);
            dispatch({ type: NEW_DRINK, payload: res.data.drinks });
        })
        .catch(error => {
            console.log("cant fetch data", error);
            dispatch({ type: SET_ERROR, payload: "Sorry, can't make that drink for you!"})
        })
}