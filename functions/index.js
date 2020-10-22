/* eslint-disable camelcase */
const functions = require('firebase-functions');

const { secret_key, customer_id } = functions.config().stripe;

const stripe = require('stripe')(secret_key);

exports.createPaymentIntent = functions.https.onCall(async (data) => {
    try {
        const { amount } = data;
        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency: 'usd',
            payment_method_types: ['card'],
            customer: customer_id,
            setup_future_usage: 'off_session',
        });
        return paymentIntent.client_secret;
    } catch (error) {
        functions.logger.error('Error creating a setup intent', error);
        throw new functions.https.HttpsError('internal', error.message);
    }
});

exports.createSetupIntent = functions.https.onCall(async () => {
    try {
        const setupIntent = await stripe.setupIntents.create({
            payment_method_types: ['card'],
            customer: customer_id,
        });
        return setupIntent.client_secret;
    } catch (error) {
        functions.logger.error('Error creating a setup intent', error);
        throw new functions.https.HttpsError('internal', error.message);
    }
});

exports.getCustomerCards = functions.https.onCall(async () => {
    try {
        const res = await stripe.paymentMethods.list({
            customer: customer_id,
            type: 'card',
        });
        return res.data.map((card) => {
            const {
                id,
                card: { brand, exp_month, exp_year, last4 },
            } = card;
            return {
                id,
                brand,
                last4,
                expMonth: exp_month,
                expYear: exp_year,
            };
        });
    } catch (error) {
        functions.logger.error('Error fetching customer cards', error);
        throw new functions.https.HttpsError('internal', error.message);
    }
});

exports.removeCard = functions.https.onCall(async (data) => {
    const { paymentMethod } = data;
    try {
        const removedPaymentMethod = await stripe.paymentMethods.detach(paymentMethod);
        return removedPaymentMethod;
    } catch (error) {
        functions.logger.error('Error removing a payment method', error);
        throw new functions.https.HttpsError('internal', error.message);
    }
});
