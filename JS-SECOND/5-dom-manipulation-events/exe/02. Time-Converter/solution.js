function attachEventsListeners() {
    let btnElements = document.querySelectorAll('input[type=button]')
    Array.from(btnElements).forEach(btn => {

        btn.addEventListener('click', (e) => {
            let seconds = Number(convertTime(e));
            document.querySelectorAll('input[type = text]')[0].value = seconds / (3600 * 24); //секундите делено на seconds
            // секунди в една мин и минути в час 3600
            // по часовете в един ден 24
            document.querySelectorAll('input[type = text]')[1].value = seconds / 3600;
            document.querySelectorAll('input[type = text]')[2].value = seconds / 60;
            document.querySelectorAll('input[type = text]')[3].value = seconds;

        });
    });


    function convertTime(e) {
        let convertNumber =  Number(e.currentTarget.previousElementSibling.value);
        let typeOfTimeField = e.currentTarget.previousElementSibling.previousElementSibling.textContent;
        typeOfTimeField = typeOfTimeField.slice(0, 1).toLowerCase();

        let secondObj = {

            d: (value) => {
                return Math.floor(value * 24 * 60 * 60);
                // броя дни value
                // по часовете в един ден 24
                // по минутите в един час 60
                // по секундите в една минута 60
            },
            h: (value) => {
                return Math.floor(value * 60 * 60);
            },
            m: (value) => {
                return Math.floor(value * 60);
            },
            s: (value) => {
                return value
            },
        }
        return secondObj[typeOfTimeField](convertNumber);
    }
}