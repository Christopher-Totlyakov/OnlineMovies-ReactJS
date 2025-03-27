import { useLoadTrending } from "../../hooks/useLoadTrending";
import { Slider } from "../shared/Slider";
import "./HomePage.css"

export function HomePage() {
    const { details: movieDetails, loading: movieLoading, error: movieError } = useLoadTrending("movie");
    const { details: tvDetails, loading: tvLoading, error: tvError } = useLoadTrending("tv");

    return (
        <div className="homeContainer">
            <h1 className="homeTitleSlider">Recommended <span className="highlight">MOVIE</span> for today:</h1>
            {movieDetails && <Slider details={movieDetails} isReverse={false} />}

            <h1 className="homeTitleSlider">Recommended <span className="highlight">SERIES</span> for today:</h1>
            {tvDetails && <Slider details={tvDetails} isReverse={true} />}

        </div>
    );
}