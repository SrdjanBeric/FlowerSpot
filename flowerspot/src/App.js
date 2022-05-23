import React from "react";
import Navigationbar from "./components/Navigationbar";
import "./components/style/Main.css";
import HomePage from "./components/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
    return (
        <Provider store={store}>
            <div className="main-page">
                <Navigationbar />
                <HomePage />
            </div>
        </Provider>
    );
}

export default App;
