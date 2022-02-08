import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/projects">Projekty</Link>
        </li>
        <li>
          <Link to="/material-cards">Karty materiałowe</Link>
        </li>
        <li>
          <Link to="/contractors">Podwykonawcy</Link>
        </li>
        <li>
          <Link to="/inspectors">Inspektorzy</Link>
        </li>
        <li>
          <Link to="/engineers">Inżynierowie</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
