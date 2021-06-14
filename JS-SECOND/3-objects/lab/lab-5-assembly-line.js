function createAssemblyLine() {

    const addOne = (p1, p2) => {
        if (p1 < p2) {
            p1 += 1;
        } else if (p2 < p1) {
            p1 -= 1;
        }
        return p1;
    }

    const print = (param) => { if(param !== null){
        console.log(`Now playing '${param.name}' by ${param.artist}`)
    }}

    const printWord = (number, word) => {
        if(number < 0.1){
            console.log(word.repeat(3).split('!').join('! ').trim())
        }else if(number < 0.25){
            console.log(word.repeat(2).split('!').join('! ').trim())
        }else if(number < 0.5){
            console.log(word)
        }
    }

    return {

        hasClima: (obj) => {
            obj.temp = 21;
            obj.tempSettings = 21;
            obj.adjustTemp = () => {
                obj.temp = addOne(obj.temp, obj.tempSettings);
            }
        },
        hasAudio: (obj) => {
            obj.currentTrack = null;
            obj.nowPlaying = () => {
                print(obj.currentTrack)
            }
        },
        hasParktronic: (obj) =>{
            obj.checkDistance = (distance) => {
                printWord(distance, 'Beep!')
            }
        }

    }
}

const assemblyLine = createAssemblyLine();


const myCar = {

    make: 'Toyota',

    model: 'Avensis'

};
assemblyLine.hasClima(myCar);

console.log(myCar.temp);

myCar.tempSettings = 18;

myCar.adjustTemp();

console.log(myCar.temp);
assemblyLine.hasAudio(myCar);

myCar.currentTrack = {

    name: 'Never Gonna Give You Up',

    artist: 'Rick Astley'

};

myCar.nowPlaying();
assemblyLine.hasParktronic(myCar);

myCar.checkDistance(0.4);

myCar.checkDistance(0.2);
console.log(myCar)

//myCar.checkDistance(0.2);