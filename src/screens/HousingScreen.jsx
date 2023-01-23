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
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: useWindowDimensions().height}}>
            <Header 
                routes={['Accueil', 'A Propos']} 
                active={url.pathname} 
            />
            <ImageSlider isMobile={useWindowDimensions().width <= 480} slides={location?.pictures} />
            <div style={{marginLeft: useWindowDimensions().width <= 480 ? 20 : 50, marginRight: useWindowDimensions().width <= 480 ? 25 : 55}}>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                    <div>
                        <p style={{color: "#FF6060", lineHeight: '50%', fontSize: useWindowDimensions().width <= 480 ? 18 : 22, fontWeight: 'bold'}}>{location?.title}</p>
                        <p style={{color: "#FF6060", lineHeight: '50%', fontSize: useWindowDimensions().width <= 480 ? 14 : 18}}>{location?.location}</p>
                    </div>
                    {useWindowDimensions().width >= 480 && <Host name={location?.host.name} picture={location?.host.picture} />}
                </div>
                <div style={{display: 'flex', flexDirection: useWindowDimensions().width <= 480 ? 'column' : 'row', justifyContent: 'space-between'}}>
                    <Tags text={location?.tags} />
                    <div style={{display: 'flex', width: "100%", paddingTop: 10, justifyContent: useWindowDimensions().width <= 480 ? 'space-between' : 'flex-end', alignItems: 'center'}}>
                        <Ratings stars={parseInt(location?.rating)} />
                        {useWindowDimensions().width <= 480 && <Host name={location?.host.name} picture={location?.host.picture} />}
                    </div>
                </div>
            </div>
            <div style={{display: 'flex', marginRight: useWindowDimensions().width <= 480 ? 20 : 50, marginLeft: useWindowDimensions().width <= 480 ? 20 : 50, flexDirection: useWindowDimensions().width <= 480 ? 'column' : 'row', justifyContent: 'space-between'}}>
                <DropDownButton containerWidth={useWindowDimensions().width <= 480 ? '100%' : 450} contentWidth={useWindowDimensions().width <= 480 ? '95%' : 430} title={'Description'} text={`${location?.description}`} />
                <DropDownButton containerWidth={useWindowDimensions().width <= 480 ? '100%' : 450} contentWidth={useWindowDimensions().width <= 480 ? '95%' : 430} title={'Equipements'} text={location?.equipments} />
            </div>
            <Footer />
        </div>
    );
}

export default HousingScreen;