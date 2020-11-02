import React from 'react';
import HomeHeader from "./HomeHeader";
import "../scss/Home.scss";
import Statistics from "./Statistics";
import HomeMain from "./HomeMain";

const Home = () => {
    return (
        <section className={"home"}>
            <div className="home-screen">
                <HomeHeader/>
                <HomeMain/>
            </div>
            <Statistics/>
        </section>
    );
};

export default Home;