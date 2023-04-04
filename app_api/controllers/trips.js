const { model } = require("mongoose"); //new
const mongoose = require('mongoose');
const Model = mongoose.model('trips');

//GET: /trips - lists all the trips
const tripsList = async(req, res) => {
    Model.find({}).exec((err,trips) => {  //passing an error object and a list of trips
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

const tripsFindCode = async (req, res) => {
    Model
        .find({ code: req.params.tripCode })
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


const tripsAddTrip = async (req, res) => {
    Model.create(
    {
        code: req.body.code,
        name: req.body.name,
        length: req.body.length,
        start: req.body.start,
        resort: req.body.resort,
        perPerson: req.body.perPerson,
        image: req.body.image,
        description: req.body.description
    },
    (err, trip) => {
        if (err) {
            return res
            .status(400)
            .json(err);
        } else {
            return res
            .status(201)
            .json(trip);
        }
    }
    );
};

const tripsUpdateTrip = async (req, res) => {
    console.log(req.body);
    Model
        .findOneAndUpdate({ code: req.params.tripCode }, {
            code: req.body.code,
            name: req.body.name,
            length: req.body.length,
            start: req.body.start,
            resort: req.body.resort,
            perPerson: req.body.perPerson,
            image: req.body.image,
            description: req.body.description
        }, 
        { new: true }
        )
        .then((trip) => {
            if (!trip) {
                return res
                    .status(404)
                    .send({
                        message: "Trip not found with code "
                            + req.params.tripCode
                    });
            }
            res.send(trip);
        })
        .catch(err => {
            if (err.kind === 'ObjectId') {
                return res
                    .status(404)
                    .send({
                        message: "Trip not found with code "
                            + req.params.tripCode
                    });
            }
            return res
                .status(500) // server error
                .json(err);
        });
};

module.exports = {
    tripsList,
    tripsFindCode,
    tripsAddTrip,
    tripsUpdateTrip
};

