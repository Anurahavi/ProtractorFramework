let homepage = require('../pages/homepage')

describe('demo calculator tests',function(){
    it('addition_test',function(){

        //browser.get('http://juliemr.github.io/protractor-demo/');
        
        
        homepage.get('http://juliemr.github.io/protractor-demo/');
        //element(by.model('first')).sendKeys('2');
        homepage.enterFirstNumber('2');
        //element(by.model('second')).sendKeys('3');
        homepage.enterSecondNumber('3');

        //element(by.css('[ng-click="doAddition()"]')).click();
        homepage.clickGo();
        //let result=element(by.cssContainingText('.ng-binding','5'));
        //expect(result.getText()).toEqual('5');
        homepage.verifyResult('5');
        


        browser.sleep(2000);

    });
    it('addition_test',function(){

        //browser.get('http://juliemr.github.io/protractor-demo/');
        
        
        homepage.get('http://juliemr.github.io/protractor-demo/');
        //element(by.model('first')).sendKeys('2');
        homepage.enterFirstNumber('2');
        //element(by.model('second')).sendKeys('3');
        homepage.enterSecondNumber('3');

        //element(by.css('[ng-click="doAddition()"]')).click();
        homepage.clickGo1();
        //let result=element(by.cssContainingText('.ng-binding','5'));
        //expect(result.getText()).toEqual('5');
        homepage.verifyResult('5');
        


        browser.sleep(2000);

    });
    
});