import styles from "./ContactStyles.module.css";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
    const form = useRef();
    const [message, setMessage] = useState(""); // ✅ useState kullanımı

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm("service_jdzk896", "template_vgyzcni", form.current, {
                publicKey: "Wtr16b4GPvRaLwEnC",
            })
            .then(
                () => {
                    setMessage("✅ Email sent successfully!");
                    form.current.reset();
                },
                (error) => {
                    setMessage("❌ Failed to send email: " + error.text);
                }
            );
    };

    return (
        <section id="contact" className={styles.container}>
            <h1 className="sectionTitle">Contact</h1>
            {message && <p className="message">{message}</p>} {/* ✅ Mesaj ekranda gösterilecek */}
            <form ref={form} onSubmit={sendEmail} action="">
                <div className="formGroup">
                    <label htmlFor="name" hidden>
                        Name
                    </label>
                    <input type="text" name="name" id="name" placeholder="Name" required />
                </div>
                <div className="formGroup">
                    <label htmlFor="email" hidden>
                        Email
                    </label>
                    <input type="email" name="email" id="email" placeholder="Email" required />
                </div>
                <div className="formGroup">
                    <label htmlFor="message" hidden>
                        Message
                    </label>
                    <textarea type="text" name="message" id="message" placeholder="Message" required></textarea>
                </div>
                <input className="hover btn" type="submit" value="Submit" />
            </form>
        </section>
    );
}

export default Contact;
