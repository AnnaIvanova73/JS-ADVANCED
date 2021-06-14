{
    /*
    nodeType
    Node.ELEMENT_NODE	type 1	An Element node like <p> or <div>.
    Node.ATTRIBUTE_NODE	type 2	An Attribute of an Element.
    Node.TEXT_NODE	    type 3	The actual Text inside an Element or Attr.
     */

    let list = document
        .getElementsByTagName("li");

    console.log(list[0]);
    console.log(list[0].childNodes)
    console.log(list[0].childNodes[0])
    console.log(list[0].childNodes[0].nodeType)
    console.log(list[0].childNodes[0].nodeName)

    if(list[0].nodeType === 1){
        console.log("element")
    }else if(list[0].nodeType === 3){
        console.log("text")
    }
    if(list[0].childNodes[0].nodeType === 1){ //checking the contents
        console.log("element")
    }else if(list[0].childNodes[0].nodeType === 3){
        console.log("text")
    }
}