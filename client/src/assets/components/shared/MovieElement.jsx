import './MovieElement.css'
import { Link } from "react-router-dom";

export function MovieElement({id, img, title, year}) {
    return (
        <Link to={`/movies/${id}`}>
            <div className="card-wrapper">
                <div className="card" style={{ '--card-bg-img': `url(https://image.tmdb.org/t/p/w200${img})` }}>
                    <p className="heading">{title}</p>
                    <p>{year}</p>
                </div>
            </div>
        </Link>

    );
}