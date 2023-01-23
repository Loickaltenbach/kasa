export const ArrowDown = (props) => {
    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', paddingRight: 15, paddingBottom: 10}}>
           <svg xmlns="http://www.w3.org/2000/svg" height={props.height} width={props.width} fill={props.fill}>
                <path d="m24 30.75-12-12 2.15-2.15L24 26.5l9.85-9.85L36 18.8Z"/>
            </svg> 
        </div>
    )
    
}

export const ArrowUp = (props) => {
    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', paddingRight: 15, paddingBottom: 10}}>
            <svg xmlns="http://www.w3.org/2000/svg" height={props.height} width={props.width} fill={props.fill}>
                <path d="M14.15 30.75 12 28.6l12-12 12 11.95-2.15 2.15L24 20.85Z"/>
            </svg>
        </div>
    )
}

export const ArrowRight = (props) => {
    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', paddingRight: 15, paddingBottom: 10}}>
            <svg xmlns="http://www.w3.org/2000/svg" height={props.height} width={props.width} fill={props.fill}>
                <path d="m15.2 43.9-2.8-2.85L29.55 23.9 12.4 6.75l2.8-2.85 20 20Z"/>
            </svg>
        </div>
    )
}

export const ArrowLeft = (props) => {
    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', paddingRight: 15, paddingBottom: 10}}>
            <svg xmlns="http://www.w3.org/2000/svg" height={props.height} width={props.width} fill={props.fill}>
                <path d="M20 44 0 24 20 4l2.8 2.85L5.65 24 22.8 41.15Z"/>
            </svg>
        </div>
    )
}