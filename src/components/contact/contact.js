import './contact.css'
import React, {useRef} from 'react';
import wisdom from "../../assets/wisdomwriters.png"
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_f95ldgs', 'template_00mbye8', form.current, 'n5kJqT1jKzOpm-aBz0U3p')
            .then((result) => {
                console.log(result.text);
                e.target.reset();
                alert('Email sent')
            }, (error) => {
                console.log(error.text);
            });
    };
    return(
        <section className='contactPage'>
            <div id='clients'>

                <h1>
                <span className="clientTitle">My Clients</span>
                </h1>
                
                <span className="clientPara">
                    I have had the opportunity to work with a diverse of companies. Among them, 
                    this section lists the companies that  I provided 
                    service directly.
                </span>
                <br/>
                <br/>

                <div className="clientComponent">
                    <img src={wisdom} className="image" alt='wisdom'/>
                    <div>
                        <h2>Wisdom Writers</h2>
                        <br/>
                        <p> Wisdom writers is a group of academic consultants, developing a writer panel management system </p>
                    </div>
                </div>


            </div>

            <div id='contact'>
                <h1 className='contactTitle'>
                    Contact Me
                </h1>
                <span className='contactDesc'>Please fill and submit the below form and connect with me through email</span>
                <form className='contactForm' ref={form} onSubmit={sendEmail}>
                    <input type='text' className='name' placeholder='Your name' name='your_name'/>
                    <input type='email' className='email' placeholder='Your email' name="your_email"/>
                    <textarea className='msg' name='message' rows="5" placeholder='Your message'></textarea>
                    <button onClick={sendEmail} type='submit' value='Send' className='submitBtn'> <i id='emailIcon' className="bi bi-envelope-fill" ></i> Submit</button>
                </form>
            </div>
 
        </section>
    )
}
export default Contact