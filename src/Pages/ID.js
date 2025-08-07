import { useEffect, useState } from "react";
import { SingleCard } from "../Components/Card/index.js";
import { Helmet } from "react-helmet";
import "./dl.css";

export const ID = () => {
  const [filteredCards, setFilteredCards] = useState([]);

  useEffect(() => {
    fetch("https://psdt-backend-production.up.railway.app/api/cards")
      .then((response) => response.json())
      .then((data) => {
        const IDCards = data.filter(card => card.category === "ID");
        setFilteredCards(IDCards);
        console.log(IDCards, "Filtered ID Cards");
      })
      .catch((error) => {
        console.error("Error fetching cards:", error);
      });
  }, []);

  return (
    <div className="DLpage-container">
      <Helmet>
        <title>ID Cards - Premium Photoshop Templates | PixSpark</title>
        <meta
          name="description"
          content="Discover premium ID card templates from PixSpark. High-quality Photoshop designs tailored for identification cards with pixel-perfect detail."
        />
        <meta
          name="keywords"
          content="ID cards, Photoshop ID templates, PixSpark ID designs, identification card templates, premium PSD cards"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="ID Cards - Premium Photoshop Templates | PixSpark" />
        <meta
          property="og:description"
          content="Explore PixSpark's exclusive collection of ID card templates, crafted for professional and personal use."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <h1>ID Cards</h1>
      <div className="DLcards idcards">
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
