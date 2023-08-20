const { paymentController } = require('../controllers/PaymentController')

const paymentRouter = require('express').Router()

paymentRouter.post('/process', paymentController.processPayment)

module.exports = paymentRouter