const index = (req, res) => {
    res.render('index', {title: 'Travlr Getaways'}); //stores request 
};  

module.exports = {
    index
}