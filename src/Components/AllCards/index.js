import { useState, useEffect } from 'react';
import { SingleCard } from '../../Components/Card/index.js';
import { Helmet } from 'react-helmet-async';
import "../AllCards/allcards.css";

export const AllCards = () => {
  const [cardsData, setCardsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch("https://psdt-backend-production.up.railway.app/api/cards"); // <-- Replace with your actual backend route
        const data = await response.json();
        setCardsData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching card data:", error);
        setLoading(false);
      }
    };

    fetchCards();
  }, []);

  if (loading) {
    return <p aria-busy="true">Loading cards, please wait...</p>;
  }

  return (
    <>
      <Helmet>
        <title>All Cards - Browse Products</title>
        <meta
          name="description"
          content="Explore our wide range of cards with detailed info, pricing, and images. Find the perfect match for your needs."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="All Cards - Browse Products" />
        <meta property="og:description" content="Explore our wide range of cards with detailed info, pricing, and images." />
        <meta property="og:type" content="website" />
      </Helmet>

      <section className="cards" aria-label="All Product Cards">
        {cardsData.map((card) => (
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
      </section>
    </>
  );
};
