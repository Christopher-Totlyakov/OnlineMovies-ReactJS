const MoviePlayer = ({ movieId }) => {
    if (!movieId) return <p>The movie will be added.</p>;
  
    const embedUrl = `https://vidsrc.icu/embed/movie/${movieId}`;
  
    return (
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <iframe
          src={embedUrl}
          width="800"
          height="450"
          allowFullScreen
          frameBorder="0"
          title="Movie Player"
        ></iframe>
      </div>
    );
  };
  
  export default MoviePlayer;
  