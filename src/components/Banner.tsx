import useWindowDimensions from "../utils/utils";

interface BannerProps {
    type: string,
    image: string
}

const Banner = (props:BannerProps) => {
    return (
        <article 
            style={{
                marginTop: 50,
                borderRadius: 25, 
                backgroundColor: "black",
                marginLeft: useWindowDimensions().width <= 480 ? 20 : 50, 
                marginRight: useWindowDimensions().width <= 480 ? 20 : 55,
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden",
                position: "relative",
                height: useWindowDimensions().width <= 480 ? 150 : 250,
                minHeight: useWindowDimensions().width <= 480 ? 150 : 250,
            }}
        >
            <img
                src={props.image} 
                alt='banniere'
                style={{
                    opacity: 0.5, 
                    flexShrink: 0,
                    minWidth: "100%",
                    minHeight: "100%"
                }} 
            />
            {props.type === 'default' && 
                <p style={{
                        fontSize: useWindowDimensions().width <= 480 ? 20 : 40,
                        color: "white",
                        textAlign: useWindowDimensions().width <= 480 ? "left" : "center",
                        position: "absolute",
                        top: 0,
                        bottom: 0,
                        left: useWindowDimensions().width <= 480 ? 20 : 0,
                        right: 0,
                        height: "fit-content",
                        margin: "auto",
                    }}
                >
                    Chez vous, partout et ailleurs
                </p>
            }
        </article>
    );
}

export default Banner;