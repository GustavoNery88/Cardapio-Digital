// Navbar.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft } from 'react-bootstrap-icons';

function Navbar() {
    const location = useLocation();

    return (
        <div className="navbar">
            {location.pathname !== '/' && (
                <Link to={'/'}>
                    <ArrowLeft className="seta-voltar" />
                </Link>
            )}
        </div>
    );
}

export default Navbar;
