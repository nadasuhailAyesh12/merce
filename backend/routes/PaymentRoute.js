const { paymentController } = require('../controllers/PaymentController')

const paymentRouter = require('express').Router()

paymentRouter.get('/APIKey', paymentController.sendStripeAPIKey)
paymentRouter.post('/process', paymentController.processPayment)
paymentRouter.post('/sendEmail', paymentController.sendConfirmationOrderEmail)
module.exports = paymentRouter