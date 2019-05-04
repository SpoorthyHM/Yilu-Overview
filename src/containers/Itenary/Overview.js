import React, {Component} from 'react';
import Layout from '../../hoc/Layout/Layout';
import axios from '../../axios-itenary';
import Itinerary from '../../components/Itinerary/Itinerary';

class Overview extends Component {

    state = {
        itenaryDetails: {}
    }

    initItenaryDetails = () => {
        
        axios.get('/itenary')
        .then(response => {
            this.setState({itenaryDetails: response.data});
        })
        .catch(error => {
            console.log('Error');
        });
    }

    componentDidMount() {
        this.initItenaryDetails();
    }
    
    render(){
        var itenary = {};
        if(this.state.itenaryDetails) {
            itenary = this.state.itenaryDetails.itenaryDetails;
        }
        
        return (
            <Layout>
                <div className="card">
                    <div className="card-header bg-primary text-white">Overview</div>
                    <div className="card-body bg-light text-dark">
                        Berlin - Munchen
                                <Itinerary details={itenary}/>
                    </div> 
                </div>                                             
            </Layout>
        );
    }
}

export default Overview;