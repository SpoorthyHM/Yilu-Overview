import React from 'react';

const flightDetails =(props) =>{
    const details = props.segment;
    let flightNumber = details.detail.flight_number;
    let boardingTime =  new Date( details.detail.boarding *1000).toLocaleString().split(",")[1];
    let origin = details.origin.value;
    let destination = details.destination.value;
    let statusStyle = {};
    if(details.detail.status === 'Ontime') {
        statusStyle = {
            backgroundColor: 'green'
        };
    }
    return (
        <React.Fragment>
            <div className="card-header bg-info text-white">
                <p>{flightNumber}<span className="status">{boardingTime}</span></p>
            </div>
            <div className="card-body">
                <p>{origin}
                    <span className="status">{destination}</span>
                </p>
            </div>
            <div className="card-footer bg-light">
                <p><span>Gate: {details.detail.gate}</span>
                    <span style={{marginLeft: '10px'}}>Seat: {details.detail.seat}</span>
                    <span style={statusStyle} className="status">{details.detail.status}</span>
                </p>
            </div>
        </React.Fragment>
    )
}

export default flightDetails;