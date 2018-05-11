module.exports = (req, res, next) => {
    if(!req.user) {
        return res.status(401).send({ error: 'you must log in!'});
    }

//if there is no user, send error response
//otherwise let user move on to next 
    next();
};