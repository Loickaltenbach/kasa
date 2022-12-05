import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

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
                justifyContent: 'space-between'
            }}
        >
            <img 
                src={logo} 
                alt='logo' 
                width={150} 
                height={50} 
                style={{paddingLeft: 50}} 
            />
            <ul 
                style={{
                    listStyle: "none",
                    display: 'flex', 
                    flexDirection: 'row', 
                    paddingRight: 30
                }} 
            >
                {props.routes?.map((route) => {
                    return(
                        <NavLink key={route} style={{textDecoration: link(route) === props.active ? "underline" : "none", paddingRight: 30, color: "#FF6060"}} to={link(route)}>
                            <li>{route}</li>
                        </NavLink>
                    )
                })}
            </ul>
        </div>
    );
}

export default Header;