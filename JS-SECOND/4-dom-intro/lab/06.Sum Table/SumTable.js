function sumTable() {
    //Time: 0.818 s
    let arr = Array.from(document.getElementsByTagName('td'))
        let elSum = arr.pop();
        let sum = arr.filter((_, i) => i % 2 !== 0).map(e => Number(e.innerHTML)).reduce((acc,n) => acc + n,0);
        elSum.innerHTML = String(sum);
}