import { useState } from "react";

import styles from './components/SearchBar.module.css';
import TextBox from "./components/TextBox";


export function SearchBar({ onSearch }) {
    const [query, setQuery] = useState({ type: "movie", name: "", year: "", page: 1 });

    const handleChange = (e) => {
        setQuery({ ...query, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(query);
    };

    return (
        <form onSubmit={handleSubmit}>

            <TextBox
                type="text"
                name="name"
                placeholder="Keyword..."
                value={query.name}
                onChange={handleChange}
            />
            <TextBox
                type="number"
                name="year"
                placeholder="Year"
                value={query.year}
                onChange={handleChange}
            />
         
            <button
                type="submit"
                className={styles['searchContent']}
            >Search</button>
        </form>
    );
}
