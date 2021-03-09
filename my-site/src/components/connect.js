import React from 'react'
import emailjs from "emailjs-com"



function Connect() {


    // Validations! 
    // const validater = document.getElementById("validate");


    const sendEmail = (e) => {
        e.preventDefault();
        // if ()
        emailjs.sendForm('cj_service_send_id_12345', 'template_y94zxv8', e.target, 'user_YiHE0BxfjlvSLY7NKcmyo')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        alert("Thanks for getting in touch!")
        e.target.reset()
    }

    return (
        <div className="connect-display">
            <h1>Connect with me</h1>
            <form id="validater" onSubmit={sendEmail}>
                <label>Name</label>
                <input className="form-input" type="text" name="name" />
                <label>Email</label>
                <input className="form-input" type="email" name="email" />
                <label>Subject</label>
                <input className="form-input" type="text" name="subject" />
                <label>Message</label>
                <textarea className="form-input texting" type="text" name="message" />
                <button className="form-input submit" type="submit" value="Send Message">
                    Submit
                </button>
            </form>
        </div>
    )
}

export default Connect
