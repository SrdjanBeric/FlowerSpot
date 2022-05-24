import { combineReducers } from "redux";
import flowerReducer from "./flowers/flowerReducers";
import userReducer from "./user/userReducers";

const rootReducer = combineReducers({
    flower: flowerReducer,
    user: userReducer,
});

export default rootReducer;
