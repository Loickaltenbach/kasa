import React from 'react';
import { useLocation } from 'react-router-dom';
import Banner from '../components/Banner';
import Header from '../components/Header';
import LocationCard from '../components/LocationCard';

interface HomeScreenProps {
    locations: any[]
}

const HomeScreen = (props: HomeScreenProps) => {
    const url = useLocation();
    return (
        <div>
            <Header 
                routes={['Accueil', 'A Propos']} 
                active={url.pathname} 
            />
            <Banner />
            <div 
                style={{
                    display: 'flex',
                    flexWrap: "wrap",
                    justifyContent: "center",
                    backgroundColor: "#F7F7F7", 
                    borderRadius: 25, 
                    margin: 50
                }}
            >
                {props.locations.map((location) => {
                    return(
                        <LocationCard title={location.title} />
                    )
                })}
            </div>
        </div>
    );
}

export default HomeScreen;