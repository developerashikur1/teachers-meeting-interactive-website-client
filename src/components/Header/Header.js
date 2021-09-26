import React from 'react';
import './Header.css';

// header Component
const Header = () => {
    return (

        // Header Elements
        <div className="header-container">
            <h1>Teachers Discussion Meeting</h1>
            <p>This is a teachers Meeting. Here every Teachers are principal of different college. They All are BSC graduates.<br/>We meeting here to planning about college study rules.</p>
            <h2>Total Budget for Meeting: <span>150 Million USD</span></h2>
        </div>
    );
};

export default Header;