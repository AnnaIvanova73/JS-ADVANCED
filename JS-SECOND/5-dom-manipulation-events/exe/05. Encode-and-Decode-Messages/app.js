function encodeAndDecodeMessages3() {

    let encoder  = (decodeArea,encodeArea) => {
        decodeArea.value = encodeArea.value.split('')
            .map(l => l.charCodeAt(0)+1).map(letter => String.fromCharCode(Number(letter))).join('');
        encodeArea.value = '';
    };

    let decoder  = (msg) => {
        return msg.split('').map(l => l.charCodeAt(0)-1).map(letter => String.fromCharCode(Number(letter))).join('');
    };

    function processMsg(e) {
        let encodeTextArea = document.querySelectorAll('textarea')[0];
        let decodeTextArea = document.querySelectorAll('textarea')[1];

        const cmdArgs = e.target.textContent.split(' ')[0].toLowerCase();

        cmdArgs === 'encode' ? encoder(decodeTextArea,encodeTextArea) :
            decodeTextArea.value = decoder(decodeTextArea.value);
    }

    let btnElements = document.getElementsByTagName('button');
    Array.from(btnElements).forEach(e => e.addEventListener('click',(e) => {processMsg(e)}));
}

//let encodeTextArea = document.querySelector('#main > div:nth-child(1) > textarea')
// let decodeTextArea = document.querySelector('#main > div:nth-child(2) > textarea')

function encodeAndDecodeMessages() {
    let encodeBtn =  document.getElementsByTagName('button')[0]
    let decodeBtn = document.getElementsByTagName('button')[1]
    let textEndcode =document.querySelectorAll('textarea')[0];
    let textDecode =document.querySelectorAll('textarea')[1];
    let output = ''
    encodeBtn.addEventListener('click', encode)
    decodeBtn.addEventListener('click', decode)
    function encode() {
        let num = 1
        output = convert(textEndcode.value, num)
        textDecode.value = output
        textEndcode.value = ''
    }

    function decode() {
        let num = -1
        output = convert(textDecode.value, num)
        textDecode.value = output
    }
    function convert(text, num) {
        let codedText = ''
        for (let index = 0; index < text.length; index++) {
            let char = text.charCodeAt(index)
            codedText+=String.fromCharCode(char+num)
        }
        return codedText
    }
}
function encodeAndDecodeMessages1() {

    let [input, output] = [...document.querySelectorAll('textarea')];
    let [btnSend, btnReceive] = [...document.querySelectorAll('button')]

    btnSend.addEventListener('click', () => {
        let toAscii = [...input.value].map(e => e.charCodeAt(0) + 1);
        output.innerHTML = toAscii.map(e => String.fromCharCode(e)).join('');
        input.value = '';
    })

    btnReceive.addEventListener('click', () => {
        let toAscii = [...output.value].map(e => e.charCodeAt(0) - 1);
        output.innerHTML = toAscii.map(e => String.fromCharCode(e)).join('');
    })

}

//   console.log(encoder('The password for my bank account is 123pass321'))
// console.log(decoder('Uif!qbttxpse!gps!nz!cbol!bddpvou!jt!234qbtt432'))