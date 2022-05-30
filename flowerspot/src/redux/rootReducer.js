import { combineReducers } from "redux";
import flowerReducer from "./flowers/flowerReducers";
import userReducer from "./user/userReducers";
import singleFlowerReducer from "./singleFlower/singleFlowerReducers";
import sightingReducer from "./sighting/sightingReducers";
const rootReducer = combineReducers({
    flower: flowerReducer,
    user: userReducer,
    singleFlower: singleFlowerReducer,
    sighting: sightingReducer,
});

export default rootReducer;
