import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo/mainLogo.png';
<<<<<<< HEAD
import '../Footer/footer.css';
=======
import './footer.css';
>>>>>>> studiopc
import { FaWhatsapp, FaTelegram, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer bg-dark text-white py-4" aria-label="Website Footer">
            <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">

                {/* Left - Logo and Brand Info */}
                <div className="footer-left mb-3 mb-md-0 text-center text-md-start">
                    <Link to="/" className="brand-logo footer-brand" aria-label="PixSpark Home">
                        <img src={logo} alt="PixSpark Logo" className="logo" />
                        <h1 className="footer-title">PixSpark</h1>
                    </Link>
                    <p className="tagline mt-2">Bringing Ideas to Life</p>
                </div>

                {/* Center - Contact Icons */}
                <nav className="footer-center mb-3 mb-md-0 text-center" aria-label="Footer Contact Links">
                    <a
                        href="mailto:ubaidqadri97@gmail.com"
                        className="footer-icon mx-2 text-white"
                        aria-label="Email us"
                    >
                        <FaEnvelope size={22} />
                    </a>
                    <a
                        href="https://wa.me/923102638500"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-icon mx-2 text-white"
                        aria-label="Chat on WhatsApp"
                    >
                        <FaWhatsapp size={22} />
                    </a>
                    <a
                        href="https://t.me/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-icon mx-2 text-white"
                        aria-label="Connect on Telegram"
                    >
                        <FaTelegram size={22} />
                    </a>
                </nav>

                {/* Right - Tagline or Signature */}
                <div className="footer-right text-center text-md-end">
                    <p className="tagline mt-2 mb-0">Creativity in Every Pixel</p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
