
export function addDestination(destination, dList) {
    const tr = document.createElement('table');
    tr.classList.add('item');

    tr.innerHTML = `
        <tr>
            <th colspan="2">${destination.name}</th>
        </tr>
        <tr>
            <td class="thd"><b>Start Date</b></td>
            <td>${destination.sdate}</td>
        </tr>
        <tr>
            <td class="thd"><b>End Date</b></td>
            <td>${destination.edate}</td>
        </tr>
        <tr>
            <td class="thd"><b>Activities</b></td>
            <td>${destination.activity}</td>
        </tr>
        <tr>
            <td class="thd"><b>Notes</b></td>
            <td> ${destination.note}</td>
        </tr>
        <div>
            <button class="btn dbtne">Delete</button>
        <div>
    `;

    tr.querySelector('.dbtne').addEventListener('click', () => {
        if (confirm("Are you sure to delete Destination from your ventures?")) {
            tr.remove();
            deleteDestination(destination);
        }
    });
    dList.appendChild(tr);
}

export function saveDestination(destination) {
    const destinations = JSON.parse(localStorage.getItem('destinations')) || [];
    destinations.push(destination);
    localStorage.setItem('destinations', JSON.stringify(destinations));
}

export function deleteDestination(destination) {
    let destinations = JSON.parse(localStorage.getItem('destinations')) || [];
    destinations = destinations.filter(dest => dest.name !== destination.name);
    localStorage.setItem('destinations', JSON.stringify(destinations));
}