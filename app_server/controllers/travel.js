const fs = require('fs');
const trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));

//require('./package.json')
const travel = (req, res) => {
    pageTitle = process.env.npm_package_description + ' - Travel'
    //res.render('travel', {title: pageTitle}); //stores request 
    res.render('travel', {title: 'Travlr Getaways', trips}); //stores request
};  

module.exports = {
    travel
}