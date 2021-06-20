function solve() {
    const obj = {};
    const proto = Object.getPrototypeOf(obj);
    obj.extend = function(input){
        Object.entries(input).forEach(([key,value]) => {
            if(typeof value === 'function'){
                proto[key] = value;
            } else {
                obj[key] = value;
            }
        })
    };
    return obj;
}
const template={

    extensionMethod: function () {},

    extensionProperty: 'someString'

}

console.log(solve(template))
/*
function solve() {
    const proto = {};
    const inst = Object.create(proto);


    inst.extend = function (templates) {
        Object.entries(templates).forEach(([key, value]) => {
            if (typeof value === 'function') {
                proto[key] = value;
            } else {
                inst[key] = value;
            }

        });
    }

    return inst;
}
 */