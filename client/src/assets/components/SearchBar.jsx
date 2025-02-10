import { useState } from "react";

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
            <select name="type" onChange={handleChange} value={query.type}>
                <option value="movie">Movies</option>
                <option value="series">Series</option>
            </select>
            <input type="text" name="name" placeholder="Search..." onChange={handleChange} value={query.name} />
            <input type="number" name="year" placeholder="Year" onChange={handleChange} value={query.year} />
            <button type="submit">Search</button>
        </form>
    );
}
