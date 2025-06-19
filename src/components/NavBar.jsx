import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light px-4">
            <div className="container-fluid">
                <Link className="navbar-brand fw-bold" to="/">Tienda Fluxx</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/category/electronics">Electrónica</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/category/jewelery">Joyería</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/category/men's clothing">Hombres</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/category/women's clothing">Mujeres</Link>
                        </li>
                    </ul>

                    <CartWidget />
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
