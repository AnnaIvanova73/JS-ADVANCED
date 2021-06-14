function extractText() {
    let result = document.getElementById("result");
    let textNode = document.createTextNode(
        document.getElementById("items").innerText
    );
    result.appendChild(textNode)
}