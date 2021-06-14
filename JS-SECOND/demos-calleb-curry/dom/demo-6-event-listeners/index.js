
    let list = document.getElementsByTagName('ol');
    console.log('list'); // --> HTML collection, if you want to atach event listener to an event we need to have an actual node, not a collection
    let ourList = list[0];
    console.log(ourList)

    ourList.onmouseover = function (){
        console.log("mouse over")
        ourList.childNodes[1].childNodes[0].nodeValue = "House";
    }

    ourList.onmouseover = function (){
        console.log("mouse over")
       document.getElementById("home").innerHTML = "house"
    }

    let btn = document.getElementById('click');
    btn.onmouseenter = function (e){
        btn.innerHTML = "revealed";
    }
    btn.onmouseleave = function (){
        ourList.remove()
        btn.innerHTML = "Hover over me!";
    }

    btn.onclick = function (e){
        e.preventDefault();
        let body = document.getElementsByTagName("body")[0];
        console.log(body)
        body.insertBefore(ourList,btn);
    }

