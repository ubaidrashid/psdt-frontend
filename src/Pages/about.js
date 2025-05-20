import React from 'react';
import { Helmet } from 'react-helmet';
import './about.css';

export const About = () => {
  return (
    <div className="about-page">
      <Helmet>
        <title>About PixSpark – Creative PSD Template Services</title>
        <meta name="description" content="Learn more about PixSpark – your trusted source for premium PSD templates, custom document design, and creative visual solutions." />
        <meta name="keywords" content="about PixSpark, PSD templates, graphic design, photoshop documents, flyers, ID cards, license templates" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="About PixSpark – Premium Design Services" />
        <meta property="og:description" content="Discover how PixSpark brings your ideas to life with professional document design and Photoshop templates." />
        <meta property="og:type" content="website" />
        {/* Optional - Use only if you have an image */}
        {/* <meta property="og:image" content="https://yourdomain.com/assets/images/about-og.jpg" /> */}
      </Helmet>

      <div className="about-content">
        <h1>About PixSpark</h1>
        <p className="tagline">Designing documents that speak for you.</p>

        <p>
          PixSpark is your go-to solution for premium Photoshop-based document and catalog design. 
          Whether you need business flyers, ID templates, license designs, or custom layout editing — 
          we bring your ideas to life with pixel-perfect precision.
        </p>

        <p>
          We specialize in visually appealing templates and digital documents tailored to your specific needs. 
          Our goal is to deliver fast, clean, and client-focused results — always maintaining confidentiality, quality, and creativity.
        </p>

        <p>
          Join the growing list of clients who trust PixSpark for sharp visuals, structured pages, and seamless design execution.
        </p>
      </div>
    </div>
  );
};
