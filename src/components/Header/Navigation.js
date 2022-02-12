import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className="nav">
      <ul className="nav-list">
        {/* <li>
          <Link to="/projects">Projekty</Link>
        </li> */}
        <li className="nav-item">
          <Link className="nav-link" to="/material-cards">
            Karty materiałowe
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contractors">
            Podwykonawcy
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/inspectors">
            Inspektorzy
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/engineers">
            Inżynierowie
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
