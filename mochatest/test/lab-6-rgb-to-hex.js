function rgbToHexColor(red, green, blue) {
    if (!Number.isInteger(red) || (red < 0) || (red > 255)) {
        return undefined; // Red value is invalid

    }
    if (!Number.isInteger(green) || (green < 0) || (green > 255)) {
        return undefined; // Green value is invalid

    }
    if (!Number.isInteger(blue) || (blue < 0) || (blue > 255)) {
        return undefined; // Blue value is invalid

    }
    return "#" +
        ("0" + red.toString(16).toUpperCase()).slice(-2) +
        ("0" + green.toString(16).toUpperCase()).slice(-2) +
        ("0" + blue.toString(16).toUpperCase()).slice(-2);
}

let assert = require('chai').assert;

describe('rgbToHexColor', function () {

    it('should work properly with correct input, test reds', () => {
        let actual = rgbToHexColor(255, 160, 122);
        assert.equal(actual, '#FFA07A');

        actual = rgbToHexColor(255, 0, 0);
        assert.equal(actual, '#FF0000');

        actual = rgbToHexColor(178, 34, 34);
        assert.equal(actual, '#B22222');
    });

    it('should work properly with correct input, test blues', () => {
        let actual = rgbToHexColor(0, 0, 255);
        assert.equal(actual, '#0000FF');

        actual = rgbToHexColor(0, 191, 255);
        assert.equal(actual, '#00BFFF');

        actual = rgbToHexColor(176, 224, 230);
        assert.equal(actual, '#B0E0E6');
    });
    it('should work properly with correct input, test green', () => {
        let actual = rgbToHexColor(46, 139, 87);
        assert.equal(actual, '#2E8B57');

        actual = rgbToHexColor(0, 255, 0);
        assert.equal(actual, '#00FF00');

    });
    it('should return undefined when number is not integer', () => {
        let actual = rgbToHexColor('46', 139, 87);
        assert.isUndefined(actual);

        actual = rgbToHexColor(0, '255', 0);
        assert.isUndefined(actual);
        actual = rgbToHexColor(0, 255, '0');
        assert.isUndefined(actual);

    });
    it('should return undefined for color not in the borders', () => {
        assert.isUndefined(rgbToHexColor(-1, 255, 0));
        assert.isUndefined(rgbToHexColor(256, 255, 0));

        assert.isUndefined(rgbToHexColor(255, 256, 0));
        assert.isUndefined(rgbToHexColor(255, -1, 0));

        assert.isUndefined(rgbToHexColor(255, 4, 256));
        assert.isUndefined(rgbToHexColor(255, 4, -1));

    });

    it('should return undefined for incorrect input', () => {
        assert.isUndefined(rgbToHexColor(NaN,NaN,NaN));
        assert.isUndefined(rgbToHexColor());
        assert.isUndefined(rgbToHexColor([]));
        assert.isUndefined(rgbToHexColor({}));
        assert.isUndefined(rgbToHexColor(undefined));
        assert.isUndefined(rgbToHexColor(null));

    });

});

describe("rgbToHexColor", () => {

    it('shouldBeUndefinedForNotNumberInput', function () {
        assert.isUndefined(rgbToHexColor('1', '2'))
    });

    it('shouldBeUndefinedForNotEnoughArgInput', function () {
        assert.isUndefined(rgbToHexColor(1, 1))
    });
    it('shouldBeUndefinedForNotInRgbRangeBottomBorder', function () {
        assert.isUndefined(rgbToHexColor(-1, 0, 0))
    });
    it('shouldBeUndefinedForNotInRgbRangeUpperBorder', function () {
        assert.isUndefined(rgbToHexColor(256, 0, 0))
    });
    it('shouldBeReturnString', function () {
        assert.isString(rgbToHexColor(34, 139, 34))
    });
    it('shouldBeReturnCorrectColorGreen', function () {
        let expected = '#00FF00'
        assert.equal(rgbToHexColor(0, 255, 0), expected)
    });
})