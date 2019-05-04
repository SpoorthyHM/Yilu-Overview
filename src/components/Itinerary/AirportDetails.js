import React from 'react';

const airportDetails =(props) =>{
    const details = props.segment;
    let statusStyle = 'Green';
    if(details.detail.status === "Busy") {
        statusStyle =  {
            color: 'orange'
          };
    }
    return (
        <div>
            <p>{details.origin.value} {details.origin.type}</p>
            <p>{details.detail.terminal}<span style={statusStyle} className="status">{details.detail.status}</span></p>
        </div>
    )
}

export default airportDetails;