import React from 'react';
import { shallow, mount } from 'enzyme';
import Itenary from './Itinerary';
import FlightDetails from './FlightDetails';
import AirportDetails from './AirportDetails';

describe('<Itenary />', () => {
    let details = {};
    const itenaryDetails = {
        "itinerary_id": "3dd59474-f467-42bc-8098-3c1695ab362d",
        "traveler": {
            "first_name": "John",
            "middle_name": "C.",
            "last_name": "Doe"
        },
        "origin_iata": "TXL",
        "destination_iata": "MUC",
        "segments": [{
                "segment_id": "452dfb51-0ac6-4274-b740-af6f89bc6116",
                "type": "GROUND",
                "origin": {
                    "value": "Alte Schönhauser Straße 3, 10119 Berlin",
                    "type": "STREET_ADDRESS"
                },
                "departure": 1523596800,
                "destination": {
                "type": "AIRPORT",
                "value": "TXL"
            }
        },
        {
            "segment_id": "39552e6d-6785-4e83-82dc-157a45773b45",
            "type": "AIRPORT",
            "origin": {
            "type": "AIRPORT",
            "value": "TXL"
            },
                "departure": 1523599200,
                "detail": {
                    "busyness_index": 10,
                    "terminal" : "Terminal C",
                    "status" : "Busy"
                }
        }]};

    it('should render correctly with empty props', () => {
        const component = shallow(<Itenary {...details}/>);
        component.setProps(details);
        expect(component).toMatchSnapshot();
    });

    it('should render correctly with props', () => {
        const component = shallow(<Itenary {...itenaryDetails}/>);
        component.setProps(itenaryDetails);
        expect(component).toMatchSnapshot();
      });

      it('should test whether <AirportDetails> is rendered when there is data', () => {
        const component = mount(<Itenary {...itenaryDetails}/>);
        component.setProps({details: itenaryDetails});
        expect(component.find(AirportDetails)).toHaveLength(1);
        expect(component.find(FlightDetails)).toHaveLength(0);
      });
  
})