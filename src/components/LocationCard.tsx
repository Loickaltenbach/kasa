import React from 'react';

interface LocationCardProps {
    title: string
}

const LocationCard = (props: LocationCardProps) => {
    return (
        <div 
            style={{
                backgroundColor: "#FF6060", 
                borderRadius: 5, 
                height: 250, 
                width: 250, 
                margin: 25
            }}
            >
            <p 
                style={{
                    textAlign: "start", 
                    paddingLeft: 20, 
                    paddingTop: 175,
                    width: "75%", 
                    color: "white"
                }}>
                    {props.title}
            </p>
        </div>
    );
}

export default LocationCard;