import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import './App.css';
import "./assets/css/style.css"
import LogIn from './components/screens/LogIn';
import Left from './components/includes/Left';
import LoginPassword from "./components/screens/LoginPassword";
import Dashboard from "./components/screens/Dashboard";
import PasswordResetOne from "./components/screens/PasswordResetOne";
import PasswordResetTwo from "./components/screens/PasswordResetTwo";
import PasswordResetThree from "./components/screens/PasswordResetThree";
import Otp from "./components/screens/Otp";
import SignUpName from "./components/screens/SignUpName";
import SignUpPhone from "./components/screens/SignUpPhone";
import SignUpPassword from "./components/screens/SignUpPassword";
import Referal from "./components/screens/Referal";

function App() {
  return (
    <Router>
        <section className="main-container">
            <div className="main-left">
                <Left />
            </div>
            <div className="right">
                {/* <Switch> */}
                    <Route path = "/" exact component ={LogIn} />
                    <Route path = "/login" component ={LoginPassword} />
                    <Route path = "/dashboard" component ={Dashboard} />
                    <Route path = "/pswrd1" component ={PasswordResetOne} />
                    <Route path = "/pswrd2" component ={PasswordResetTwo} />
                    <Route path = "/pswrd3" component ={PasswordResetThree} />
                    <Route path = "/otp" component ={Otp} />
                    <Route path = "/suphone" component ={SignUpPhone} />
                    <Route path = "/suname" component ={SignUpName} />
                    <Route path = "/supassword" component ={SignUpPassword} />
                    <Route path = "/referal" component ={Referal} />    
                {/* </Switch> */}
            </div>
        </section>
    </Router>
  );
}

export default App;
