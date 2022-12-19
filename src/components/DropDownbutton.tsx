import React from "react"
import downArrow from "../assets/arrowDown.png"
import upArrow from "../assets/arrowUp.png"

interface DropDownButtonProps {
    title: string,
    text: string | string[],
}

export const DropDownButton = (props: DropDownButtonProps) => {
    const [open, setOpen] = React.useState(false);
    const formattedText = () => {
        if(typeof props.text !== 'string') {
            return <p style={{color: '#FF6060'}}>{props.text.toString().replaceAll(",", "\n")}</p>
        } else {
            return <p style={{color: '#FF6060'}}>{props.text}</p>
        }
    }

    return(
        <div style={{margin: 50}}>
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
                    height: 50,
                    minWidth: 500,
                    paddingLeft: 10,
                    paddingRight: 10
                }}
            >
                <p style={{color: 'white', padding: 0, margin: 0}}>{props.title}</p>
                <img src={!open ? downArrow : upArrow} height={30} width={30} color={'white'} />
            </div>
            <div style={{backgroundColor: '#F7F7F7', display: open ? 'table' : 'none', padding: 10, borderRadius: 5, width: 500}}>
                {formattedText()}
            </div>
        </div>
    )
}