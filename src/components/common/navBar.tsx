import React, {Dispatch, useState} from "react";
import {connect} from "react-redux";
import NavBarStyles from "./navBar.module.css";
import {Link} from "react-router-dom";
import DarkModeToggle from "react-dark-mode-toggle";
import {FaHamburger} from "react-icons/fa";
import {appStateType} from "../../store/app/type";


const NavBar: React.FC<navBarPropsType> = ({ darkMode}): JSX.Element => {
    const [isDarkMode, setIsDarkMode] = useState(darkMode);
    return (
        <div className={NavBarStyles.navBarContainer}>
            <Link to = {'/login'} className={`${NavBarStyles.navBarLogo} link`}>QA</Link>
            <div className={NavBarStyles.navBarTextLogo}>QuizKitchen</div>
            <div className={NavBarStyles.navBarOptionsContainer}>
                <Link to={'#'} className={`${NavBarStyles.navBarOption} link`}>Lorem</Link>
                <Link to={'#'} className={`${NavBarStyles.navBarOption} link`}>JustAnother</Link>
                <DarkModeToggle speed={5.0} checked={isDarkMode} onChange={setIsDarkMode}  size={40} className={NavBarStyles.navBarOption}/>
            </div>
            <FaHamburger className={NavBarStyles.navBarHamburger} />
        </div>
    )
}

const mapStateToProps = (state: appStateType): navBarPropsType => {
    return {
        darkMode: state.darkMode
    }
}


export default connect(mapStateToProps)(NavBar);
