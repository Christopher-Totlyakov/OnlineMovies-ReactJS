import { Link } from "react-router-dom";
import "./Navigation.css"

export function Navigation(){
    return(
        <nav>
            <Link to="/">Home</Link>
            <Link to="/movies">Movies</Link>
            <Link to="/series">Series</Link>
        </nav>
    );
}