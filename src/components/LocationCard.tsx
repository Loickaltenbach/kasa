import useWindowDimensions from "../utils/utils";

interface LocationCardProps {
    title: string,
    picture: string,
    onClick: React.MouseEventHandler<HTMLElement> | undefined,
    id: string
}

const LocationCard = (props: LocationCardProps) => {
    return (
        <article    
            onClick={props.onClick}
            style={{
                cursor: 'pointer',
                backgroundColor: "black", 
                borderRadius: 5, 
                height: useWindowDimensions() <= 480 ? 200 : 250, 
                width: useWindowDimensions() <= 480 ? '82%' : 250, 
                margin: 20,
                backgroundImage: `url(${props.picture})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                display: 'grid'
            }}
        >
            <p 
                style={{
                    textAlign: "start", 
                    paddingLeft: 20, 
                    paddingTop: useWindowDimensions() <= 480 ? 120 : 155,
                    width: "75%", 
                    color: "white"
                }}>
                    {props.title}
            </p>
        </article>
    );
}

export default LocationCard;