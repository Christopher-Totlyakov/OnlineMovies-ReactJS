import { Link } from "react-router-dom";
import React, { useState, useRef } from "react";

import "./Navigation.css"

export function Navigation() {

    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setIsOpen((prev) => !prev);
    }

    return (
        <>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/movies">Movies</Link>
                <Link to="/series">Series</Link>
            </nav>

            <div id="phone-nav">
                <button
                    id="phone-nav-icon"
                    className={isOpen ? "open" : ""}
                    onClick={toggleMenu}
                    aria-expanded={isOpen}
                    onBlur={(e) => {
                        if (!menuRef.current.contains(e.relatedTarget)) {
                            setIsOpen(false);
                        }
                    }}
                >
                    <span className="nav-icon-line first-line"></span>
                    <span className="nav-icon-line second-line"></span>
                    <span className="nav-icon-line third-line"></span>
                </button>

                {isOpen && (
                    <div
                        ref={menuRef}
                        className="menu-box"
                        tabIndex={-1}
                        style={{opacity:1}}
                    >
                        <ul>
                            <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
                            <li><Link to="/movies" onClick={() => setIsOpen(false)}>Movies</Link></li>
                            <li><Link to="/series" onClick={() => setIsOpen(false)}>Series</Link></li>
                        </ul>
                    </div>
                )}
            </div>
        </>
    );

}