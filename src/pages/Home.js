import React from 'react';
import './Home.css'
import { Link } from 'react-router-dom'
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Home = () => {
    return (
        <div className="home">

            <div className="home__navbar">
                <div className="home__navbar--left">
                    <Link to="/about">About</Link>
                    <Link to="/store">Store</Link>
                </div>
                <div className="home__navbar--right">
                    <Link to="/gmail">Gmail</Link>
                    <Link to="/images">Images</Link>
                    {<AppsIcon />}
                    {<AccountCircleIcon />}
                </div>
            </div>

            <div className="home__body">

            </div>
        </div>
    );
}

export default Home;
