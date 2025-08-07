import React from 'react';
import { Helmet } from 'react-helmet';
import { FaEnvelope, FaWhatsapp, FaTelegram } from 'react-icons/fa';
import './contact.css';

export const Contact = () => {
    return (
        <div className="contact-page">
            <Helmet>
                <title>Contact PixSpark – Get in Touch for Premium PSD Designs</title>
                <meta
                    name="description"
                    content="Contact PixSpark for any inquiries about our premium PSD templates and design services. Reach us via email, WhatsApp, or Telegram."
                />
                <meta
                    name="keywords"
                    content="PixSpark contact, PSD templates contact, design inquiry, email PixSpark, WhatsApp PixSpark, Telegram PixSpark"
                />
                <meta name="robots" content="index, follow" />
                <meta property="og:title" content="Contact PixSpark – Premium PSD Template Services" />
                <meta
                    property="og:description"
                    content="Get in touch with PixSpark for professional PSD templates and design services. Email, WhatsApp, and Telegram available."
                />
                <meta property="og:type" content="website" />
                {/* Optional: add your og:image URL once deployed */}
                {/* <meta property="og:image" content="https://yourdomain.com/assets/images/contact-og.jpg" /> */}
            </Helmet>

            <h1>Contact Us</h1>
            <p className="contact-subtitle">We’re here to help with your design needs.</p>

            <div className="contact-options">
                <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=ubaidqadri97@gmail.com&su=PixSpark%20Inquiry"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-card email"
                >
                    <FaEnvelope size={30} />
                    <span>Email Us</span>
                </a>

                <a
                    href="https://wa.me/923102638500"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-card whatsapp"
                >
                    <FaWhatsapp size={30} />
                    <span>Chat on WhatsApp</span>
                </a>

                <a
                    href="https://t.me/yourtelegramusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-card telegram"
                >
                    <FaTelegram size={30} />
                    <span>Message on Telegram</span>
                </a>
            </div>
        </div>
    );
};
