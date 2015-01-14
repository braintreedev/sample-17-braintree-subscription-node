casper.test.begin("Subscription Test", function suite(test) {

	casper.start("http://localhost:3000/", function() {
		test.assertHttpStatus(200, 'Page loaded');
	});

	casper.then(function() {
		this.withFrame(0, function() {
			this.waitForSelector("#credit-card-number", function() {
				this.test.comment("Filling in Dropin Form");

				this.sendKeys("#credit-card-number", "4111111111111111");
				this.sendKeys("#expiration", "0120");
				this.sendKeys("#cvv", "123");
			});
		});
	});

	casper.then(function() {
		this.test.comment("Submitting form");
		this.click("#subscribeBtn");
		this.test.comment("Waiting for response from server ...");

		casper.waitForUrl("http://localhost:3000/process", function() {
			test.assertTextExists("successfully", "Subscribed Successfully");
		}, null, 20000);
	});


	casper.run(function() {
		test.done();
	});
});
