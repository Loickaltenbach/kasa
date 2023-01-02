import useWindowDimensions from "../utils/utils"

interface HostProps {
    name: string,
    picture: string
}

export const Host = (props: HostProps) => {
    return (
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
            <div style={{marginRight: 25}}>
                <p style={{color: "#FF6060", fontSize: useWindowDimensions().width <= 480 ? 14 : 18}}>{props.name.split(" ")[0]}</p>
                <p style={{color: "#FF6060", fontSize: useWindowDimensions().width <= 480 ? 14 : 18}}>{props.name.split(" ")[1]}</p>
            </div>
            <img src={props.picture} style={{borderRadius: 100, width: 50, height: 50}} />
        </div>
    )
}