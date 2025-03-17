import "./HomePage.css";

export function Slider({ details, isReverse }) {
    if (!details || !details.results) {
        return <p>Loading...</p>;
    }

    return (
        <article>
            <div
                className={`sliderServices ${isReverse ? "reverse" : ""}`}
                data-reverse={isReverse ? "true" : "false"}
                style={{
                    "--width": "200px",
                    "--height": "270px",
                    "--quantity": details.results.length,
                }}
            >
                <div className="list">
                    {details.results.map((item, index) => (
                        <div key={index} className="service" style={{ "--position": index + 1 }}>
                            <img src={`https://image.tmdb.org/t/p/w400${item.backdrop_path}`} alt={item.name} />

                            <p>{item.media_type === "tv" ? item.name : item.title}</p>
                            <button></button>
                        </div>
                    ))}
                </div>
            </div>
        </article>
    );
}
