function isTruthy(value) {
    if (value) {
        console.log('Truthy');
    } else {
        console.log('Falsey');
    }
}

isTruthy('Pesho')
isTruthy(false)
isTruthy('false')
isTruthy('');
isTruthy(0);
isTruthy('0');
isTruthy(10);