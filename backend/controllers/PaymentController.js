const sendEmail = require("../helpers/SendEmail");

const { api_secret, api_key } = require("../config/enviroment").stripeConfig;
const stripe = require("stripe")(api_secret);

const processPayment = async (req, res, next) => {
    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: req.body.amount,
            currency: "usd",
            metadata: { integration_check: "accept_a_payment" },
        });
        res.status(200).json({
            success: true,
            client_secret: paymentIntent.client_secret,
        });
    } catch (error) {
        return next(error);
    }
};

const sendStripeAPIKey = async (req, res, next) => {
    try {
        res.status(200).json({
            success: true,
            stripeAPIKey: api_key,
        });
    } catch (error) {
        return next(error);
    }
};

const sendConfirmationOrderEmail = async (req, res, next) => {
    try {
        const { orderID, orderDate, orderItems, totalPrice, email } = req.body;

        await sendEmail({
            email,
            subject: "Order Confirmation",
            message: "Thank you for your order!",
            html: `
   <h1>Dear Customer,</h1>
      <p>Thank you for your order. Your order has been successfully processed.</p>
   <p>Order Details:</p>
     <ul>
      <li> ${orderID ? `Order Number ${orderID}` : ""}</li>
     <li>Order Date: ${orderDate}</li>
     <li>Total Amount: $${totalPrice.toFixed(2)}</li>
    </ul>
    <p>Order Items:</p>
    <ul>
      ${orderItems
                    .map(
                        (item) => `
      <li>
         ${item.name} (Quantity: ${item.quantity}, Price: $${(
                                item.price * item.quantity
                            ).toFixed(2)})
       </li>
     `
                    )
                    .join("")}
   </ul>
   <p>If you have any questions or need assistance, please don't hesitate to contact us at girlsshoply@gmail.com.</p>
   <p>Thank you for choosing our service!</p>
  `,
        });
        res.status(200).json({
            success: true,
            message: `Confirmation order email sent to this email ${email}`,
        });
    } catch (error) {
        return next(error);
    }
};

const paymentController = {
    processPayment,
    sendStripeAPIKey,
    sendConfirmationOrderEmail,
};
module.exports = { paymentController };
