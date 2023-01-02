import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import useWindowDimensions from '../utils/utils';

const ErrorScreen = () => {

    const url = useLocation();

    return (
        <div>
            <Header routes={['Accueil', 'A Propos']} active={url.pathname}  />
            <h1 style={{color: "#FF6060", fontSize: useWindowDimensions() <= 480 ? 100 : 260, textAlign: 'center', lineHeight: useWindowDimensions() <= 480 ? '300%' : '75%'}}>404</h1>
            <h3 style={{color: "#FF6060", textAlign: 'center'}}>Oups! La page que vous demandez n'existe pas.</h3>
            <NavLink to={"/accueil"} style={{display: 'flex', justifyContent: 'center', color: "#FF6060", textAlign: 'center', textDecoration: 'underline'}}>Retourner sur la page d’accueil</NavLink>
        </div>
    );
}

export default ErrorScreen;