import "./Footer.css"

export function Footer() {
    return (
        <footer>
            <div className="footerDivElement">
                <h1>Online Movie</h1>
                <h2>&#9426; {new Date().getFullYear()} - Christopher Totlyakov</h2>
            </div>
        </footer>
    );
}