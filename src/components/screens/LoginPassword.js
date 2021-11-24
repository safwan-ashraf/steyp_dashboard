import {useState} from 'react'
import {Link} from "react-router-dom"
import styled from "styled-components";
import Lock from "../../assets/images/Layer 3.svg"
import Unlock from "../../assets/images/unlock.svg"
import blackRound from "../../assets/images/Group 2608.svg"

export default function LoginPassword() {
    const [passwordShown, setPasswordShown] = useState(false);

    const togglePassword = () => {
        // When the handler is invoked
        // inverse the boolean state of passwordShown
        setPasswordShown(!passwordShown);
      };

    return (
        <div className="login">
            <div className="img-box">
                <img src={blackRound} alt="images" />
            </div>
            <h3>Enter Password</h3>
            <p>Enter your password to login</p>
            <form>
                <div className="img-box">
                    <img onClick={togglePassword} src={passwordShown ? Unlock : Lock} alt="images" />
                </div>
                <input type={passwordShown ? "text" : "password"} placeholder="Enter your password" ></input>
            </form>
            <Link to="/otp">
                <span className="ancr forget">Login with OTP</span>
            </Link>
            <Link to="/dashboard">
                <button Link to="/login" className="submit">Submit</button>
            </Link>
        </div>
    )
}
