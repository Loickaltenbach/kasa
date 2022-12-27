import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import { DropDownButton } from '../components/DropDownbutton';
import { ImageSlider } from '../components/ImageSlider';
import Footer from '../components/Footer';
import { Tags } from '../components/Tags';
import { Host } from '../components/Host';
import { Ratings } from '../components/Ratings';

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
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                    <div>
                        <h3 style={{color: "#FF6060"}}>{location?.title}</h3>
                        <p style={{color: "#FF6060"}}>{location?.location}</p>
                    </div>
                    <Host name={location?.host.name} picture={location?.host.picture} />
                </div>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Tags text={location?.tags} />
                    <div style={{display: 'flex', width: "100%", justifyContent: 'flex-end'}}>
                        <Ratings stars={parseInt(location?.rating)} />
                    </div>
                </div>
            </div>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', height: 400}}>
                <DropDownButton title={'Description'} text={`${location?.description}`} />
                <DropDownButton title={'Equipements'} text={location?.equipments} />
            </div>
            <Footer />
        </div>
    );
}

export default HousingScreen;