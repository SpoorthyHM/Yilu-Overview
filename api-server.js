const restify = require('restify');
const corsMiddleware = require('restify-cors-middleware')
const ip_addr = '127.0.0.1';
const port    =  '8888';

var server = restify.createServer();

server.use(require('restify-plugins').queryParser());


const cors = corsMiddleware({
  preflightMaxAge: 5, //Optional
  origins: ['*']
})

server.pre(cors.preflight);
server.use(cors.actual);

var PATH = '/itenary';
server.get({path : PATH} , getItenaryDetails);

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
            },
        {
            "segment_id": "07f77c9f-7fdf-446b-91d5-52e900f33723",
            "type": "FLIGHT",
            "origin": {
                "type": "AIRPORT",
                "value": "TXL"
            },
            "destination": {
                "type": "AIRPORT",
                "value": "MUC"
            },
            "departure": 1523602800,
            "detail": {
                "boarding": 1523601000,
                "flight_number": "LH2031",
                "gate": "C12",
                "seat": "12C",
                "status" : "Ontime"
            }
        }]}

function getItenaryDetails(req, res , next){
    res.send(200, { itenaryDetails });
}

server.listen(port ,ip_addr, function(){
    console.log('%s listening at %s ', server.name , server.url);
});

