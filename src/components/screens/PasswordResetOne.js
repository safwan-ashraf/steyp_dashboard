import React from 'react'
import {Link} from "react-router-dom"
import call from "../../assets/images/call.svg"
import blackRound from "../../assets/images/Group 2608.svg"

export default function PasswordResetOne() {
    return (
        <div className="login">
            <div className="img-box">
                <img src={blackRound} alt="images" />
            </div>
            <h3>Password Reset Setup (1/3)</h3>
            <p>Enter your registered number to reset your password</p>
            <form>
                <div className="img-box">
                    <img src={call} alt="images" />
                </div>
                <input type="number" placeholder="Enter your Mobile number" ></input>
            </form>
            <Link to="/pswrd2">
                <button className="submit">Send OTP</button>
            </Link>
        </div>
    )
}
