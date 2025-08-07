import { useEffect, useState } from "react";
import { SingleCard } from "../Components/Card/index.js";
import { Helmet } from "react-helmet";
import "./dl.css";

export const PR = () => {
  const [filteredCards, setFilteredCards] = useState([]);

  useEffect(() => {
    fetch("https://psdt-backend-production.up.railway.app/api/cards")
      .then((response) => response.json())
      .then((data) => {
        const PRCards = data.filter(card => card.category === "PR");
        setFilteredCards(PRCards);
        console.log(PRCards, "Filtered PR Cards");
      })
      .catch((error) => {
        console.error("Error fetching cards:", error);
      });
  }, []);

  return (
    <div className="DLpage-container">
      <Helmet>
        <title>PR Cards - Premium Photoshop Templates | PixSpark</title>
        <meta
          name="description"
          content="Explore our exclusive collection of PR category cards. Premium Photoshop templates and design resources tailored for your professional needs."
        />
        <meta
          name="keywords"
          content="PR cards, Photoshop templates, PixSpark PR category, premium PSD cards, professional design templates"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="PR Cards - Premium Photoshop Templates | PixSpark" />
        <meta
          property="og:description"
          content="Browse PixSpark's high-quality PR card templates, designed for professional and premium design projects."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <h1>PR Cards</h1>
      <div className="DLcards PRcards">
        {filteredCards.map((card, index) => (
          <SingleCard
            key={card.id}
            id={card.id}
            image={card.image}
            title={card.title}
            price={card.price}
            description={card.description}
            detailImage={card.detailImage}
          />
        ))}
      </div>
    </div>
  );
};
