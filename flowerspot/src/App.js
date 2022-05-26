import React from "react";
import Navigationbar from "./components/Navigationbar";
import "./components/style/Main.css";
import HomePage from "./components/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from "react-router-dom";
import Registration from "./components/Registration";
import FlowerDetails from "./components/FlowerDetails";

function App() {
    return (
        <Provider store={store}>
            <div className="main-page">
                <Navigationbar />
                <Router>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/flower/:id" element={<FlowerDetails />} />
                        <Route path="*" element={<Navigate to="/" replace />} />
                    </Routes>
                </Router>
            </div>
        </Provider>
    );
}

export default App;
