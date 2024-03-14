import React, { useState } from 'react';
import Bones from '../images/bonesburger-icon.png'

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
        <nav>
            <h1>Fluffy</h1>
            <div>
                <button onClick={toggleSideDiv}>
                    <img src={Bones} height="30px" alt="" />
                </button>
                <div className={`sideDiv ${isOpen ? 'open' : ''}`}><p onClick={closeSideDiv} className="closeButton">&times;</p>
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