const request = require('request');
const apiOptions = {
    server: 'http://localhost:3000',
};

/* render travel list view*/
const renderTravelList = (rec, res, responseBody) => {
    let message = null;
    let pageTitle = process.env.npm_package_description + ' - Travel';

    //input validation
    if (!(responseBody instanceof Array)) {
        message = 'API lookup error';
        responseBody = [];
    } else {
        if (!responseBody.length) {     //if responseBody length has no length or is empty...
            message = 'No trips exist in database!' //...set the message accordingly
        }
    }
    res.render('travel', {
        title: pageTitle,
        trips: responseBody,
        message,
    });
};

/* GET travel list view*/
const travelList = (req, res) => {
    const path = '/api/trips';  //period before first '/' caused the big error for during module 5 that prompted an email to instructor
    const requestOptions = {
        url: `${apiOptions.server}${path}`,
        method: 'GET',
        json: {},
    };

    console.info('>> travelController.travelList calling ' + requestOptions.url);

    request(
        
        requestOptions,
        (err, { statusCode }, body) => {
            if (err) {
                console.error(err);
            }
            renderTravelList(req, res, body);
        }
    )
}

module.exports = {
    travelList
};

/*  OLD CODE    
//require('./package.json')
const travel = (req, res) => {
    pageTitle = process.env.npm_package_description + ' - Travel'
    //res.render('travel', {title: pageTitle}); //stores request 
    res.render('travel', {title: 'Travlr Getaways', trips}); //stores request
};  

module.exports = {
    travel
}
*/