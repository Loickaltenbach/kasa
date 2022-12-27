import React from 'react';
import { useLocation } from 'react-router-dom';
import Banner from '../components/Banner';
import { DropDownButton } from '../components/DropDownbutton';
import Footer from '../components/Footer';
import Header from '../components/Header';
import mountains from "../assets/mountains.png";

const AboutScreen = () => {
    const location = useLocation();
    return (
        <div>
            <Header routes={['Accueil', 'A Propos']} active={location.pathname} />
            <Banner image={mountains} type='mountains' />
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <DropDownButton title='Fiabilite' text='Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.'  />
                <DropDownButton title='Respect' text='La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'  />
                <DropDownButton title='Service' text="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."  />
                <DropDownButton title='Responsabilite' text="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."  />
            </div>
            <Footer />
        </div>
    );
}

export default AboutScreen;