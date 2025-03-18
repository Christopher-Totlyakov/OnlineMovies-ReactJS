import { useLoadTrending } from "../../hooks/useLoadTrending";
import { Slider } from "./Slider";

export function HomePage() {
    const { details: movieDetails, loading: movieLoading, error: movieError } = useLoadTrending("movie");
    const { details: tvDetails, loading: tvLoading, error: tvError } = useLoadTrending("tv");
    
    return (
        <>
            {movieDetails && <Slider details={movieDetails} isReverse={false} />}
            {tvDetails && <Slider details={tvDetails} isReverse={true} />}
        </>
    );
}