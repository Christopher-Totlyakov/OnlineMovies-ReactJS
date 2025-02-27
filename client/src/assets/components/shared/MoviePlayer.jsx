import { useRef } from 'react';
import style from "./MoviePlayer.module.css";


const MoviePlayer = ({ movieId }) => {
  if (!movieId) return <p>The movie will be added.</p>;

  const embedUrl = `https://vidsrc.icu/embed/movie/${movieId}`;
  const iframeRef = useRef(null);

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      iframeRef.current.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  return (
    <>
    <div className={style['shadowContainer']}>
      <div className={style['movieConteiner']} style={{ textAlign: "center" }}>
        <iframe
          ref={iframeRef}
          className={style['player']}
          src={embedUrl}
          allowFullScreen
          frameBorder="0"
          title="Movie Player"
          scrolling="no"
        ></iframe>
       
      </div>
    </div>
    <button className={style['controlerButton']} onClick={toggleFullScreen}>
    Fullscreen
  </button>
  </>
  );
};

export default MoviePlayer;
