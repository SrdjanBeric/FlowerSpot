import React from "react";
import Navigationbar from "./components/Navigationbar";
import "./components/style/Main.css";
import HomePage from "./components/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import Login from "./components/Login";

function App() {
    return (
        <Provider store={store}>
            <div className="main-page">
                {/* <Navigationbar />
                <HomePage /> */}
                <Login />
            </div>
        </Provider>
    );
}

export default App;
