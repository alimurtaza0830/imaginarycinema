import React from "react";
import { Link } from 'react-router-dom'

const Header = () => (
    <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-3">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">Imaginary Cinema</Link>
            </div>
        </nav>
    </>
    )

export default Header;
