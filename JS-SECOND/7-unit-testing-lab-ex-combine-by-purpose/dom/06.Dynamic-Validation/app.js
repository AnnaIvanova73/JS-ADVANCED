function validate() {
    document.getElementById('email').addEventListener('change', (e) => {
        let inputValue = e.target.value;
        console.log(e)
        let rgx = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;
        if(rgx.test(inputValue)){
            document.getElementById('email').className = ''
        }else {
            document.getElementById('email').className = 'error'
        }
    })
}