import './header.css';
import { Link } from 'react-router-dom';

export default function Header(props) {
  return (
    <header className="header">
      <Link to="/" className="logo">
        Marvel
        <span className="sub-logo">information portal</span>
      </Link>
      <nav className="nav">
        <Link to="/characters" className="nav-item">
          Characters
        </Link>
        <Link to="/comics" className="nav-item">
          Comics
        </Link>
        <Link to="/comicsinfo" className="nav-item">
          Comicsinfo
        </Link>
      </nav>
    </header>
  );
}
