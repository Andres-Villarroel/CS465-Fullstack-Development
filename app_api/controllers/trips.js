const mongoose = require('mongoose');
const model = mongoose.model('trips');

//GET: /trips - lists all the trips
const tripsList = async(req, res) => {
    model.find({})
    .exec((err,trips) => {  //passing an error object and a list of trips
        if(!trips){ //if 'not trips', in other words, if trips is empty... 
            return res
            .status(404)    //...return a 'res'ponse with an http status code of 404...
            .json({"message": "trip not found"});   //... and a json message of 'trip not found'
        } else if(err){ //else if an error is returned from mongoose...
            return res
            .status(404)    //return error code 404...
            .json(err); //...and return json error message
        } else {
            return res.status(200).json(trips);
        }
    });
};

//GET: /trips/:tripCode - returns a single trip
const tripsFindCode = async (req, res) => {
    model
        .find({ 'code': req.params.tripCode })
        .exec((err, trip) => {
            if (!trip) {
                return res
                    .status(404)
                    .json({"message": "trip not found"});
            } else if (err){
                return res.status(404)
                .json(err);
            } else {
                return res
                .status(200)
                .json(trip);
            }
        });
};

module.exports = {
    tripsList,
    tripsFindCode
};