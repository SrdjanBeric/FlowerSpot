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
import FlowerDetails from "./components/FlowerDetails";
import SightingDetails from "./components/SightingDetails";
import Comment from "./components/Comment";
import WriteComment from "./components/WriteComment";

function App() {
    return (
        <Provider store={store}>
            <div className="main-page">
                <Router>
                    <Navigationbar />
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/flower/:id" element={<FlowerDetails />} />
                        <Route
                            path="/sighting/:id"
                            element={<SightingDetails />}
                        />
                        <Route path="/write" element={<WriteComment />} />
                        <Route path="*" element={<Navigate to="/" replace />} />
                    </Routes>
                </Router>
            </div>
        </Provider>
    );
}

export default App;
