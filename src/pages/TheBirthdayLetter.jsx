import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 

function TheBirthdayLetter() {
    const navigate = useNavigate();
    const [popupImage, setPopupImage] = useState(null);

    const openPopup = (imageSrc) => {
        setPopupImage(imageSrc);
    };

    const closePopup = () => {
        setPopupImage(null);
    };

    return (
        <div className="app">
            <div className="paper">
                <div className="letter">
                    <p>Yoo whatshapp!</p>
                    <p>
                        soo in the end of this day, in the end of ur 18', one more time 
                        you stay alive. it's not an accident, it's a bless.
                        lot thing we all faces. ppl have their own struggle. obviously.
                        maybe you're not doing it well but as long s u try that's enough.
                        don't be too hard on urself, ok? there's lot of ppl who loves you.
                        me. as example, ur friends,ur parents, ur fictional char wkwk , n don't
                        forget about our God.
                 </p>
                    <p>
                        once more, enjoy ur new journey. hope this live always bless you.
                        HAPPY BIRTHDAYY!
                    </p>
                    <p style={{ textAlign: "right" }}>with love,</p>
                    <p style={{ textAlign: "right" }}>Taraawr</p>
                </div>
            </div>

            <div className="title">
                <p>moore?</p>
            </div>
            <div className="img-btn">
                <button className="img-button" onClick={() => openPopup("img/1.png")}>
                    <img src="img/letter2.png" alt="letter" className="img-small"/>
                    <span className="btn-text">thanks</span>
                </button>
                <button className="img-button" onClick={() => openPopup("img/3.png")}>
                    <img src="img/letter2.png" alt="letter" className="img-small"/>
                    <span className="btn-text">sorry</span>
                </button>
            </div>

            <div className="img-btn">
                <button className="img-button" onClick={() => openPopup("img/2.png")}>
                    <img src="img/letter2.png" alt="letter" className="img-small"/>
                    <span className="btn-text">cheer</span>
                </button>
                <button className="img-button" onClick={() => openPopup("img/4.png")}>
                    <img src="img/letter2.png" alt="letter" className="img-small"/>
                    <span className="btn-text">sad</span>
                </button>
            </div>

            <button className="btn" onClick={() => navigate("/")}>
                That's it! ^^
            </button>

            {popupImage && (
                <div className="popup-overlay" onClick={closePopup}>
                    <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                        <img src={popupImage} alt="Popup" className="popup-image" />
                        <button className="close-btn" onClick={closePopup}>X</button>
                    </div>
                </div>
            )}
        </div>
    );
}


export default TheBirthdayLetter;