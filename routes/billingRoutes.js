const keys = require('../config/keys');
// https://www.npmjs.com/package/stripe
const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin');

const CENTS_PER_DOLLAR = 100;
const DOLLAR_AMOUNT    = 5;
module.exports = app => {
    app.post('/api/stripe', requireLogin, async (req, res) => {


        const charge = await stripe.charges.create({
            amount: CENTS_PER_DOLLAR * DOLLAR_AMOUNT,
            currency: 'usd',
            description: '$5 for 5 credits',
            source: req.body.id
        });
       req.user.credits += 5;
       const user = await req.user.save();
       res.send(user);
    });
};
