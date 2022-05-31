import { combineReducers } from "redux";
import flowerReducer from "./flowers/flowerReducers";
import userReducer from "./user/userReducers";
import singleFlowerReducer from "./singleFlower/singleFlowerReducers";
import sightingReducer from "./sighting/sightingReducers";
import sightingsReducer from "./sightings/sightingsReducers";
import commentReducer from "./comments/commentReducers";
const rootReducer = combineReducers({
    flower: flowerReducer,
    user: userReducer,
    singleFlower: singleFlowerReducer,
    sighting: sightingReducer,
    comments: commentReducer,
    sightings: sightingsReducer,
});

export default rootReducer;
