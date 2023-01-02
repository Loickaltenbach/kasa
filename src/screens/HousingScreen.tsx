import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import { DropDownButton } from '../components/DropDownbutton';
import { ImageSlider } from '../components/ImageSlider';
import Footer from '../components/Footer';
import { Tags } from '../components/Tags';
import { Host } from '../components/Host';
import { Ratings } from '../components/Ratings';
import useWindowDimensions from '../utils/utils';

const HousingScreen = () => {
    const url = useLocation();
    const location = url.state.data;

    return (
        <div>
            <Header 
                routes={['Accueil', 'A Propos']} 
                active={url.pathname} 
            />
            <ImageSlider isMobile={useWindowDimensions() <= 480} slides={location?.pictures} />
            <div style={{marginLeft: useWindowDimensions() <= 480 ? 20 : 50, marginRight: useWindowDimensions() <= 480 ? 25 : 55}}>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                    <div>
                        <h3 style={{color: "#FF6060"}}>{location?.title}</h3>
                        <p style={{color: "#FF6060"}}>{location?.location}</p>
                    </div>
                    {!(useWindowDimensions() <= 480) && <Host name={location?.host.name} picture={location?.host.picture} />}
                </div>
                <div style={{display: 'flex', flexDirection: useWindowDimensions() <= 480 ? 'column' : 'row', justifyContent: 'space-between'}}>
                    <Tags text={location?.tags} />
                    <div style={{display: 'flex', width: "100%", paddingTop: 15, justifyContent: useWindowDimensions() <= 480 ? 'space-between' : 'flex-end', alignItems: 'center'}}>
                        <Ratings stars={parseInt(location?.rating)} />
                        {useWindowDimensions() <= 480 && <Host name={location?.host.name} picture={location?.host.picture} />}
                    </div>
                </div>
            </div>
            <div style={{display: 'flex', margin: useWindowDimensions() <= 480 ? 20 : 50, flexDirection: useWindowDimensions() <= 480 ? 'column' : 'row', justifyContent: 'space-between'}}>
                <DropDownButton title={'Description'} text={`${location?.description}`} />
                <DropDownButton title={'Equipements'} text={location?.equipments} />
            </div>
            <Footer />
        </div>
    );
}

export default HousingScreen;