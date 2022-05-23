import { combineReducers } from "redux";
import flowerReducer from "./flowers/flowerReducers";

const rootReducer = combineReducers({
    flower: flowerReducer,
});

export default rootReducer;
