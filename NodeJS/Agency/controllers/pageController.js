const Image = require('../models/Image');

const aboutView = (req, res) => {
    const params = {
        header : 'PCAT',
        links : {
            
        }
    };
    res.render('about', {

    });
};

const contactView = (req, res) => {
    res.render('contact', {});
};

const photoView = (req, res) => {
    res.render('photo', {});
};

module.exports = {
    aboutView,
    contactView,
    photoView
};