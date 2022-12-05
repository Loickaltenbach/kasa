import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';

const AboutScreen = () => {
    const location = useLocation();
    return (
        <div>
            <Header routes={['Accueil', 'A Propos']} active={location.pathname} />
        </div>
    );
}

export default AboutScreen;