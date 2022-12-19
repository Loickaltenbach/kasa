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
                marginLeft: 50, 
                marginRight: 55,
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden",
                position: "relative",
                height: 250,
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
                        fontSize: 40,
                        color: "white",
                        textAlign: "center",
                        position: "absolute",
                        top: 0,
                        bottom: 0,
                        left: 0,
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