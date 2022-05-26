import { combineReducers } from "redux";
import flowerReducer from "./flowers/flowerReducers";
import userReducer from "./user/userReducers";
import singleFlowerReducer from "./singleFlower/singleFlowerReducers";
const rootReducer = combineReducers({
    flower: flowerReducer,
    user: userReducer,
    singleFlower: singleFlowerReducer,
});

export default rootReducer;
