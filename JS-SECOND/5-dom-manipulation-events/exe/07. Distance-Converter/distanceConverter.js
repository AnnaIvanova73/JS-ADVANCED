function attachEventsListeners1() {
    let outputNumber = document.getElementById('outputDistance');

    document.getElementById('convert').addEventListener('click', () => {
        let inputNumber = document.getElementById('inputDistance').value;

        let inputUnit = '';
        Array.from(document.querySelectorAll('#inputUnits')).forEach(e => {
            inputUnit = e.value;
        });

        let outputUnit = '';
        Array.from(document.querySelectorAll('#outputUnits')).forEach(e => {
            outputUnit = e.value;
        });

        let mm = convertInputToMillimeters(inputNumber, inputUnit);
        outputNumber.value = convertFromMillimeters(mm, outputUnit);
    });


    function convertInputToMillimeters(input, unit) {

        let convert = {

            km: (input) => {
                return input / 0.0000010000;
            },
            m: (input) => {
                return input / 0.0010000;
            },
            cm: (input) => {
                return input / 0.10000;
            },
            mm: (input) => {
                return input;
            },
            mi: (input) => {
                return input * 1609344;
            },
            yrd: (input) => {
                return input * 914.4;
            },
            ft: (input) => {
                return input * 304.8;
            },
            in: (input) => {
                return input * 25.4;
            },
        };
        return convert[unit](input);
    }

    function convertFromMillimeters(input, unit) {
        let convert = {

            km: (millimeters) => {
                return millimeters / 1000000;
            },
            m: (millimeters) => {
                return millimeters / 1000;
            },
            cm: (millimeters) => {
                return millimeters / 10;
            },
            mm: (millimeters) => {
                return millimeters;
            },
            mi: (millimeters) => {
                return millimeters * 0.00000062137;
            },
            yrd: (millimeters) => {
                return millimeters * 0.0010936133;
            },
            ft: (millimeters) => {
                return millimeters / 304.8;
            },
            in: (millimeters) => {
                return millimeters / 25.4;
            },
        };
        return convert[unit](input);
    }
}

/*
function attachEventsListeners() {
    document.getElementById('convert').addEventListener('click', () => {
        let valConv = document.getElementById('inputDistance').value;
        let inCm = 0;
        Array.from(document.querySelectorAll('#inputUnits > option')).forEach(e => {
            if (e.selected) {
                inCm = convertToCm(e.value, valConv);
                return;
            }
        })
        Array.from(document.querySelectorAll('#outputUnits > option')).forEach(e => {
            if (e.selected) {
                document.getElementById('outputDistance').value = convertOutOfCm(e.value, inCm);
            }
        })

    })

    function convertToCm(measurement, value) {
        switch (measurement) {
            case'km' :
                return value * 100000;
            case'm'  :
                return value / 0.01
            case'mm' :
                return value / 10
            case'mi' :
                return value / 0.0000062137
            case'yrd':
                return value / 0.010936
            case'ft' :
                return value / 0.032808
            case'in' :
                return value / 0.39370
            default:
                return value;

        }
    }

    function convertOutOfCm(measurement, cm) {
        switch (measurement) {
            case'km' :
                return cm / 100000
            case'm'  :
                return cm / 100
            case'mm' :
                return cm * 10
            case'mi' :
                return cm * 0.0000062137
            case'yrd':
                return cm * 0.010936
            case'ft' :
                return cm * 0.032808
            case'in' :
                return cm * 0.39370
            default  :
                return cm;
        }
    }
}
 */