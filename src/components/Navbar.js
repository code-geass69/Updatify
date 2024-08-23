import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Marquee from './Marquee'; // Import the Marquee component

import '../styles/Navbar.css';

const NavBar = () => {

    const [isAtTop, setIsAtTop] = useState(true);

    const handleScroll = () => {
        if (window.scrollY === 0) {
            setIsAtTop(true);
        } else {
            setIsAtTop(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg">
                <div className="container-fluid">
                    <Link className="navbar-brand mx-3" style={{ color: 'blue', paddingLeft: '20px' }} to="/"> <strong>Updatify</strong></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-lg-5" style={{ marginLeft: '150px' }}>
                            <li className="nav-item">
                                <Link className="nav-link" to="/business">Business</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/entertainment">Entertainment</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/general">General</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/health">Health</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/science">Science</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link  " to="/sports">Sports</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link  " to="/technology">Technology</Link>
                            </li>
                            <li className="nav-item">
                                <button type="button" className="btn btn-light btn-floating btn-sm mx-5 my-1" onClick={scrollToTop} disabled={isAtTop}>Go to Top</button>
                            </li>
                        </ul>
                    </div>
                </div>

            </nav>
            <Marquee content="Stock Market Update: AAPL +2.5%, MSFT +1.3%, GOOG +0.8%" />

        </div>
    );
}

export default NavBar;
