import { useEffect, useState } from "react";
import { SingleCard } from "../Components/Card/index.js";
import { Helmet } from "react-helmet";
import "./dl.css";

export const DL = () => {
  const [filteredCards, setFilteredCards] = useState([]);

  useEffect(() => {
<<<<<<< HEAD
    fetch("http://localhost:5000/api/cards")
=======
    fetch("https://psdt-backend-production.up.railway.app/api/cards")
>>>>>>> studiopc
      .then((response) => response.json())
      .then((data) => {
        const dlCards = data.filter(card => card.category === "DL");
        setFilteredCards(dlCards);
        console.log(dlCards, "Filtered DL Cards");
      })
      .catch((error) => {
        console.error("Error fetching cards:", error);
      });
  }, []);

  return (
    <div className="DLpage-container">
      <Helmet>
        <title>DL Cards - Premium Design Templates | PixSpark</title>
        <meta
          name="description"
          content="Browse our exclusive collection of DL category cards. Premium Photoshop templates and design resources tailored for your needs."
        />
        <meta
          name="keywords"
          content="DL cards, design templates, PSD DL cards, PixSpark DL category, Photoshop templates"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="DL Cards - Premium Design Templates | PixSpark" />
        <meta
          property="og:description"
          content="Explore DL category cards by PixSpark, offering top-quality PSD templates and design resources."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <h1>DL Cards</h1>
      <div className="DLcards">
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
