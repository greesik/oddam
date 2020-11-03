import React from 'react'
import "../scss/Contact.scss";

const Contact = () => {
    return (
        <section className="contact">
            <div className="contact-form-wrapper">
                <div className="contact-form-title">Skontaktuj się z nami</div>
                <div className="contact-form-tribal"></div>
                <form className="contact-form">
                    <div className="contact-form-inline-input-wrapper">
                        <div className="contact-form-name-wrapper contact-form-input-wrapper">
                            <label htmlFor="">Wpisz swoje imię</label>
                            <input type="text" placeholder="Krzysztof"/>
                        </div>
                        <div className="contact-form-email-wrapper contact-form-input-wrapper">
                            <label htmlFor="">Wpisz swój email</label>
                            <input type="email" placeholder="abc@xyz.pl"/>
                        </div>
                    </div>    
                    <div className="contact-form-message-wrapper contact-form-input-wrapper">
                        <label htmlFor="">Wpisz swoją wiadomość</label>
                        <input type="textarea" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
                    </div>
                    <button className="contact-form-button">Wyślij</button>
                </form>
            </div>
        </section>
    )
}

export default Contact
