import React from 'react'
import {Link} from "react-router-dom"
import call from "../../assets/images/call.svg"
import blackRound from "../../assets/images/Group 2608.svg"

export default function PasswordResetTwo() {
    return (
        <div className="login">
            <div className="img-box">
                <img src={blackRound} alt="images" />
            </div>
            <h3>Password Reset Setup (2/3)</h3>
            <p>The recovery code is sent to your number.Please enter the code</p>
            <form>
                <div className="img-box">
                    <img src={call} alt="images" />
                </div>
                <input type="password" placeholder="Enter OTP" ></input>
            </form>
            <span className="ancr forget otpTimer">Resend OTP in 20s</span>
            <Link to="/pswrd3">
                <button className="submit">Verify</button>
            </Link>
        </div>
    )
}
