import { NavLink } from 'react-router-dom';
import logoFooter from '../assets/logoFooter.png';

const Footer = () => {
    return (
        <div 
            style={{
                display: "flex",
                width: '100%',
                height: '100%',
                paddingTop: 30,
                backgroundColor: "black",
                alignItems: "center",
                justifyContent: "center"
            }}
        >
            <div>
                <img src={logoFooter} width={100} height={35} />
                <p style={{color: "white", textAlign: "center"}}>© 2020 Kasa. All rights reserved</p>
            </div>
        </div>
    );
}

export default Footer;