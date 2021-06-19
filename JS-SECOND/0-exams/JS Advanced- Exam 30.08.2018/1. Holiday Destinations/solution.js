function addDestination(e) {
    let [city, country] = Array.from(document.getElementsByClassName('inputData'));
    if (city.value === '' || country.value === '') {
        return;
    }
    let section = document.getElementById('seasons');
    let seasons = Array.from(document.querySelectorAll('#summaryBox > input'));
    let countSeasons = {
        winter: () => seasons[2].value = Number(seasons[2].value) + 1,
        summer: () => seasons[0].value = Number(seasons[0].value) + 1,
        spring: () => seasons[3].value = Number(seasons[3].value) + 1,
        autumn: () => seasons[1].value = Number(seasons[1].value) + 1,
    }
    countSeasons[section.value]();
    let row = document.createElement('tr');
    let td = document.createElement('td');
    td.textContent = `${city.value}, ${country.value}`;
    let td2 = document.createElement('td');
    td2.textContent = section.value.slice(0, 1).toUpperCase() + section.value.slice(1);
    row.appendChild(td)
    row.appendChild(td2)
    document.getElementById('destinationsList').appendChild(row);
    city.value = '';
    country.value = '';
}