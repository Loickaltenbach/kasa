import { NavLink } from 'react-router-dom';
import logoFooter from '../assets/logoFooter.png';
import useWindowDimensions from '../utils/utils';

const Footer = () => {
    return (
        <div 
            style={{
                position: 'relative',
                bottom: 0,
                display: "flex",
                width: '100%',
                paddingTop: 40,
                backgroundColor: "black",
                alignItems: "center",
                justifyContent: "center"
            }}
        >
            <div>
                <img src={logoFooter} width={100} height={35} />
                <p style={{color: "white", textAlign: "center", fontSize: useWindowDimensions() <= 480 ? 12 : 16}}>© 2020 Kasa. All rights reserved</p>
            </div>
        </div>
    );
}

export default Footer;