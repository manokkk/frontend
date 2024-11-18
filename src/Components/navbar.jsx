import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo3.png';
import { Button, Typography } from '@mui/material';
import '../Css/navbar.css';

const Navbar = ({ user, handleLogout }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <div className="navbar">
            {/* Logo Section */}
            <div className="nav-logo">
            <img src={logo} alt="Vulnerability Scanner Logo" className="logo" />
                <Typography variant="h5" component="p" sx={{ fontWeight: 'bold', color: '#fff' }}>
                    Vulnerability Scanner
                </Typography>
            </div>

            {/* Menu Links */}
            <ul className={`nav-menu ${menuOpen ? "open" : ""}`}>
                <li><Link to="/" className="nav-link" onClick={closeMenu}>Home</Link></li>
                <li><Link to="/about" className="nav-link" onClick={closeMenu}>About</Link></li>
                <li><Link to="/contact" className="nav-link" onClick={closeMenu}>Contact</Link></li>
            </ul>

            {/* Login/Logout Button */}
            <div className="auth-button">
                {!user ? (
                    <Link to='https://backend-ri6n.onrender.com/login'>
                        <Button variant="contained" color="primary" sx={{ borderRadius: '20px' }}>
                            Login
                        </Button>
                    </Link>
                ) : (
                    <Button variant="outlined" color="secondary" sx={{ borderRadius: '20px' }} onClick={handleLogout}>
                        Logout
                    </Button>
                )}
            </div>

            {/* Hamburger Menu */}
            <div className="hamburger" onClick={toggleMenu}>
                <span className={menuOpen ? "bar open" : "bar"}></span>
                <span className={menuOpen ? "bar open" : "bar"}></span>
                <span className={menuOpen ? "bar open" : "bar"}></span>
            </div>
        </div>
    );
};

export default Navbar;
