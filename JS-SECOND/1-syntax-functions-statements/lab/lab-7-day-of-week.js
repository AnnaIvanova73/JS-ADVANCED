let dayOfWeek = (input) => {
    let days = {
        'Monday': 1,
        'Tuesday': 2,
        'Wednesday': 3,
        'Thursday': 4,
        'Friday': 5,
        'Saturday': 6,
        'Sunday': 7,
    }
    try {
       return  days[input] === undefined ? 'error' : days[input];
    }catch{
        return 'error'
    }
}
let s1 = (input) => {
    function isString(x) {
        return Object.prototype.toString.call(x) === "[object String]"
    }
    function getNumberEquivalentOfDays() {
        let param = input.toLowerCase();
        return typeof days[param] !== 'undefined' ? days[param] : days['undefined']
    }
    let days = {
        'monday': 1,
        'tuesday': 2,
        'wednesday': 3,
        'thursday': 4,
        'friday': 5,
        'saturday': 6,
        'sunday': 7,
        'undefined':'error'
    }

    return isString(input) ? getNumberEquivalentOfDays() : days['undefined']
};
let s2 =(input) => {
    function isString(x) {
        return Object.prototype.toString.call(x) === "[object String]"
    }
    const msgError = 'error';
    function getNumberEquivalentOfDays() {
        let param = input.toLowerCase();
        let returnValue = days[param]
        return typeof returnValue !== 'undefined' ? returnValue : msgError
    }

    let days = {
        'monday': 1,
        'tuesday': 2,
        'wednesday': 3,
        'thursday': 4,
        'friday': 5,
        'saturday': 6,
        'sunday': 7,

    }

    return isString(input) ? getNumberEquivalentOfDays() : msgError
}
console.log(dayOfWeek(null))
