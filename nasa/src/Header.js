import React from 'react';
import logo from './Image/logo.png'

const Header = () => {
    return ( 
        <header className="head">
            <img src={ logo } alt="logo"/>
            <h1 className='headings'>National Aeronautics and Space Administration</h1>
        </header>
     );
}
 
export default Header;