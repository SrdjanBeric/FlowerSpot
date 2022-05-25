import React, { useState, useEffect } from "react";
import moment from "moment";
import { connect } from "react-redux";
import { registerUser } from "../redux/user/userActions";
import "./style/Registration.css";

function Registration({ showModal, registerUser, userData }) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastname] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [emailAdress, setEmailAdress] = useState("");
    const [password, setPassword] = useState("");

    const [enableSubmit, setEnableSubmit] = useState(false);

    useEffect(() => {
        if (!userData.loading && userData.token !== "") {
            showModal(false);
            localStorage.setItem("token", userData.token);
            document.location.reload(true);
        } else if (!userData.loading && userData.error !== "") {
            alert(userData.error);
        }
    }, [userData]);

    useEffect(() => {
        handleForm();
    }, [firstName]);
    useEffect(() => {
        handleForm();
    }, [lastName]);
    useEffect(() => {
        handleForm();
    }, [dateOfBirth]);
    useEffect(() => {
        handleForm();
    }, [emailAdress]);
    useEffect(() => {
        handleForm();
    }, [password]);

    const handleForm = () => {
        if (
            firstName.length < 3 ||
            lastName.length < 3 ||
            password.length <= 8
        ) {
            setEnableSubmit(false);
        } else {
            setEnableSubmit(true);
        }
    };

    const onSubmit = (event) => {
        event.preventDefault();
        registerUser({
            email: emailAdress,
            password,
            first_name: firstName,
            last_name: lastName,
            date_of_birth: dateOfBirth,
        });
    };

    return (
        <div className="registration-card">
            <form onSubmit={onSubmit}>
                <div className="registration-content">
                    <div className="registration-title">Create an Account</div>
                    <div className="first-row">
                        <div className="registration-input-div">
                            <input
                                className="registration-input short-input"
                                type="text"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                required
                            />
                            <span class="registration-input-description">
                                First Name
                            </span>
                        </div>
                        <div className="registration-input-div">
                            <input
                                className="registration-input short-input"
                                type="text"
                                value={lastName}
                                onChange={(e) => setLastname(e.target.value)}
                                required
                            />
                            <span class="registration-input-description">
                                Last Name
                            </span>
                        </div>
                    </div>
                    <div className="registration-input-div">
                        <input
                            type="date"
                            className="registration-input"
                            value={dateOfBirth}
                            onChange={(e) => setDateOfBirth(e.target.value)}
                            max={moment().format("YYYY-MM-DD")}
                            required
                        />
                        <span class="registration-input-description">
                            Date of Birth
                        </span>
                    </div>
                    <div className="registration-input-div">
                        <input
                            className="registration-input"
                            type="email"
                            value={emailAdress}
                            onChange={(e) => setEmailAdress(e.target.value)}
                            required
                        />
                        <span class="registration-input-description">
                            Email Adress
                        </span>
                    </div>
                    <div className="registration-input-div">
                        <input
                            type="password"
                            className="registration-input"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <span class="registration-input-description">
                            Password
                        </span>
                    </div>
                    <button
                        disabled={!enableSubmit}
                        className="registration-button"
                        type="submit"
                    >
                        Create Account
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
        registerUser: (
            emailAdress,
            password,
            firstName,
            lastName,
            dateOfBirth
        ) =>
            dispatch(
                registerUser(
                    emailAdress,
                    password,
                    firstName,
                    lastName,
                    dateOfBirth
                )
            ),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
