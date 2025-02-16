import { useState } from "react";

import styles from './components/SearchBar.module.css';
import MultiRangeSlider from "./components/MultiRangeSlider";
import TextBox from "./components/TextBox";


export function SearchBar({ onSearch }) {
    const [query, setQuery] = useState({ type: "movie", name: "", year: "", page: 1 });

    const currentYear = new Date().getFullYear();

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
         
            <MultiRangeSlider
                min={1900}
                max={currentYear}
                onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
            />

            <button
                type="submit"
                className={styles['searchContent']}
            >Search</button>
        </form>
    );
}
