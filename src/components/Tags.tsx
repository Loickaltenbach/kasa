interface TagsProps {
    text: string[]
}

export const Tags = (props: TagsProps) => {
    return (
        <div style={{display: "flex", flexDirection: "row", justifyContent: 'flex-start', alignItems: "center"}}>
            {props.text.map((t) => {
                return (
                    <div style={{width: 150, paddingLeft: 15, paddingRight: 15, marginRight: 15, height: 30, backgroundColor: "#FF6060", borderRadius: 20, display: "flex", justifyContent: 'center', alignItems: "center"}}>
                        <p style={{color: "white"}} key={t}>{t}</p>
                    </div>
                )
                    
            })}
        </div>
    )
}