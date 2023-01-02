import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import useWindowDimensions from '../utils/utils';

interface HeaderProps {
    routes?: string[],
    active?: string,
}

const Header = (props:HeaderProps) => {

    const link = (route: string) => "/" + `${route.replace(" ", "").toString().trim().toLowerCase()}`

    return (
        <div 
            style={{
                display: 'flex', 
                width:'100%', 
                flexDirection: 'row', 
                paddingTop: 30, 
                justifyContent: 'space-between',
                alignItems: 'center'
            }}
        >
            <img 
                src={logo} 
                alt='logo' 
                width={useWindowDimensions() <= 480 ? 80 : 150} 
                height={useWindowDimensions() <= 480 ? 30 : 50} 
                style={{paddingLeft: useWindowDimensions() <= 480 ? 20 : 50}} 
            />
            <ul 
                style={{
                    listStyle: "none",
                    display: 'flex', 
                    flexDirection: 'row', 
                    paddingRight: useWindowDimensions() <= 480 ? 0 : 30
                }} 
            >
                {props.routes?.map((route) => {
                    return(
                        <NavLink key={route} style={{textDecoration: link(route) === props.active ? "underline" : "none", paddingRight: useWindowDimensions() <= 480 ? 20 : 30, color: "#FF6060"}} to={link(route)}>
                            <li>{route}</li>
                        </NavLink>
                    )
                })}
            </ul>
        </div>
    );
}

export default Header;