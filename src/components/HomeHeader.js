import React from 'react';
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import {Link as Scroll} from "react-scroll";
import '../scss/HomeHeader.scss';

const HomeHeader = () => {
    return (
        <header className={"menu-wrapper"}>
            <Router>
             <nav className={"nav-1"}>
                 <ul className={"menu upperMenu"}>
                    <li>
                        <Link to={"/login"}>Zaloguj</Link>
                    </li>
                     <li>
                        <Link to={"/register"}>Załóż konto</Link>
                    </li>
                 </ul>
             </nav>
             <nav className={"nav-2"}>
                 <ul className={"menu lowerMenu"}>
                     <li>
                         <Scroll to={"#start"}>Start</Scroll>
                     </li>
                     <li>
                         <Scroll to={"#about"}>O co chodzi?</Scroll>
                     </li>
                     <li>
                         <Scroll to={"#team"}>O nas</Scroll>
                     </li>
                     <li>
                         <Scroll to={"#foundation"}>Fundacja i organizacje</Scroll>
                     </li>
                     <li>
                         <Scroll to={"#contact"}>Kontakt</Scroll>
                     </li>
                 </ul>
             </nav>
            </Router>
        </header>
    );
};

export default HomeHeader;