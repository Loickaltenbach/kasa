import useWindowDimensions from "../utils/utils"

export const Tags = (props) => {
    return (
        <div style={{display: "flex", flexDirection: "row", justifyContent: 'flex-start', alignItems: "center"}}>
            {props.text.map((t) => {
                return (
                    <div key={t} style={{width: 150, paddingLeft: 15, paddingRight: 15, marginRight: 15, height: 30, backgroundColor: "#FF6060", borderRadius: useWindowDimensions().width <= 480 ? 5 : 15, display: "flex", justifyContent: 'center', alignItems: "center"}}>
                        <p style={{color: "white", fontSize: useWindowDimensions().width <= 480 ? 9 : 14}} key={t}>{t}</p>
                    </div>
                )
                    
            })}
        </div>
    )
}