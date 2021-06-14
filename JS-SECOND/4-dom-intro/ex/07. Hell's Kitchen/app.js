function solve() {
    document.querySelector('#btnSend').addEventListener('click', onClick);

    function onClick() {
        let data = document.getElementsByTagName('textarea')[0].value;
        let [best, workers] = getBestRestaurant(data)

        document.querySelector('#outputs #bestRestaurant p').innerHTML = best;
        document.querySelector('#outputs #workers p').innerHTML = workers;
    }

    function getBestRestaurant(param) {
        let data = JSON.parse(param);
        let restaurants = [];

        for (const restaurant of data) {
            let [restaurantName, ...workersArray] = restaurant.split(/(?: - )|(?:, )/g);
            let currWorkers = getArrayFromObjectsWorkers(workersArray);

            let currRestaurant = restaurants.find(el => el.name === restaurantName);
            if (currRestaurant) {
                currRestaurant.workers = currRestaurant.workers.concat(currWorkers);
            } else {
                restaurants.push({name: restaurantName, workers: currWorkers})
            }
        }
        restaurants.forEach((e, i) => {
            e.averageSalary = e.workers.reduce((acc, w) => acc + w.salary / e.workers.length, 0);
            e.bestSalary = e.workers.sort((a, b) => b.salary - a.salary)[0].salary;
            e.orderApperance = i;
        });

        let best = restaurants.sort((a, b) => b.averageSalary - a.averageSalary || a.orderApperance - b.orderApperance)[0];

        let stringWorkers = best.workers.sort((a, b) => b.salary - a.salary)
            .map(e => `Name: ${e.worker} With Salary: ${e.salary}`).join(' ');

        let bestRestString = `Name: ${best.name} Average Salary: ${best.averageSalary.toFixed(2)} Best Salary: ${best.bestSalary.toFixed(2)}`;
        return [bestRestString, stringWorkers]
    }

    function getArrayFromObjectsWorkers(workersArray) {
        return workersArray.map(w => {
            let [name, salary] = w.split(' ');
            salary = Number(salary);
            return {worker: name, salary};
        });
    }
}


// function solve() {
//     document.querySelector('#btnSend').addEventListener('click', onClick);
//
//     function onClick() {
//         let textArea = document.getElementsByTagName('textarea')[0].value;
//         let data = JSON.parse(textArea);
//         let [best, workers] = getBestRestaurant(data)
//
//         document.querySelector('#outputs #bestRestaurant p').textContent = best;
//         document.querySelector('#outputs #workers p').textContent = workers;
//     }
//
//     function getBestRestaurant(data) {
//
//         let acc = [];
//         for (let e of data) {
//             let [restaurantName, ...workersArray] = e.split(/(?: - )|(?:, )/g);
//             let currWorkers = workersArray.map(w => {
//                 let [worker, salary] = w.split(' ');
//                 return {
//                     worker: worker,
//                     salary: +salary
//                 };
//             });
//
//             let currRestaurant = acc.find(el => el.name === restaurantName);
//
//             if (currRestaurant) {
//                 currRestaurant.workers = currRestaurant.workers.concat(currWorkers);
//             } else {
//                 acc.push({name: restaurantName, workers: currWorkers})
//             }
//         }
//
//
//
//         acc.forEach((e, i) => {
//             console.log(e.workers.length)
//             e.averageSalary = e.workers.reduce((acc, w) => acc + w.salary / e.workers.length, 0);
//             e.bestSalary = e.workers.sort((a, b) => b.salary - a.salary)[0].salary;
//             e.orderApperance = i;
//         });
//
//         let best = acc.sort((a, b) => b.averageSalary - a.averageSalary || a.orderApperance - b.orderApperance)[0];
//         let stringWorkers = best.workers
//             .sort((a, b) => b.salary - a.salary)
//             .map(e => `Name: ${e.worker} With Salary: ${e.salary}`).join(' ');
//
//         let bestRestString = `Name: ${best.name} Average Salary: ${best.averageSalary.toFixed(2)} Best Salary: ${best.bestSalary.toFixed(2)}`;
//         return [bestRestString, stringWorkers]
//     }
// }
//
//
