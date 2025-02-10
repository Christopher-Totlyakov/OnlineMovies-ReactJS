import { Navigation } from "../Navigation";
import "./Header.css";

export function Header() {
  return (
    <header className="custom-header">
      <div className="header-left">
        <h1>Shop</h1>
      </div>
      <div className="header-right">
        <Navigation />
      </div>
    </header>
  );
}
