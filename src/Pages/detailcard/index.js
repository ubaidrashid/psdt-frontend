import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import "../detailcard/detailcard.css";

export const DetailedCard = () => {
  const { id } = useParams();
  const [card, setCard] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCard = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/cards/${id}`);
        if (!res.ok) {
          throw new Error("Card not found");
        }
        const data = await res.json();
        setCard(data);
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch card detail:", err);
        setLoading(false);
      }
    };

    fetchCard();
  }, [id]);

  if (loading) return <p>Loading card detail...</p>;
  if (!card) return <p>Card not found.</p>;

  const handlePlaceOrder = (type) => {
    const message = `Hi, I would like to order the following card:\n\nTitle: ${card.title}\nDescription: ${card.description}\nPrice: ${card.price}\nCountry: ${card.country}\nDetails: ${card.detailedDescription}`;
    const phoneNumber = "923102638500";
    const encodedMessage = encodeURIComponent(message);

    let url = "";
    if (type === "whatsapp") {
      url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    } else if (type === "telegram") {
      url = `https://t.me/share/url?url=&text=${encodedMessage}`;
    } else if (type === "email") {
      url = `mailto:ubaidqadri97@gmail.com?subject=Card Order: ${card.title}&body=${encodedMessage}`;
    }

    window.open(url, "_blank");
  };

  return (
    <div className="detailed-card">
      <article className="coverUp" role="region" aria-label={`Detailed information about ${card.title}`}>
        <section className="textsection">
          <h1 className="card-title">{card.title}</h1>

          <p className="card-description">
            <strong>Description:</strong><br />
            {card.description}
          </p>

          <p className="detailedprice">
            <strong>Price:</strong> {card.price}
          </p>

          <div className="order-buttons">
            <button
              className="placeOrder"
              onClick={() => handlePlaceOrder("whatsapp")}
              aria-label="Order via WhatsApp"
            >
              WhatsApp
            </button>
            <button
              className="placeOrder"
              onClick={() => handlePlaceOrder("telegram")}
              aria-label="Order via Telegram"
            >
              Telegram
            </button>
            <button
              className="placeOrder"
              onClick={() => handlePlaceOrder("email")}
              aria-label="Order via Email"
            >
              Email
            </button>
          </div>

          <p className="country">
            <strong>Country:</strong> {card.country}
          </p>
        </section>

        <section className="imgSection" aria-label="Card preview image">
          <img
            src={`http://localhost:5000${card.detailImage}`}
            alt={`Preview of ${card.title}`}
            loading="lazy"
          />
        </section>
      </article>

      <section className="card-details" aria-label="Detailed Description">
        <p style={{ lineHeight: "1.5", fontSize: '18px' }}>
          <strong style={{ fontSize: "22px" }}>Details:</strong><br />
          {card.detailedDescription}
        </p>
      </section>
    </div>
  );
};
