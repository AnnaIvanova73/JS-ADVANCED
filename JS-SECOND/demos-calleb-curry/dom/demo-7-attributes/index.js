{
   //Changing the value of input element
    document.getElementById("input").value = "!!!";
   //Check if attribute exist
    let attribute =
        document.getElementById("input")
            .hasAttribute("tacos");//--> true or false
console.log(attribute);

    //Access all attributes // returns array of attributes
    let attributesArr =
        document.getElementById("input").attributes;
    console.log(attributesArr);

    // Get value of attribute
    let valueOfCurrAttribute =
        document.getElementById("input").
            getAttribute("tacos");
    console.log(valueOfCurrAttribute);

    //tacos dont do anything but can be used to store value, is not useful dor page display
    // tacos and all attribute are case insensitive
}


