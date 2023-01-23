import logoFooter from '../assets/logoFooter.png';
import useWindowDimensions from '../utils/utils';

const Footer = () => {
    return (
        <div 
            style={{
                display: "flex",
                paddingTop: 20,
                height: 100,
                backgroundColor: "black",
                justifyContent: "center"
            }}
        >
            <div>
                <img src={logoFooter} width={100} height={35} />
                <p style={{color: "white", textAlign: "center", fontSize: useWindowDimensions().width <= 480 ? 12 : 16}}>© 2020 Kasa. All rights reserved</p>
            </div>
        </div>
    );
}

export default Footer;