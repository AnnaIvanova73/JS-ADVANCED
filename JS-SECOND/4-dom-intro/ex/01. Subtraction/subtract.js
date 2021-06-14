function subtract() {
    document.getElementById('result').innerHTML =
        String(Number(document.getElementById("firstNumber").value)
            - Number(document.getElementById("secondNumber").value));
}