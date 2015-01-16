# Using the Braintree API in Node to process a subscription payment

[![Build Status](https://travis-ci.org/commercefactory/017-braintree-subscription-node.svg?branch=master)](https://travis-ci.org/commercefactory/017-braintree-subscription-node)

This is an example of the Braintree API using the official Node SDK in Express to set up a subscription.

This branch includes a lot of files for the purpose of testing. To see a simplified example please switch to the [simplified](https://github.com/commercefactory/017-braintree-subscription-node/tree/simplified) branch.

This demo performs the following technical implementations:

* Pulling existing plans from Braintree server
* Creating a new customer
* Processing a subscription

## Technology

This demo uses

* Node 0.10.31 or higher
* The [Express](http://expressjs.com/) web framework
* The [Braintree Node.js SDK](https://developers.braintreepayments.com/javascript+node/sdk/server/overview)

## Running the demo locally

* Run `npm install` to install all dependencies
* Run `npm start` to start the Express app
* Visit `http://127.0.0.1:3000/` in your browser
* Fill in the form using PayPal or a Credit Card:
	* PayPal
		* Email: us-customer@commercefactory.org
		* Password: test1234	
	* Credit Card
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
