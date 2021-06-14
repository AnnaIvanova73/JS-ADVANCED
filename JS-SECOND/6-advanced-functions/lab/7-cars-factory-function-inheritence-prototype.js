function solve1() {
    const objects = {};

    const getProperties = (obj = {}) => {
        const output = [];
        for (const prop in obj) {
            output.push(`${prop}:${obj[prop]}`);
        }
        return output.join(', ');
    };

    let a = {};
    objects['a'] = a;
    let b = Object.create(objects['a'])
    objects['b'] = b;

    objects['a']['model'] = 'someModel'
    objects['b']['color'] = 'someColour'
    console.log(Object.getPrototypeOf(b) === a)
    console.log(Object.getPrototypeOf(b))
    console.log(Object.getPrototypeOf(a))


    let arr = ['a', 'b']
    for (const el of arr) {
       // console.log(getProperties(objects[el])) //1 итерация model:1
                                                //2 интерация color:red, model:1
    }
}


solve1()



function solve(cmnds) {
    const objects = {};

    const getProperties = (obj = {}) => {
        const output = [];
        for (const prop in obj) {

            output.push(`${prop}:${obj[prop]}`);
        }

        return output.join(', ');
    };

    const commands = {
        create: (name1, inherit, name2) => {
            let obj = {};
            if (inherit) {
                obj = objects[name2];
            }

            objects[name1] = Object.create(obj);

        },
        set: (name, prop, val) => {

            objects[name][prop] = val;
        },
        print: (name) => {

            console.log(getProperties(objects[name]))
        },
    };

    for (const el of cmnds) {
        let [cmd, ...args] = el.split(' ')
        commands[cmd](...args)
    }

}

solve(['create c1',

    'create c2 inherit c1',

    'set c1 color red',

    'set c2 model new',

    'print c1',

    'print c2']);

/*
function solve(cmnds) {
    const objects = {};

    const getProperties = (obj = {}) => {
        const output = [];
        for (const prop in obj) {

            output.push(`${prop}:${obj[prop]}`);
        }

        return output.join(', ');
    };

    const commands = {
        create: (name1, inherit, name2) => {
            let obj = {};
            if (inherit) {
                obj = objects[name2];
            }

            objects[name1] = Object.create(obj);

        },
        set: (name, prop, val) => {

            objects[name][prop] = val;
        },
        print: (name) => {

            console.log(getProperties(objects[name]))
        },
    };

    for (const el of cmnds) {
        let [cmd, ...args] = el.split(' ')
        commands[cmd](...args)
    }

}
 */