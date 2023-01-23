import React from "react"
import { ArrowDown, ArrowUp } from "../utils/icons";

export const DropDownButton = (props) => {
    const [open, setOpen] = React.useState(false);
    const formattedText = () => {
        if(typeof props.text !== 'string') {
            return props.text.toString().split(',')
        } else {
            return [props.text]
        }
    }

    return(
        <div style={{width: '100%', marginTop: 10, marginBottom: 10, height: '100%'}}>
            <div
                onClick={() => setOpen(!open)}
                style={{
                    cursor: 'pointer',
                    display: 'flex', 
                    flexDirection: 'row', 
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    maxWidth: props.containerWidth,
                    borderRadius: 5, 
                    backgroundColor: '#FF6060',
                    height: 50
                }}
            >
                <p style={{color: 'white', paddingLeft: 20, margin: 0}}>{props.title}</p>
                {!open ? <ArrowDown height={36} width={36} fill={"white"} /> : <ArrowUp height={36} width={36} fill={"white"} />}
            </div>
            <div style={{backgroundColor: '#F7F7F7', display: open ? 'table' : 'none', padding: 10, width: props.contentWidth, borderRadius: 5}}>
                {formattedText().map((text) => <p style={{color: "#FF6060"}} key={text}>{text}</p>)}
            </div>
        </div>
    )
}