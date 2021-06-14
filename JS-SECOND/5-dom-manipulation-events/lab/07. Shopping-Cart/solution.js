function solve() {
    let textArea = document.getElementsByTagName('textArea')[0];

    function addProduct(e) {
        let divParent = e.target.parentNode.parentNode;
        let productName = divParent.querySelector('.product-title').textContent;
        let productPrice = divParent.querySelector('.product-line-price').textContent;
        textArea.appendChild(document.createTextNode(`Added ${productName} for ${productPrice} to the cart.\n`))
    }

    let buttonsAdd = document.querySelectorAll('.add-product');

    Array.from(buttonsAdd).forEach(btnProduct => {
        btnProduct.addEventListener('click', addProduct)
    })

    let btnCheckout = document.querySelector('.checkout');

    function checkout() {

        let totalPrice = 0;
        let listProducts = [];
        let text = textArea.childNodes;
        if (text !== '') {
            Array.from(text).forEach(textNode => {
                let el = textNode.textContent.split(' ');
                if(!listProducts.includes(el[1])){
                    listProducts.push(el[1])
                }
                totalPrice += Number(el[3])
            })
        }
        textArea.appendChild(document.createTextNode(`You bought ${listProducts.join(', ')} for ${totalPrice.toFixed(2)}.`))
        Array.from(document.getElementsByTagName("button")).forEach(button => button.disabled = true);
    }

    btnCheckout.addEventListener('click', () => {checkout()});
}


// function solve() {
//     let textArea = document.getElementsByTagName('textArea')[0];
//     let buttonsAdd = document.querySelectorAll('.add-product');
//     let btnCheckout = document.querySelector('.checkout');
//
//     Array.from(buttonsAdd).forEach(btnProduct => {
//         btnProduct.addEventListener('click', addProduct)
//     })
//
//     btnCheckout.addEventListener('click', () => {
//         checkout(btnCheckout)
//     });
//
//
//
//
//     function addProduct(e) {
//         let divParent = e.target.parentNode.parentNode;
//         let productName = divParent.querySelector('.product-title').textContent;
//         let productPrice = divParent.querySelector('.product-line-price').textContent;
//         textArea.appendChild(document.createTextNode(`Added ${productName} for ${productPrice} to the cart.\n`))
//     }
//
//
//     function checkout(btnCheckout) {
//         let products = [];
//         let totalPrice = 0;
//         let text = textArea.childNodes;
//         if (text !== '') {
//             Array.from(text).forEach(textNode => {
//                 let el = textNode.textContent.split(' ');
//                 let currProduct = products.filter(e => e === el[1]);
//
//                 if (currProduct.length === 0) {
//                     products.push( el[1]);
//                 }
//                 totalPrice += Number(el[3]);
//             });
//         }
//
//         textArea.appendChild(document.createTextNode(`You bought ${products.join(', ')} for ${totalPrice.toFixed(2)}.`));
//         let buttons = Array.from(buttonsAdd);
//         buttons.push(btnCheckout);
//         disableBtns(buttons)
//     }
//
//     function disableBtns(arr) {
//         arr.forEach(btnProduct => {
//             btnProduct.setAttribute('disabled', true);
//         })
//     }
// }