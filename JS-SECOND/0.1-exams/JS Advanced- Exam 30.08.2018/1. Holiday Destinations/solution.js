function addDestination(e) {
    let [city, country] = Array.from(document.querySelectorAll('input.inputData'));
    if (!city.value || !country.value) {
        return;
    }
    let seasons = document.querySelector('#seasons');
    let tableBody = document.querySelector('#destinations');

    let countAccumulation = {
        summer: () => {
          let summerElement =  document.getElementById('summer');
          summerElement.value = Number(summerElement.value) + 1;
        },
        autumn: () => {
            let autumnElement =  document.getElementById('autumn');
            autumnElement.value = Number(autumnElement.value) + 1;
        },
        winter: () => {
            let winterElement =  document.getElementById('winter');
            winterElement.value = Number(winterElement.value) + 1;
        },
        spring: () => {
            let springElement =  document.getElementById('spring');
            springElement.value = Number(springElement.value) + 1;
        },
    }

    let tdDestinationElement = document.createElement('td');
    tdDestinationElement.textContent = `${city.value}, ${country.value}`;

    let tdSeasonElement = document.createElement('td');
    tdSeasonElement.textContent = `${seasons.value.charAt(0).toUpperCase() + seasons.value.substring(1)}`

    let row = document.createElement('tr');

    row.appendChild(tdDestinationElement);
    row.appendChild(tdSeasonElement);
    countAccumulation[seasons.value]();
    tableBody.appendChild(row);
    city.value = '';
    country.value = '';
}