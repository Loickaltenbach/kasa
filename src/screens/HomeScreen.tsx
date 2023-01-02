import { useLocation, useNavigate } from 'react-router-dom';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Header from '../components/Header';
import LocationCard from '../components/LocationCard';
import data from "../data.json";
import banniere from "../assets/banniere.png";
import useWindowDimensions from '../utils/utils';

const HomeScreen = () => {
    const locations = data.locations;
    const url = useLocation();
    const navigate = useNavigate();
    return (
        <div>
            <Header 
                routes={['Accueil', 'A Propos']} 
                active={url.pathname} 
            />
            <Banner image={banniere} type='default' />
            <div 
                style={{
                    display: 'flex',
                    flexWrap: "wrap",
                    justifyContent: "center",
                    backgroundColor: useWindowDimensions().width <= 480 ? "white" : "#F7F7F7", 
                    borderRadius: 25, 
                    margin: useWindowDimensions().width <= 480 ? 20 : 50
                }}
            >
                {locations.map((location) => {
                    return(
                        <LocationCard 
                            key={location.id} 
                            onClick={() => navigate('/details', 
                                { state: {
                                    data: location
                                }}
                            )} 
                            id={location.id} 
                            picture={location.pictures[0]} 
                            title={location.title} 
                        />
                    )
                })}
            </div>
            <Footer />
        </div>
    );
}

export default HomeScreen;