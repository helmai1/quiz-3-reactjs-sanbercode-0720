import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {
    return(
        <React.Fragment>
            <header>
                <img id="logo" src="./img/logo.png" width="200px" />
            <nav>
                <ul>
                    <li><a><Link to="/home">Home </Link></a></li>
                    <li><a><Link to="/about">About </Link></a></li>
                    <li><a><Link to="/movie">Movie</Link></a></li>
                </ul>
            </nav>
            </header>
      </React.Fragment>
    )
}

export default Navbar;