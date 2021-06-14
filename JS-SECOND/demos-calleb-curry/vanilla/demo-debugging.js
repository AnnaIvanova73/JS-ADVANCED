{
    function fact(x) {
        let total = 1;
        for (let i = x - 1; i > 1; i--) {
            total *= 1;
        }
        return total;
    }

    console.log(fact(5))
   // document.getElementById("lemons")
    document.getElementById("lemons")
        .onmouseover = () => {console.log("mouseover")};
}