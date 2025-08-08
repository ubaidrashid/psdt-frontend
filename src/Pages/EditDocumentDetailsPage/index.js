import { useState, useEffect } from "react";
import "../detailcard/detailcard.css";
import logo from "../../assets/images/editdocimg/editdocfront2.jpg";

export const EditDocumentDetail = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // scrolls to the top when component mounts
    }, []);
    // Hardcoded data
    const doc = {
        title: "Professional Document Editing",
        description: "Update, correct, or modify any details in your documents.",
        detailedDescription:
            "We provide professional editing services for all types of documents. Simply share your file (PDF, image, Word, etc.) and specify the changes you want. Whether it's correcting errors, updating information, adjusting formatting, or any other edits, we’ll carefully make the updates and send the revised document back to you promptly.",
        detailImage: logo, // use a generic editing related image
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
                        <p style={{ lineHeight: "1.5", fontSize: "16px" }}>
                            <strong style={{ fontSize: "22px" }}>Our Editing Services</strong>
                            <br />
                            {doc.detailedDescription}
                        </p>
                    </section>
                </section>


                <section className="imgSection">
                    <img src={doc.detailImage} alt={`Editing for ${doc.title}`} loading="lazy" />
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
                        Please enter your editing requirements here:
                    </label>
                    <textarea
                        id="editRequest"
                        rows="8"
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                        placeholder="Share your file details, required changes, deadline, or any other info..."
                        required
                        style={{
                            width: "100%",
                            padding: "10px",
                            fontSize: "16px",
                            borderRadius: "5px",
                            border: "1px solid #555",
                            marginTop: "8px",
                            resize: "vertical",
                            backgroundColor: "#222",       // dark background
                            color: "#eee",                 // light text color
                            outline: "none",
                            boxShadow: "0 0 5px #444",     // subtle glow for focus
                        }}
                        onFocus={(e) => (e.target.style.boxShadow = "0 0 8px #6c63ff")}  // focus highlight (purple-ish)
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

        </div >
    );
};
