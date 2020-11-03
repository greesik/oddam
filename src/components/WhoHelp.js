import React from 'react'
import "../scss/WhoHelp.scss";

const WhoHelp = () => {
    return (
        <section className={"who-help"}>
            <h2 className="who-help-title">Komu pomagamy?</h2>
            <div className="who-help-tribal"></div>
            <div className="who-help-who">
                <button className="who-help-button">Fundacjom</button>
                <button className="who-help-button">Organizacjom pozarządowym</button>
                <button className="who-help-button">Lokalnym zbiórkom</button>
            </div>
            <div className="who-help-description">W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</div>
            <div className="who-help-list"></div>
            <div className="who-help-pagination"></div>
        </section>
    )
}

export default WhoHelp
