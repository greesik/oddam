import React from 'react';
import "../scss/HomeMain.scss";

const HomeMain = () => {
    return (
        <div className="main-wrapper">
            <div className="title"> <p>Zacznij pomagać!</p> <p>Oddaj niechciane rzeczy w zaufane ręce</p></div>
            <div className="tribal"></div>
            <div className="home-main-buttons">
                <div className="home-button home-button-left">ODDAJ RZECZY</div>
                <div className="home-button home-button-right">ZORGANIZUJ ZBIÓRKĘ</div>
            </div>
        </div>
    );
};

export default HomeMain;