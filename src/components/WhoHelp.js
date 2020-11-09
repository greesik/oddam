import React, {useState} from 'react'
import "../scss/WhoHelp.scss";

const WhoHelp = () => {

    const foundations = {
        id: 0,
        list:[
            {
                name:"Fundacja “Dbam o Zdrowie”", 
                info:"Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.", 
                tags:"ubrania, jedzenie, sprzęt AGD, meble, zabawki"
            }, 
            {
                name:"Fundacja “Dla dzieci”", 
                info:"Cel i misja: Pomoc dzieciom z ubogich rodzin.", 
                tags:"ubrania, jedzenie, zabawki"
            }, 
            {
                name:"Fundacja “Bez domu”", 
                info:"Cel i misja: Pomoc dla osób nieposiadających miejsca zamieszkania.", 
                tags:"ubrania, jedzenie, ciepłe koce"
            }
        ]
    };

    const organisations = {
        id: 1,
        list:[
            {
                name:"Organizacja 1", 
                info:"info about local1", 
                tags:"ubrania, jedzenie, sprzęt AGD, meble, zabawki"
            }, 
            {
                name:"Organizacja 2", 
                info:"info about local2", 
                tags:"ubrania, jedzenie, zabawki"
            }, 
            {
                name:"Organizacja 3", 
                info:"info about local3", 
                tags:"ubrania, jedzenie, sprzęt AGD, meble, zabawki"
            }
        ]
    };  

    const locals = {
        id: 2,
        list:[
            {
                name:"Zbiórka 1", 
                info:"info about local1", 
                tags:"ubrania, jedzenie, sprzęt AGD, meble, zabawki"
            }, 
            {
                name:"Zbiórka 2", 
                info:"info about local2", 
                tags:"ubrania, jedzenie, zabawki"
            }, 
            {
                name:"Zbiórka 3", 
                info:"info about local3", 
                tags:"ubrania, jedzenie, sprzęt AGD, meble, zabawki"
            }
        ]
    };

    const options = [foundations, organisations, locals];

    const [chosen, setChosen] = useState(0);

    const handleOptionClick = (event) => {
        setChosen(event.target.id);
    }
    
    return (
        <section className={"who-help"}>
            <h2 className="who-help-title">Komu pomagamy?</h2>
            <div className="who-help-tribal"></div>
            <div className="who-help-who">
                <button className="who-help-button" id={0} onClick={handleOptionClick}>Fundacjom</button>
                <button className="who-help-button" id={1} onClick={handleOptionClick}>Organizacjom pozarządowym</button>
                <button className="who-help-button" id={2} onClick={handleOptionClick}>Lokalnym zbiórkom</button>
            </div>
            <div className="who-help-description">W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</div>
            <div className="who-help-list">
                <ul>{options[chosen].list.map(element => 
                    <li className="who-help-option">
                        <div className="option-details">
                            <h3 className="option-name">{element.name}</h3>
                            <p className="option-info">{element.info}</p>
                        </div>
                        <div className="option-tags">{element.tags}</div>
                    </li>)}
                </ul>
            </div>
            <div className="who-help-pagination"></div>
        </section>
    )
}

export default WhoHelp
