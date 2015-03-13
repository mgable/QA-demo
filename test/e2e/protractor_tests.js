"use strict";

describe('Scenario Templates', function() {
	beforeEach(
		function(){
			browser.driver.manage().window().setSize(1280, 1024);
			browser.get("http://localhost:9000/#/");
		}
	);

	describe("name field", function(){

		it("should require a name", function(){
			expect(element(by.css('#submitButton')).getAttribute('disabled')).toBeTruthy();
		});	

		it("should require a name of at least 2 characters", function(){
			var inputField = element(by.model("data.name"));
			inputField.sendKeys("x");
			expect(element(by.css('#submitButton')).getAttribute('disabled')).toBeTruthy();
			inputField.sendKeys("x");
			expect(element(by.css('#submitButton')).getAttribute('disabled')).toBeFalsy();
		});	

		it("should prohibit a name over 256 characters", function(){
			var inputField = element(by.model("data.name"));
			inputField.sendKeys("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
			expect(element(by.css('#submitButton')).getAttribute('disabled')).toBeFalsy();
			inputField.sendKeys("x");
			expect(element(by.css('#submitButton')).getAttribute('disabled')).toBeTruthy();
		});	

		it("should prohibit names with \ / ? : * \" > < | characters", function(){
			var inputField = element(by.model("data.name"));
			inputField.clear();
			inputField.sendKeys("xx/");
			expect(element(by.css('#submitButton')).getAttribute('disabled')).toBeTruthy();
			inputField.clear();
			inputField.sendKeys("xx\\");
			expect(element(by.css('#submitButton')).getAttribute('disabled')).toBeTruthy();
			inputField.clear();
			inputField.sendKeys("xx?");
			expect(element(by.css('#submitButton')).getAttribute('disabled')).toBeTruthy();
			inputField.clear();
			inputField.sendKeys("xx?");
			expect(element(by.css('#submitButton')).getAttribute('disabled')).toBeTruthy();
			inputField.clear();
			inputField.sendKeys("xx:");
			expect(element(by.css('#submitButton')).getAttribute('disabled')).toBeTruthy();
			inputField.clear();
			inputField.sendKeys("xx*");
			expect(element(by.css('#submitButton')).getAttribute('disabled')).toBeTruthy();
			inputField.clear();
			inputField.sendKeys("xx\"");
			expect(element(by.css('#submitButton')).getAttribute('disabled')).toBeTruthy();
			inputField.clear();
			inputField.sendKeys("xx>");
			expect(element(by.css('#submitButton')).getAttribute('disabled')).toBeTruthy();
			inputField.clear();
			inputField.sendKeys("xx<");
			expect(element(by.css('#submitButton')).getAttribute('disabled')).toBeTruthy();
			inputField.clear();
			inputField.sendKeys("xx|");
			expect(element(by.css('#submitButton')).getAttribute('disabled')).toBeTruthy();
		});	

		it("should require a name to be unique", function(){
			var inputField = element(by.model("data.name"));
			inputField.clear();
			inputField.sendKeys("one");
			expect(element(by.css('#submitButton')).getAttribute('disabled')).toBeTruthy();
			expect(element(by.css('#alert')).isPresent()).toBeTruthy();
		});
	});

});