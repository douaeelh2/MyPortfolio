import React, { useState } from "react";
import emailjs from "emailjs-com";
import Toast from "../widgets/Toast";
import Social from "./Social";
import styles from "../style";
const Contact = () => {
    const [emailData, setEmailData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    const [showToast, setShowToast] = useState(false); // État pour afficher ou masquer le toast

    const handleChange = (e) => {
        setEmailData({ ...emailData, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send('service_pke2t39', 'template_j9pu79l', emailData, 'ROTZS_DDGW_oVLzV_')
            .then((result) => {
                console.log('E-mail envoyé avec succès', result.text);
                setEmailData({
                    name: "",
                    email: "",
                    subject: "",
                    message: ""
                });
                setShowToast(true);
                setTimeout(() => setShowToast(false), 5000);
            }, (error) => {
                console.error('Erreur lors de l\'envoi de l\'e-mail', error.text);
            });
    };
    return (
        <section id="contact" className="relative">
            <div className="absolute z-[0] w-[30%] h-[30%] -right-[25%] rounded-full blue__gradient top-[-12%]"/>
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-sm z-30">
                <h2 className={`${styles.heading2Center}`}>Have You Any Project ? Please Drop a Message</h2>
                <p className={`${styles.paragraphCenter}`}>If you like what you see, let's work together.
                    I bring rapid solutions to make the life of my clients easier. Have any questions ? Reach out to me
                    from this contact form and I will get back to you shortly.</p>
                <form onSubmit={handleSubmit} class="space-y-8">
                    <div>
                        <label for="name" class="block mb-2 text-md font-medium font-poppins text-gray-300">Name</label>
                        <input type="text" id="name" value={emailData.name} onChange={handleChange}
                               className="shadow-sm bg-black-gradient border border-gray-400 text-white text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                               placeholder="Your name" required/>
                    </div>
                    <div>
                        <label for="email"
                               className="block mb-2 text-md font-medium font-poppins text-gray-300">Email</label>
                        <input type="email" id="email" value={emailData.email} onChange={handleChange}
                               className="shadow-sm bg-black-gradient border border-gray-400 text-white text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                               placeholder="name@example.com" required/>
                    </div>
                    <div>
                        <label for="subject"
                               className="block mb-2 text-md font-medium font-poppins text-gray-300">Subject</label>
                        <input type="text" id="subject" value={emailData.subject} onChange={handleChange}
                               className="shadow-sm bg-black-gradient border border-gray-400 text-white text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                               placeholder="Let me know how I can help you" required/>
                    </div>
                    <div className="sm:col-span-2">
                        <label for="message" class="block mb-2 text-md font-medium font-poppins text-gray-300">Your
                            message</label>
                        <textarea id="message" rows="6" value={emailData.message} onChange={handleChange}
                                  className="shadow-sm bg-black-gradient border border-gray-400 text-white text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                                  placeholder="Leave a comment..."></textarea>
                    </div>
                    <button type="submit"
                            className={`py-3 px-4 font-poppins font-medium hover:scale-[0.99] text-[16px] text-primary bg-blue-gradient rounded-[10px] outline-none`}>Send
                        message
                    </button>
                </form>

                {showToast && <Toast/>}

                <Social/>

            </div>
        </section>
    );
};

export default Contact;
