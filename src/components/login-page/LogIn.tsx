import React, {useState} from "react";
import {connect} from "react-redux";

import LoginStyles from "./login.module.css";
import CommonStyles from "../common/common.module.css";
import NavBar from "../common/navBar";

const LogIn:React.FC<loginPropsType> = (props): JSX.Element => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLoginFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("submitted")
    }

    return (
        <div className={CommonStyles.pageContainer}>
            {/*--NavBar--*/}
            <NavBar />
            {/*--Body--*/}
            <div className={LoginStyles.bodyContainer}>
                <div className={LoginStyles.bodyLeft}>
                    hello
                </div>
                <div className={LoginStyles.bodyRight}>
                    <button onClick={() => null}>Sign-In-With-google</button>
                    <button onClick={() => null}>Sign-In-With-facebook</button>
                    <button onClick={() => null}>Sign-In-With-twitter</button>
                    <form onSubmit={handleLoginFormSubmit}>
                        <label className={LoginStyles.label}>email:
                            <input type={"text"} className={LoginStyles.textField} value={email} placeholder={"email"} onChange={(e) => setEmail(e.target.value)} />
                        </label>
                        <label className={LoginStyles.label}>password:
                            <input type={"password"} className={LoginStyles.textField} value={password} placeholder={"password"} onChange={(e) => setPassword(e.target.value)} />
                        </label>
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

const mapStatesToProps = (states: loginPropsType) => {
    return {
        darkMode: states.darkMode
    }
}


export default connect(mapStatesToProps)(LogIn);
