import React from 'react';
import AirportDetails from './AirportDetails';
import FlightDetails from './FlightDetails';

const itinerary = (props) => {
    var time = null;
    var itenarydetails = [];
    if(props.details) {

        itenarydetails = props.details.segments.map((segment) => {
            time = new Date( segment.departure *1000).toLocaleString().split(",")[1];
            let bodyContent = '';
            let bodyStyle = '';
            let active = "dot hollow-dot";
            if(segment.type === 'GROUND') {
                bodyContent = `Pick up from
                                 ${segment.origin.value}`;
                bodyStyle = 'itenary card-body bg-primary';
                active= "dot active-dot";
            }

            if(segment.type === 'AIRPORT') {
                bodyContent = (<AirportDetails segment={segment}/>)
                bodyStyle = 'itenary card-body bg-info';
            }

            if(segment.type === 'FLIGHT') {
                bodyContent = (<FlightDetails segment={segment}/>)
                bodyStyle = 'itenary card';
            }

            return (
                <div key={segment.segment_id} className="Itenary">
                    <p><span className={active}></span><span >{time}</span></p>
                    <div className={bodyStyle}>
                        {bodyContent}
                    </div>
                </div>
            )
        })
       
    }
   
    return (
        <React.Fragment>
            {itenarydetails}
        </React.Fragment>
    )
}

export default itinerary;