import React from 'react';
import HomeHeader from "./HomeHeader";
import "../scss/Home.scss";
import Statistics from "./Statistics";
import HomeMain from "./HomeMain";
import FourSteps from "./FourSteps";
import AboutUs from './AboutUs';
import WhoHelp from './WhoHelp';
import Contact from './Contact';

const Home = () => {
    return (
        <section className={"home"}>
            <div className="home-screen">
                <HomeHeader/>
                <HomeMain/>
            </div>
            <Statistics/>
            <FourSteps/>
            <AboutUs/>
            <WhoHelp/>
            <Contact/>
        </section>
    );
};

export default Home;