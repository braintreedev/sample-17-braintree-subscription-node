# Using the Braintree API in Node to process a subscription payment


This is a demo of the Braintree API using the official Node.js SDK to:

* Poll for existing plans
* Create a customer
* Create a subscription

## Technology

This demo uses

* Node 0.10.31 or higher
* The [Express](http://expressjs.com/) web framework
* The [Braintree Node.js SDK](https://developers.braintreepayments.com/javascript+node/sdk/server/overview)

## Running the demo locally

* Run `npm install` to install all dependencies
* Run `npm start` to start the Express app
* Visit `http://127.0.0.1:3000/` in your browser
* Complete the Dropin form using PayPal or Credit Card:
	* PayPal
		* Any email/password combination will work in Sandbox
	* Credit Card (use the following credentials)
		* Number: `4111 1111 1111 1111`
		* CVV: `123`
		* Expiration date: `11/2020`
* Click Subscribe Now
* You will receive a message that says "Subscription Successful"

## Running the test

* Requirement: [CasperJS](http://casperjs.org/)
* Run `npm test` to start the test

## Useful links

* [The Braintree Node.js SDK](https://developers.braintreepayments.com/javascript+node/sdk/server/overview)
* [Guide for Recurring Billing using Node.js](https://developers.braintreepayments.com/javascript+node/guides/recurring-billing)