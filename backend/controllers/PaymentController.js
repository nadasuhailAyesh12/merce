// const { api_secret } = require("../config/enviroment").stripeConfig;
// const stripe = require("stripe")(api_secret);

const processPayment = async (req, res, next) => {
    //     try {
    //         const paymentIntent = await stripe.paymentIntents.create({
    //             amount: req.body.amount,
    //             currency: 'usd'

    //         });
    //         res.status(200).json({
    //             success: true,
    //             client_secret: paymentIntent.client_secret,
    //         });
    //     } catch (error) {
    //         return next(error);
    //     }
    // };
}

const paymentController = { processPayment };
module.exports = { paymentController };
