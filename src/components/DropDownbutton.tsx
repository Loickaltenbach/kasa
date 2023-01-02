import React from "react"
import downArrow from "../assets/arrowDown.png"
import upArrow from "../assets/arrowUp.png"
import useWindowDimensions from "../utils/utils";

interface DropDownButtonProps {
    title: string,
    text: string | string[],
}

export const DropDownButton = (props: DropDownButtonProps) => {
    const [open, setOpen] = React.useState(false);
    const formattedText = () => {
        if(typeof props.text !== 'string') {
            return props.text.toString().split(',')
        } else {
            return [props.text]
        }
    }

    return(
        <div style={{width: '100%', marginTop: 10, marginBottom: 10}}>
            <div
                onClick={() => setOpen(!open)}
                style={{
                    cursor: 'pointer',
                    display: 'flex', 
                    flexDirection: 'row', 
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    borderRadius: 5, 
                    backgroundColor: '#FF6060',
                    width: useWindowDimensions() <= 480 ? '97%' : '98%',
                    height: 50
                }}
            >
                <p style={{color: 'white', paddingLeft: 20, margin: 0}}>{props.title}</p>
                <img src={!open ? downArrow : upArrow} height={30} width={30} style={{paddingRight: 10}} />
            </div>
            <div style={{backgroundColor: '#F7F7F7', display: open ? 'table' : 'none', width: useWindowDimensions() <= 480 ? '90%' : '95%', padding: 10, borderRadius: 5}}>
                {formattedText().map((text) => <p style={{color: "#FF6060"}} key={text}>{text}</p>)}
            </div>
        </div>
    )
}