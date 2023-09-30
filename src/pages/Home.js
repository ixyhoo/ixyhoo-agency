import React from 'react';
import Navigation from '../components/Navigation';
import Mouse from '../components/Mouse';
import SocialNetwork from '../components/SocialNetwork';

const Home = () => {
    return (
        <div>
            <Mouse />
            <Navigation />
            <SocialNetwork />
            <div className="home-main">
                <div className="main-content">
                    <h1>IxyhOO Agency</h1>
                </div>
            </div>
           
        </div>
    );
};

export default Home;