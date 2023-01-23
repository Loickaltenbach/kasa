import useWindowDimensions from "../utils/utils";

const LocationCard = (props) => {

    const height = useWindowDimensions().width <= 480 ? 200 : 250;
    const width = useWindowDimensions().width <= 480 ? '100%' : 250;

    return (
        <article    
            onClick={props.onClick}
            style={{
                cursor: 'pointer',
                backgroundColor: "black", 
                borderRadius: 5, 
                height: useWindowDimensions().width <= 480 ? 200 : 250, 
                width: useWindowDimensions().width <= 480 ? '100%' : 250, 
                margin: 20,
                backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(0, 0, 0, 0.5)), url(${props.picture})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: `${width}, ${height}`,
                display: 'grid',
            }}
        >
            <p 
                style={{
                    textAlign: "start", 
                    paddingLeft: 20, 
                    paddingTop: useWindowDimensions().width <= 480 ? 120 : 155,
                    width: "75%", 
                    color: "white"
                }}>
                    {props.title}
            </p>
        </article>
    );
}

export default LocationCard;