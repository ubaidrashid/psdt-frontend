import { useState, useEffect } from "react";
import "../detailcard/detailcard.css";
import backgroundVideo from "../../assets/videos/editdocvideo/editdocvideo.mp4";

export const BackroundCardDetail = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const doc = {
        title: "Card Editing with Real Background",
        description: "Get your cards edited and placed on realistic backgrounds for a lifelike look.",
        detailedDescription:
            "We create professionally edited cards complete with realistic backgrounds — like textured paper, wooden tables, or themed surfaces — so your final design feels real and ready to use. Just tell us what changes you want in your card, and we'll design and place it on a background that matches the tone and purpose of your card. Ideal for printing, showcasing, or digital use.",
        detailImage: "", // Add relevant image showing a card with background
    };


    const [userInput, setUserInput] = useState("");

    const handlePlaceOrder = (type) => {
        if (!userInput.trim()) {
            alert("Please enter the details of your request before sending.");
            return;
        }

        const message = `Edit Request: ${doc.title}\n\n${userInput}`;
        const phoneNumber = "923102638500";
        const encodedMessage = encodeURIComponent(message);

        let url = "";
        if (type === "whatsapp") {
            url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        } else if (type === "telegram") {
            url = `https://t.me/share/url?url=&text=${encodedMessage}`;
        } else if (type === "email") {
            url = `mailto:ubaidqadri97@gmail.com?subject=Edit Request: ${doc.title}&body=${encodedMessage}`;
        }

        window.open(url, "_blank");
    };

    return (
        <div className="detailed-card">
            <article className="coverUp">
                <section className="textsection">
                    <h1 className="card-title">{doc.title}</h1>

                    <p className="card-description">
                        <strong>Details</strong>
                        <br />
                        {doc.description}
                    </p>
                    <section className="card-details">
                        <p style={{ lineHeight: "1.5", fontSize: "18px" }}>
                            <strong style={{ fontSize: "22px" }}>Our Background Editing Feature</strong>
                            <br />
                            {doc.detailedDescription}
                        </p>
                    </section>
                </section>

                <section className="imgSection">
                    <video
                        src={backgroundVideo}
                        controls
                        autoPlay
                        loop
                        muted
                        style={{
                            maxWidth: "100%",
                            borderRadius: "10px",
                            boxShadow: "0 0 10px rgba(0,0,0,0.3)",
                        }}
                    >
                        Your browser does not support the video tag.
                    </video>
                </section>

            </article>

            <section className="formSection">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        handlePlaceOrder("whatsapp");
                    }}
                >
                    <label htmlFor="editRequest" style={{ color: "#fff", fontWeight: "600" }}>
                        Please enter your background + card editing requirements here:
                    </label>
                    <textarea
                        id="editRequest"
                        rows="8"
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                        placeholder="Mention card type, background preference, required edits, and any specific instructions..."
                        required
                        style={{
                            width: "100%",
                            padding: "10px",
                            fontSize: "16px",
                            borderRadius: "5px",
                            border: "1px solid #555",
                            marginTop: "8px",
                            resize: "vertical",
                            backgroundColor: "#222",
                            color: "#eee",
                            outline: "none",
                            boxShadow: "0 0 5px #444",
                        }}
                        onFocus={(e) => (e.target.style.boxShadow = "0 0 8px #6c63ff")}
                        onBlur={(e) => (e.target.style.boxShadow = "0 0 5px #444")}
                    />
                    <div className="order-buttons" style={{ marginTop: "15px" }}>
                        <button type="button" className="placeOrder" onClick={() => handlePlaceOrder("whatsapp")}>
                            WhatsApp
                        </button>
                        <button type="button" className="placeOrder" onClick={() => handlePlaceOrder("telegram")}>
                            Telegram
                        </button>
                        <button type="button" className="placeOrder" onClick={() => handlePlaceOrder("email")}>
                            Email
                        </button>
                    </div>
                </form>
            </section>
        </div>
    );
};
