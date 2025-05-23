import { Helmet } from "react-helmet";
import { ControlledCarousel } from "../../Components/HeroHome.js";
import { AllCards } from "../../Components/AllCards/index.js";
import { EditDoc } from "../../Components/Editdocuments/index.js";
import { BackgroundCards } from "../../Components/BackgroundCardsEdit/index.js";
import './home.css';

export const Home = () => {
  return (
    <main>
      <Helmet>
        <title>PSDT – Premium PSD Templates & Design Resources</title>
        <meta name="description" content="Explore premium PSD templates and design resources including flyers, business cards, and social media banners." />
        <meta name="keywords" content="psd, psdt, graphic design, flyer, business card, templates, photoshop" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="PSDT – Premium PSD Templates" />
        <meta property="og:description" content="Download high-quality Photoshop templates for your design projects." />
        <meta property="og:type" content="website" />
      </Helmet>

      <ControlledCarousel />
      <div className='afterHero'>
        <AllCards />
        <div className="sidebar">
          <EditDoc />
          <BackgroundCards />
        </div>
      </div>
    </main>
  );
};
