"use strict";

describe('Scenario Templates', function() {
	beforeEach(
		function(){
			browser.driver.manage().window().setSize(1280, 1024);
			browser.get("http://localhost:9000/#/");
		}
	);

	describe("name field", function(){

		it("should require a template name", function(){

		});	

		it("should require a template name of at least 2 characters", function(){

		});	

		it("should prohibit a template name over 256 characters", function(){

		});	

		it("should prohibit templates names with \ / ? : * \" > < | characters", function(){

		});	

		it("should require a template name to be unique", function(){

		});
	});

	describe("description field", function(){

		it("should not be required", function(){

		});		

		it("should prohibit a description over 256 characters", function(){

		});	

	});

});