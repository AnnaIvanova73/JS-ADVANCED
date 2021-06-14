{
    // append
    // prepend
    const ol = document.querySelector('ol');
    console.log('li node type is', ol.nodeType);
    console.log('li node type is', ol.nodeName);
    console.log('li node type is', ol.hasChildNodes());

    const clonedOl = ol.cloneNode(true); // причината поради която слагаме true е , за да клонира всички деца,
// ако е false Клонира само ol
    console.log('cloned ol', clonedOl);

    //child to parent
    console.log('the parent node is', ol.parentNode);
    console.log('the parent element is', ol.parentElement);
    console.log('the parent element is', ol.parentElement.parentElement);

    //parent to child
    console.log(ol.children);

    //siblings
    const li = document.querySelectorAll('li')[1];
    console.log('li next sibling', li.nextSibling);
    console.log('li next element sibling', li.nextElementSibling);

    console.log('li previous sibling', li.previousSibling);
    console.log('li previous element sibling', li.previousElementSibling);

    //ol.previousElementSibling.querySelector('p').innerHTML += '</BR> TO COOL FOR EVERYONE ELSE'

    let btns = document.querySelectorAll('span.delete')


    Array.from(btns).forEach(function(btn){
        btn.addEventListener('click',(e) =>{
            const li = e.target.parentElement;

            li.parentNode.removeChild(li);
        })
})

    let link= document.querySelector('body > div > header > a')
    link.addEventListener('click',(e) =>{
        e.preventDefault();
        console.log('navigation to',e.target.textContent,'was prevented')
    })
}
{
    // Selecting DOM elements
    let elem1 = document.getElementById('test');
    document.querySelector('#test');
    document.querySelectorAll('#test li');

// Get/Set content
    elem1.value;
    elem1.textContent;

// Traversing DOM
    elem1.parentElement;
    elem1.children;

// Create element
    let createdElem = document.createElement('p');

// Adding to DOM
    elem1.appendChild(createdElem);

// Delete from DOM
    createdElem.remove();

// Events
    elem1.addEventListener('click', someFunc);
    e.target

// maybe
    e.preventDefault(); //Buttons in Forms send the form when clicked, reloading the page
    elem1.removeEventListener('click', someFunc);



    function someFunc() { console.log(1)}
}