import React from 'react';
import './Home.css'
import { Link } from 'react-router-dom'
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Search from './Search';

const Home = () => {
    return (
        <div className="home">
            <div className="row">
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
            </div>

            <div className="home__body">
                <div className="home__body--img-container">
                    <img className="home__body--img"
                        src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
                    />
                </div>
                <div className="row">
                    <div className="home__input--container">
                        <Search hideButtons />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
