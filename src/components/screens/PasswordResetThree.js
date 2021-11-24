import {useState} from 'react'
import {Link} from "react-router-dom"
import Lock from "../../assets/images/Layer 3.svg"
import Unlock from "../../assets/images/unlock.svg"
import Visible from "../../assets/images/eye.svg"
import hide from "../../assets/images/hide.svg"
import blackRound from "../../assets/images/Group 2608.svg"
import Tick from "../../assets/images/tick.svg"
import Wrong from "../../assets/images/wrong.svg"
import Round from "../../assets/images/round.svg"

export default function PasswordResetThree() {
    const [passwordShownOne, setPasswordShownOne] = useState(false);
    const [passwordShownTwo, setPasswordShownTwo] = useState(false);
    const [passValOne,setPassValOne]= useState()
    const [passValTwo,setPassValTwo]= useState()

    

    const handleConfirmPassword = () => {
        console.log(passValOne)
        console.log(passValTwo)
        let confirm= document.getElementById("match");
        if (passValOne !== passValTwo) {
            console.log("Passwords doesn't match");
            confirm.innerHTML = "Passwords doesn't match";
        }
        else if(passValOne === passValTwo){
            confirm.innerHTML = "";
        }
    }
    const togglePasswordOne = () => {
        // When the handler is invoked
        // inverse the boolean state of passwordShown
        setPasswordShownOne(!passwordShownOne);
    };
    const togglePasswordTwo = () => {
        // When the handler is invoked
        // inverse the boolean state of passwordShown
        setPasswordShownTwo(!passwordShownTwo);
    };
    return (
        <div className="login">
            <div className="img-box">
                <img src={blackRound} alt="images" />
            </div>
            <h3>Password Reset Setup (3/3)</h3>
            <form>
                <div className="img-box">
                    <img onClick={togglePasswordOne} src={passwordShownOne ? Unlock : Lock} alt="images" />
                </div>
                <input type={passwordShownOne ? "text" : "password"} placeholder="Enter new password" onChange= {(e) => setPassValOne(e.target.value)}/>
                <div className="img-box vis">
                    <img onClick={togglePasswordOne} src={passwordShownOne ? Visible : hide} alt="images" />
                </div>
            </form>
            <form>
            <div className="img-box">
                    <img onClick={togglePasswordTwo} src={passwordShownTwo ? Unlock : Lock} alt="images" />
                </div>
                <input type={passwordShownTwo ? "text" : "password"} placeholder="Confirm password" onChange= {(e) => setPassValTwo(e.target.value)} />
                <div className="img-box vis">
                    <img onClick={togglePasswordTwo} src={passwordShownTwo ? Visible : hide} alt="images" />
                </div>
                
            </form>
            <span id="match"></span>

            <div className="validation-content">
                <div className="tick-box">
                    <img src={Round} alt="images" />
                </div>
                <span className="pswrd-validation">Contains at least 1 character</span>
            </div>
            <div className="validation-content">
                <div className="tick-box">
                    <img src={Round} alt="images" />
                </div>
                <span className="pswrd-validation">Contains a small letter(a-z)</span>
            </div>
            <div className="validation-content">
                <div className="tick-box">
                    <img src={Round} alt="images" />
                </div>
                <span className="pswrd-validation">Contains a Capital letter(A-Z)</span>
            </div>
            <div className="validation-content">
                <div className="tick-box">
                    <img src={Round} alt="images" />
                </div>
                <span className="pswrd-validation">Contains at least one number(0-9)</span>
            </div>
            <div className="validation-content">
                <div className="tick-box">
                    <img src={Round} alt="images" />
                </div>
                <span className="pswrd-validation">Contains at least one symbol(#,*,@,!,$ etc.)</span>
            </div>
            
            <Link to="/pswrd3">
                <button className="submit" onClick={handleConfirmPassword}>Reset</button>
            </Link>
        </div>
    )
}
