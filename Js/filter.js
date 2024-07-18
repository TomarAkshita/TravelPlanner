
import { addDestination, deleteDestination } from "./destination.js";

document.addEventListener('DOMContentLoaded', () => {
    const saved = JSON.parse(localStorage.getItem('destinations')) || [];
    const dList = document.getElementById('DestinationList');

    function filterDestination(filterDate) {
        const filteredDestinations = saved.filter(dest => dest.sdate === filterDate);
        updateDestination(filteredDestinations);
    }

    function updateDestination(destinations) {
        dList.innerHTML = '';
        destinations.forEach(destination => {
            addDestination(destination, dList); 
        });
    }

    document.getElementById('fbutton').addEventListener('click', () => {
        const filter = document.getElementById('filterDate').value;
        filterDestination(filter);
    });

    // deletion
    dList.addEventListener('click', (e) => {
        if (e.target.classList.contains('dbtne')) {
            const tr = e.target.closest('.item');
            const name = tr.querySelector('th').textContent.trim();

            const destinationToDelete = saved.find(dest => dest.name === name);
            if (destinationToDelete && confirm("Are you sure to delete Destination from your ventures?")) {
                deleteDestination(destinationToDelete);
                tr.remove();
            }
        }
    });
});
