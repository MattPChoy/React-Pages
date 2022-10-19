import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (<div>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </nav>
        <p>This is the home page</p>
    </div>);
};

export default Home
