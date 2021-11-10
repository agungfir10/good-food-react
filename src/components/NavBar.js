import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-too px-4">
      <Link className="navbar-brand text-white" to="/">
        Good Food
      </Link>
    </nav>
  );
}
export default NavBar;
