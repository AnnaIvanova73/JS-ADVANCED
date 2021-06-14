function search() {
    let searchText = document.getElementById('searchText');
    let val = searchText.value.toLowerCase();

    Array.from(document.getElementsByTagName('li'))
        .forEach(e => {
            e.style.textDecoration = ''
            e.style.fontWeight = ''
            return e;
        })
   if(val !== '') {
        let arr = Array.from(document.getElementsByTagName('li'))
            .filter(e => e.textContent.toLowerCase().includes(val))
            .map(e => {
                e.style.textDecoration = 'underline'
                e.style.fontWeight = 'bold'
                return e;
            });

        let size = arr.length
        document.getElementById('result').innerHTML = `${size} ${size > 1 ? 'matches' : 'match'} found`;
   }
}

function search1() {
    let searchText = document.getElementById('searchText');
    let val = searchText.value.toLowerCase();

    document.getElementById('result').innerHTML = `${search(val)} ${search(val) > 1 ? 'matches' : 'match'} found`;

    searchText.value = '';

    function search(val) {
        let arr = Array.from(document.getElementsByTagName('li'))
            .filter(e => e.textContent.toLowerCase().includes(val))
            .map(e => {
                e.style.textDecoration = 'underline'
                e.style.fontWeight = 'bold'
                return e;
            })
        return arr.length;
    }
}
