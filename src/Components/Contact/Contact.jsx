import React from 'react';
import './Contact.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import call_icon from '../../assets/call_icon.svg';
import location_icon from '../../assets/location_icon.svg';

const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const accesskey  = 'ea78e5b-92cc-4ce3-b8aa-f8f7ee62ac1f';
        formData.append("access_key", accesskey); 
        console.log("access_key", accesskey);

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: json
        }).then((res) => res.json());

        if (res.success) {
            console.log("Response:", res);
            alert("Message sent successfully!");
        }
    };

    return (
        <div className='contact'>
            <div className="contact-title">
                <h1> Get in Touch</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div id='contact' className="contact-section">
                <div className="contact-left">
                    <h1>Let's Talk</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, aliquid?</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} alt="Mail" /><p>nittinsy12@gmail.com</p>                  
                        </div>
                        <div className="contact-detail">
                            <img src={call_icon} alt="PhoneNumber" /><p>+91123453210</p>
                        </div>
                        <div className="contact-detail">
                            <img src={location_icon} alt="Location" /><p>Gurugram,India</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className="contact-right">
                    <label htmlFor="">Your Name</label>
                    <input type="text" placeholder='Enter your name' name='name'/>
                    <label htmlFor="">Your Email</label>
                    <input type="email" placeholder='Enter your email' name = 'email'/>
                    <label htmlFor="">Message</label>
                    <textarea name="message" rows="9" placeholder='Enter your message'></textarea>
                    <button type='submit' className='contact-submit'>Send</button>
                </form>
            </div>
        </div>
    )
}

export default Contact