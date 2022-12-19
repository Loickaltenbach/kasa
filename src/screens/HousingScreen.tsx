import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import { DropDownButton } from '../components/DropDownbutton';
import { ImageSlider } from '../components/ImageSlider';
import Footer from '../components/Footer';

const HousingScreen = () => {
    const url = useLocation();
    const location = url.state.data;

    return (
        <div>
            <Header 
                routes={['Accueil', 'A Propos']} 
                active={url.pathname} 
            />
            <ImageSlider slides={location?.pictures} />
            <div style={{marginLeft: 50, marginRight: 55}}>
                <h3>{location?.title}</h3>
                <p>{location?.location}</p>
            </div>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
                <DropDownButton title={'Description'} text={`${location?.description}`} />
                <DropDownButton title={'Equipements'} text={location?.equipments} />
            </div>
        </div>
    );
}

export default HousingScreen;