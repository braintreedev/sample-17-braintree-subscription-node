var express = require('express');
var router = express.Router();
var braintree = require('braintree');

var gateway = braintree.connect({
    environment:  braintree.Environment.Sandbox,
    merchantId:   'ffdqc9fyffn7yn2j',
    publicKey:    'qj65nndbnn6qyjkp',
    privateKey:   'a3de3bb7dddf68ed3c33f4eb6d9579ca'
});

router.get('/', function(req, res) {
  gateway.clientToken.generate({}, function (err, response) {
    var token = response.clientToken;

    var plans = gateway.plan.all(function(err, result) { 
      res.render('index', { token : token, plans: result.plans });
    });
  });
});

router.post('/process', function(req, res) {
  var nonce = req.body.payment_method_nonce;
  var plan = req.body.plan;

  gateway.customer.create({
    paymentMethodNonce: nonce
  }, function (err, result) {
    if (result.success) {
      var token = result.customer.paymentMethods[0].token;

      gateway.subscription.create({
        paymentMethodToken: token,
        planId: plan
      }, function (err, result) {
        res.render('processResult', {result: result});
      });
    }
  });
});

module.exports = router;