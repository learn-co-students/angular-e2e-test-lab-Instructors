var path = require('path');

describe('angularjs homepage todo list', function() {
	it('should add a new contact', function() {
		browser.get('http://localhost:8080');

		element(by.css('.button')).click();

		var contacts = element.all(by.repeater('contact in vm.contacts'));
		expect(contacts.count()).toEqual(4);
	});

	it('second contacts name should be Tim', function() {
		browser.get('http://localhost:8080');

		var contacts = element.all(by.repeater('contact in vm.contacts'));
		var secondContactName = contacts.get(1).element(by.css('h4 input')).getAttribute('value');

		expect(secondContactName).toEqual('Tim');
	});

	it('second contacts phone number is 3934203242', function() {
		browser.get('http://localhost:8080');

		var contacts = element.all(by.repeater('contact in vm.contacts'));
		var secondContactNumber = contacts.get(1).element(by.css('h6 input')).getAttribute('value');

		expect(secondContactNumber).toEqual('3934203242');

	});
});
