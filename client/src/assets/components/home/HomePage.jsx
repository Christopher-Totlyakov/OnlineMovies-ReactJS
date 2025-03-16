import { useLoadTrending } from "../../hooks/useLoadTrending";
import { Slider } from "./Slider";

export function HomePage() {
    const { details: movieDetails, loading: movieLoading, error: movieError } = useLoadTrending("movie");
    const { details: tvDetails, loading: tvLoading, error: tvError } = useLoadTrending("tv");
    console.log(movieDetails)
    console.log(tvDetails)
    return(
        <article>
            <h1>Home</h1>
        </article>
    );
}