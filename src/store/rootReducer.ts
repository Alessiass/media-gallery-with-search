import { combineReducers } from "redux";
import favouritesReducer from "./favouritesSlice";

export default combineReducers({
    favourites: favouritesReducer
})