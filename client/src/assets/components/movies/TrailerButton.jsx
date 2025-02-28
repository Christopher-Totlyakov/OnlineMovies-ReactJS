import React, { useState } from "react";
import style from "./TrailerButton.module.css";

export default function TrailerButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <div className={style["buttonConteiner"]}>
      {/* Бутонът за отваряне на трейлъра */}
      <button className={style["animated-button"]} onClick={() => setIsOpen(true)}>
        <svg xmlns="http://www.w3.org/2000/svg" className={style["arr-2"]} viewBox="0 0 24 24">
          <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
        </svg>
        <span className={style["text"]}>T R A I L E R</span>
        <span className={style["circle"]} />
        <svg xmlns="http://www.w3.org/2000/svg" className={style["arr-1"]} viewBox="0 0 24 24">
          <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
        </svg>
      </button>

      {/* Модалът */}
     
    </div>
     {isOpen && (
      <div className={style.overlay} onClick={() => setIsOpen(false)}>
        <div className={style.modal} onClick={(e) => e.stopPropagation()}>
          <button className={style.close} onClick={() => setIsOpen(false)}>✖</button>
          <h2>Official Trailer</h2>
          <iframe
            width="100%"
            height="315"
            src={`https://www.youtube.com/embed/rUSdnuOLebE`}
            title="Trailer"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    )}
    </>
  );
}
