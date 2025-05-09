import { useEffect, useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import style from "./MoviePlayer.module.css";

const MoviePlayer = ({ type, movieId }) => {
  if (!movieId) return <p>The movie will be added.</p>;

  const iframeRef = useRef(null);
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const initialSeason = searchParams.get("season") || 1;
  const initialEpisode = searchParams.get("episode") || 1;

  const [currentSeason, setCurrentSeason] = useState(initialSeason);
  const [currentEpisode, setCurrentEpisode] = useState(initialEpisode);

  let embedUrl = `https://online-movie-worker.laminex0622.workers.dev/player?type=${type}&id=${movieId}&`;
  if (type === "tv") {
    useEffect(() => {
      if (!searchParams.has("season") || !searchParams.has("episode")) {
        navigate(
          {
            pathname: window.location.pathname,
            search: `?season=${currentSeason}&episode=${currentEpisode}`,
          },
          { replace: true }
        );
      } else {
        navigate(
          {
            pathname: window.location.pathname,
            search: `season=${currentSeason}&episode=${currentEpisode}`,
          },
          { replace: false }
        );
      }
    }, [currentSeason, currentEpisode, navigate]);

    embedUrl += `season=${currentSeason}&episode=${currentEpisode}`;
  }

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      iframeRef.current.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  return (
    <>
      <div className={style["shadowContainer"]}>
        <div
          className={style["movieConteiner"]}
          style={{ textAlign: "center" }}
        >
          <iframe
            ref={iframeRef}
            className={style["player"]}
            src={embedUrl}
            allowFullScreen
            frameBorder="0"
            title="Movie Player"
            scrolling="no"
          ></iframe>
        </div>

        <div className={style["buttonConteiner"]}>
          <button
            className={style["animated-button"]}
            onClick={toggleFullScreen}
          >
            <span className={style["text"]}>F U L L S C R E E N</span>
            <span className={style["circle"]} />
            <svg
              className={style["increaseSvg"]}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M21.7092 2.29502C21.8041 2.3904 21.8757 2.50014 21.9241 2.61722C21.9727 2.73425 21.9996 2.8625 22 2.997L22 3V9C22 9.55228 21.5523 10 21 10C20.4477 10 20 9.55228 20 9V5.41421L14.7071 10.7071C14.3166 11.0976 13.6834 11.0976 13.2929 10.7071C12.9024 10.3166 12.9024 9.68342 13.2929 9.29289L18.5858 4H15C14.4477 4 14 3.55228 14 3C14 2.44772 14.4477 2 15 2H20.9998C21.2749 2 21.5242 2.11106 21.705 2.29078L21.7092 2.29502Z"
                  fill="#ffffff"
                ></path>{" "}
                <path
                  d="M10.7071 14.7071L5.41421 20H9C9.55228 20 10 20.4477 10 21C10 21.5523 9.55228 22 9 22H3.00069L2.997 22C2.74301 21.9992 2.48924 21.9023 2.29502 21.7092L2.29078 21.705C2.19595 21.6096 2.12432 21.4999 2.07588 21.3828C2.02699 21.2649 2 21.1356 2 21V15C2 14.4477 2.44772 14 3 14C3.55228 14 4 14.4477 4 15V18.5858L9.29289 13.2929C9.68342 12.9024 10.3166 12.9024 10.7071 13.2929C11.0976 13.6834 11.0976 14.3166 10.7071 14.7071Z"
                  fill="#ffffff"
                ></path>{" "}
              </g>
            </svg>
          </button>
        </div>

        {type === "tv" && (
          <div className={style["inputContainer"]}>
            <div className={style['inputNumber']}>
              <label>Season: </label>
              <input
                type="number"
                min="1"
                value={initialSeason}
                onChange={(e) => setCurrentSeason(e.target.value)}
              />
              <div className={style['circleContainer']}>
                <span className={style["numberinputCircle"]} />
              </div>
            </div>
            <div className={style['inputNumber']}>
              <label>Episode: </label>
              <input
                type="number"
                min="1"
                value={initialEpisode}
                onChange={(e) => setCurrentEpisode(e.target.value)}
              />
              <div className={style['circleContainer']}>
                <span className={style["numberinputCircle"]} />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MoviePlayer;
