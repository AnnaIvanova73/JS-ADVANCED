function lookupChar(string, index) {
    if (typeof(string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }

    return string.charAt(index);
}

let assert = require('chai').assert;


describe('lookupChar',function(){

    it('incorrect value for floathing point',() => {
        let actual = lookupChar('1',1.006);
        assert.isUndefined(actual);

         actual = lookupChar('anna',1.1);
        assert.isUndefined(actual);

    });

    it('should be undefined for value not string',() => {
        let actual = lookupChar(1,1);
        assert.isUndefined(actual);
        actual = lookupChar({},1);
        assert.isUndefined(actual);
        actual = lookupChar(null,1);
        assert.isUndefined(actual);
        actual = lookupChar(true,1);
        assert.isUndefined(actual);
    });

    it('should be undefined for value not num',() => {
        let actual = lookupChar('1','1');
        assert.isUndefined(actual);
        actual = lookupChar('1',{});
        assert.isUndefined(actual);
        actual = lookupChar('1',null);
        assert.isUndefined(actual);
        actual = lookupChar('1',true);
        assert.isUndefined(actual);
    });

    it('should return msg when idx not correct',() => {
        let string = 'some string';
        let actual = lookupChar(string,-1);
        assert.equal(actual,"Incorrect index");
        actual = lookupChar(string,300000);
        assert.equal(actual,"Incorrect index");
        actual = lookupChar('255',3);
        assert.equal(actual,"Incorrect index");
        actual = lookupChar('',0);
        assert.equal(actual,"Incorrect index");
    });

    it('should work properly',() => {
        let string = 'some string';
        let actual = lookupChar(string,10);
        assert.equal(actual,"g");
        actual = lookupChar(string,0);
        assert.equal(actual,"s");
        actual = lookupChar('255',2);
        assert.equal(actual,"5");
    });
})