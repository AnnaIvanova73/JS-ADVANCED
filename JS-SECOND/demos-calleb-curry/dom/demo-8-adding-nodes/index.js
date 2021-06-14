{
    let button = document.getElementById("click");

    button.onclick = function(){
        let node = document.createElement('li');
        console.log('node');

        let textNode  = document.createTextNode(
            document.getElementById("input").value
        )
        node.appendChild(textNode)

        let list = document.getElementById("items");
        list.appendChild(node);
    }

    //Creating text node   let textNode  = document.createTextNode("new")
    //Creating text node adding value of input dynamically -->
    //   let textNode  = document.createTextNode(
    //             document.getElementById("input").value
    //         )
}


