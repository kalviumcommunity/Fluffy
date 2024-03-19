// Navbar.jsx
import React, { useState } from 'react';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSideDiv = () => {
        setIsOpen(!isOpen);
    };

    const closeSideDiv = () => {
        setIsOpen(false);
    };

    return (
        <>
            <nav style={{ position: 'sticky', top: 0, padding: "5px", display: 'flex', justifyContent: 'space-around', alignItems: 'center', background: "white", color: "black", zIndex: 1 }}>
                <h2 style={{ fontSize: '2rem' }}>Fluffy</h2>
                <div>
                    <button onClick={toggleSideDiv} style={{ border: "none", background: "black", color:"white", textDecoration: "none", cursor: "pointer", padding: "5px 10px", transition: "background-color 0.3s ease", borderRadius: "5px" }} className="navbar-button">
                        Navbar
                    </button>
                    <div className={`sideDiv ${isOpen ? 'open' : ''}`} style={{ position: 'fixed', top: 0, right: isOpen ? '0' : '-55%', width: '30%', height: '100vh', backgroundColor: '#f0f0f0', color: 'black', padding: '40px', transition: 'right 0.4s ease', boxShadow: '-2px 0 5px rgba(0, 0, 0, 0.3)' }}>
                        <p onClick={closeSideDiv} className="closeButton" style={{ cursor: 'pointer' }}>&times;</p>
                        <p>About</p>
                        <p>Sign In</p>
                        <p>Sign Up</p>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
