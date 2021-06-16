function attachGradientEvents() {
    let graditentBoxElement = document.getElementById('gradient')
    let resultElement = document.getElementById('result')
    graditentBoxElement.addEventListener('mousemove',(e) =>{
        resultElement.textContent = Math.trunc(e.offsetX / e.target.clientWidth * 100) + '%'
    })
}
function attachGradientEvents() {
    let gradient = document.getElementById('gradient');
    gradient.addEventListener('mousemove', gradientMove);
    gradient.addEventListener('mouseout', gradientOut);

    function gradientMove(event) {
        let power = event.offsetX / (event.target.clientWidth - 1);
        power = Math.trunc(power * 100);
        document.getElementById('result').textContent = power + "%";
    }
    function gradientOut() {
        document.getElementById('result').textContent = "";
    }
}