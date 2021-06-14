function solve(moves) {
    let checkArrSameValues = (arr) => arr.every(a => String(a) !== 'false')
    function print() {
        let outputMatr = '';
        dashboard.forEach(el => {
            outputMatr += el.join('\t')
            outputMatr += '\n';
        })
        return outputMatr
    }

    let dashboard = [
        [false, false, false],

        [false, false, false],

        [false, false, false]];


    function checkWin(a,b,player) {
        const hasRowWin = dashboard[a].every(x => x === player);

        const hasColWin = dashboard.reduce((acc, _, i) => {
            acc.push(dashboard[i][Number(b)])
            return acc;
        }, []).every(x => x === player);


        const d1 = dashboard.reduce((acc, _, i) => {
            acc.push(dashboard[i][i])
            return acc;
        }, []).every(x => x === player);


        const d2 = dashboard.reduce((acc, _, i, arr) => {
            acc.push(dashboard[arr.length - i - 1][i])
            return acc;
        }, []).every(x => x === player);

        return hasRowWin || hasColWin || d1 || d2;
    }

    let msg = '';
    let playerS = [];
    playerS.length = moves.length
    playerS.fill('X').forEach((e, i) => {
        playerS[i] = i % 2 === 0 ? 'X' : 'O'
    })

    for (let i = 0; i < moves.length; i++) {
        let [row, col] = moves[i].split(' ').map(Number);
        let player = playerS.shift();

        if (checkArrSameValues(dashboard[0]) && checkArrSameValues(dashboard[1]) && checkArrSameValues(dashboard[2])) {
            break;
        }
        if (dashboard[row][col] === false) {
            dashboard[row][col] = player

            if (checkWin(row,col,player)) {
                msg = `Player ${player} wins!`
                break;
            }
        } else if (String(dashboard[row][col]) === 'X' || String(dashboard[row][col]) === 'O') {
            playerS.unshift(player)
            console.log('This place is already taken. Please choose another!')
        }
    }

    let output = msg === '' ? 'The game ended! Nobody wins :(' + '\n' : msg + '\n'
    return output + print()
}

console.log(solve(["0 1",

    "0 0",

    "0 2",

    "2 0",

    "1 0",

    "1 2",

    "1 1",

    "2 1",

    "2 2",

    "0 0"]))


