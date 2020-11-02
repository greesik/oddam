import React from 'react';
import "../scss/Statistics.scss";

const Statistics = () => {
    return (
        <section className={"statistics"}>
            <div className="column column-1">
                <p className={"column-number"}>10</p>
                <p className={"column-title"}>ODDANYCH WORKÓW</p>
                <p className={"column-description"}>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
            </div>
            <div className="column column-2">
                <p className={"column-number"}>5</p>
                <p className={"column-title"}>WSPARTYCH ORGANIZACJI</p>
                <p className={"column-description"}>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
            </div>
            <div className="column column-3">
                <p className={"column-number"}>7</p>
                <p className={"column-title"}>ZORGANIZOWANYCH ZBIÓREK</p>
                <p className={"column-description"}>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
            </div>

        </section>
    );
};

export default Statistics;