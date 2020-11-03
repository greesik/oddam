import React from 'react';
import "../scss/FourSteps.scss";

const FourSteps = () => {
    return (
        <section className={"four-steps"}>
            <div className="four-header">
                <h3 className={"four-header-title"}>Wystarczą 4 proste kroki</h3>
                <div className="four-header-tribal"></div>
            </div>
            <div className="four-main">
                <div className="four-main-container">
                    <div className="four-element">
                        <div className="four-element-icon four-element-icon-1"></div>
                        <h4 className="four-element-title">Wybierz rzeczy</h4>
                        <p className="four-element-description">ubrania, zabawki, sprzęt i inne</p>
                    </div>
                    <div className="four-element">
                        <div className="four-element-icon four-element-icon-2"></div>
                        <h4 className="four-element-title">Spakuj je</h4>
                        <p className="four-element-description">skorzystaj z worków na śmieci</p>
                    </div>
                    <div className="four-element">
                        <div className="four-element-icon four-element-icon-3"></div>
                        <h4 className="four-element-title">Zdecyduj komu chcesz pomóc</h4>
                        <p className="four-element-description">wybierz zaufane miejsce</p>
                    </div>
                    <div className="four-element">
                        <div className="four-element-icon four-element-icon-4"></div>
                        <h4 className="four-element-title">Zamów kuriera</h4>
                        <p className="four-element-description">kurier przyjedzie w dogodnym terminie</p>
                    </div>

                </div>
            </div>
            <div className="four-footer">
                <button className="four-footer-button">ODDAJ RZECZY</button>
            </div>
        </section>
    );
};

export default FourSteps;