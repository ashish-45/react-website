import React, { useState } from 'react'
import "./Contact.css";
import Footer from './Footer';
import Footer2 from './Footer2';
import emailjs from 'emailjs-com';
import { db } from '../Firebase';


const Contact = () => {

    var regex = /^([a-z A-Z 0-9\.-]+)@([a-z A-Z 0-9-]+).([a-z]){2,20}$/;

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    // const [sent, setSent] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        db.collection('contacts').add({
            name: name,
            email: email,
            message: message
        })
        if (message.length < 10) {
            alert('please Enter text atleast 10 character');
        }
        else if (regex.test(email)) {
            emailjs.sendForm('service_ts4o9mt', 'template_s1tfq4x', e.target,
                'user_DmOjpZwDwFdOihvf2nSrU')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
            e.target.reset();
            setName("");
            setEmail("");
            setMessage("");
            alert("Message Has Been Sent Successfully...")
        }

    }


    return (
        <>
            <section className='contactus' id="contact">
                <div className="container">
                    <h1 className='title text-center mt-5'>CONTACT US</h1>
                    <form onSubmit={sendEmail}>
                        <div className="singleItem">
                            <label htmlFor="name">Name</label>
                            <input type="text"
                                name="name"
                                className="name"
                                placeholder="Your Name..."
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="singleItem">
                            <label htmlFor="email">Email</label>
                            <input type="email"
                                name="email"
                                className="email"
                                placeholder="Your Email..."
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className='textArea singleItem'>
                            <label htmlFor="message">Message</label>
                            <textarea name="message"
                                id=""
                                col="30"
                                rows="5"
                                placeholder="Your Message..."
                                required
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            >
                            </textarea>
                        </div>
                        {/* <div className={sent ? 'msg msgAppear' : 'msg'}>Message has been Sent</div> */}
                        <button type="submit" className='btn btn-primary' >Submit</button>
                    </form>
                </div>
            </section>
            <Footer />
            <Footer2 />

        </>
    )
}

export default Contact;
