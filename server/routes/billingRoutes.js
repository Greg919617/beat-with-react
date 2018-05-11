const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {
    app.post('/api/stripe', requireLogin, async (req, res) => {  
        const charge = await stripe.charges.create({
            amount: 3000,
            currency: 'usd',
            description: '$30 per 30 credits',
            source: req.body.id
        });
        //after successfully billing
        
        req.user.credits += 30;
        const user = await req.user.save();
        //saves credits to the database^^^

        res.send(user);
    }); 
};

//create acutal charge
//bill cc
//send response back to api
//charge created


//handle token, reach out to stripe api,
//finalize charge
//then update amount of credits.

