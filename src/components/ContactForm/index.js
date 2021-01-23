import React, {useState} from 'react'
import './contactForm.css'
import TextScramble from '@twistezo/react-text-scramble'
import { motion } from 'framer-motion'
const texts = [
    "Say hello"
]

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}

function ContactForm() {
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    
    const handleSubmit = e => {
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", email, message })
        })
            .then(() => alert("Success!"))
            .catch(error => alert(error));
    
        e.preventDefault();
    }


    return (
        <>
        <motion.div class="contact_form" exit={{opacity: 0}}>
            <div class="sayHello"><TextScramble texts={texts}/></div>
            <div class="blue-line"></div>
                <form class="contactForm" onSubmit={handleSubmit}>
                    <div class="email-form">
                        <input required value={email} onChange={(e) => setEmail(e.target.value)} name="email" id="email" type="email" autocomplete="off"  />
                        <label for="email" class="label-text"><span class="content-email">Your Email</span></label>
                    </div>
                    <div class="email-form">
                        <input required value={message} onChange={(e) => setMessage(e.target.value)} type="text" name="message" id="message" autocomplete="off" />
                        <label for="message" class="label-text"><span class="content-email">Your Message</span></label>
                    </div>
                    <button type="submit"><span class="button-send">Send Message</span></button>
                </form>
            
        </motion.div>
        </>
    )
}

export default ContactForm
