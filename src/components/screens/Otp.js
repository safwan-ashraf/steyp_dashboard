import {useState, useEffect} from 'react'
import {Link} from "react-router-dom"
import call from "../../assets/images/call.svg"
import blackRound from "../../assets/images/Group 2608.svg"

export default function Otp() {
    const [count,setCount] = useState(30);
    useEffect(() => {
        if (count > 0) {
            setTimeout(() => setCount(count - 1), 1000);
          } else {
            setCount('0s');
          }
    })
    
    return (
        <div className="login">
            <div className="img-box">
                <img src={blackRound} alt="images" />
            </div>
            <h3>Enter OTP sent to your number</h3>
            <p>The recovery code is sent to your number.Please enter the code</p>
            <form>
                <div className="img-box">
                    <img src={call} alt="images" />
                </div>
                <input type="password" placeholder="Enter OTP" ></input>
            </form>
            <span className="ancr forget otpTimer">Resend OTP in {count}</span>
            <Link to="/dashboard">
                <button className="submit">Verify</button>
            </Link>
            <Link to="/login">
                <span className="ancr forget lp">Login with Password</span>
            </Link>
        </div>
    )
}
