//require('./package.json')
const travel = (req, res) => {
    pageTitle = process.env.npm_package_description + ' - Travel'
    //res.render('travel', {title: pageTitle}); //stores request 
    res.render('travel', {title: 'Travlr Getaways'}); //stores request
};  

module.exports = {
    travel
}