import { Navigation } from "../Navigation";
import "./Header.css";

export function Header() {
  return (
    <header>
      <div className="headerContainer">
        <div className="header-left">
          <h1>Online Movies</h1>
        </div>
      </div>
      <div className="headerContainer">
        <div className="header-right">
          <img src="/movieLogo.png" alt="movie logo" />
          <Navigation />
        </div>
      </div>
    </header>
  );
}
