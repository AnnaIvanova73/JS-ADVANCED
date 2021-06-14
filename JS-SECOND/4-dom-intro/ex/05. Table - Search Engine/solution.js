function solve() {
   //Memory: 65.05 MB
   // Time: 1.271 s
    document.querySelector('#searchBtn').addEventListener('click', onClick);

    function onClick() {
        let input = document.getElementById('searchField');
        let val = input.value.toLowerCase().trim();

        let arr = Array.from(document.querySelectorAll('tbody tr td '));

        if (val.length > 0) {
            arr.filter(e => e.innerHTML.toLowerCase().includes(val)).map(e => e.parentNode.className = 'select');
        } else {
            arr.map(e => e.parentNode.classList.remove('select'))
        }

        input.value = '';
    }
}




function solve1() {
   //Memory: 64.95 MB
   // Time: 0.959 s
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let input = document.getElementById('searchField');
      let val = input.value.toLowerCase().trim();

      if(val.length > 0){
         Array.from(document.querySelectorAll('tbody tr td '))
             .filter(e => e.innerHTML.toLowerCase().includes(val)).map(e => e.parentNode.setAttribute('class', 'select'));
      }else {
         Array.from(document.querySelectorAll('tbody tr td ')).map(e => e.parentNode.removeAttribute('class'))
      }

      input.value = '';
   }
}

function solve2() {
   //Memory: 65.59 MB
   // Time: 1.209 s
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let input = document.getElementById('searchField');
      let val = input.value.toLowerCase().trim();

      if(val.length > 0){
         Array.from(document.querySelectorAll('tbody tr td '))
             .filter(e => e.innerHTML.toLowerCase().includes(val)).map(e => e.parentNode.className = 'select');
      }else {
         Array.from(document.querySelectorAll('tbody tr td ')).map(e => e.parentNode.classList.remove('select'))
      }

      input.value = '';
   }
}