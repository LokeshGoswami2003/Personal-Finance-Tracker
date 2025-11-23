import React from 'react';
import './Header.css';

const Header = () => {
    function handleLogout() {
        alert("Logged out successfully!");
    }
  return (
    <div className='navbar'>
        <p className='logo'>Financely</p>
        <p className='logo link' onClick={handleLogout}>Logout</p>
    </div>
  )
}

export default Header;