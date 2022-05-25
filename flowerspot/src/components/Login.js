import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { loginUser } from "../redux/user/userActions";

import "./style/Login.css";
//qwerty123@gmail.com
//qwerty123
function Login({ showModal, loginUser, userData }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        loginUser(email, password);
    };

    useEffect(() => {
        if (userData.token !== "") {
            showModal(false);
            localStorage.setItem("token", userData.token);
            document.location.reload(true);
        } else if (userData.error !== "") {
            alert(userData.error);
            userData.error = "";
        }
    }, [userData]);

    return (
        <div className="login-card">
            <form onSubmit={onSubmit}>
                <div className="login-content">
                    <div className="login-title">Welcome Back</div>
                    <div className="login-input-div">
                        <input
                            type="email"
                            className="login-input"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <span className="login-input-description">
                            Email Adress
                        </span>
                    </div>
                    <div className="login-input-div">
                        <input
                            type="password"
                            value={password}
                            className="login-input"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <span className="login-input-description">
                            Password
                        </span>
                    </div>
                    <button className="login-button" type="submit">
                        Login to your Account
                    </button>
                </div>
            </form>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        userData: state.user,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        loginUser: (emailAdress, password) =>
            dispatch(loginUser(emailAdress, password)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
