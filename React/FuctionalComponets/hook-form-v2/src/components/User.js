import React, { useState } from "react";

import Display from './Display';

const User = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    
    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if (e.target.value.length < 2) {
            setFirstNameError("First Name must be at least 2 characters");
        } else {
            setFirstNameError("");
        }
    }
    
    const handleLastName = (e) => {
        setLastName(e.target.value);
        if (e.target.value.length < 2) {
            setLastNameError("Last Name must be at least 2 characters");
        } else {
            setLastNameError("");
        }
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
        if (e.target.value.length < 2) {
            setEmailError("Email must be at least 2 characters");
        } else {
            setEmailError("");
        }
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
        if (e.target.value.length < 2) {
            setPasswordError("Password must be at least 2 characters");
        } else {
            setPasswordError("");
        }
    }
    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        if (e.target.value.length < 2) {
            setConfirmPasswordError("Password must be at least 2 characters");
        } else if(e.target.value !== password){
            setConfirmPasswordError("Needs to match password.");
        } else {
            setConfirmPasswordError("");
        }
    }
    return(
        <form>
            <div>
                <label>First Name: </label> 
                <input type="text" onChange={ (e) => handleFirstName(e) } value={ firstName } />
                {
                    firstNameError ? <p>{firstNameError}</p> : ""
                }
            </div>
            <div>
                <label>Last Name: </label> 
                <input type="text" onChange={ (e) => handleLastName(e) } value={ lastName }/>
                {
                    lastNameError ? <p>{lastNameError}</p> : ""
                }
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ (e) => handleEmail(e) } value={ email }/>
                {
                    emailError ? <p>{emailError}</p> : ""
                }
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={ (e) => handlePassword(e) } value={ password }/>
                {
                    passwordError ? <p>{passwordError}</p> : ""
                }
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="text" onChange={ (e) => handleConfirmPassword(e) } value={ confirmPassword }/>
                {
                    confirmPasswordError ? <p>{confirmPasswordError}</p> : ""
                }
            </div>
            <Display firstName={firstName} lastName={lastName} email={email} password={password} confirmPassword={confirmPassword} />
        </form>
    );
};
    
export default User;