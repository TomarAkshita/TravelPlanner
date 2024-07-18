import { validateForm } from "./formValidation.js";
import { addDestination, saveDestination, deleteDestination } from "./destination.js";

document.addEventListener('DOMContentLoaded',()=>{

    const dForm = document.getElementById('DestinationForm');
    let dList = document.getElementById('DestinationList');

    const saved = JSON.parse(localStorage.getItem('destinations')) || [];

    // getting the destination form details 
    dForm.addEventListener('submit', (e)=>{
        e.preventDefault();

        if (validateForm()) {
            const name = document.getElementById('name').value;
            const sdate = document.getElementById('sdate').value;
            const edate = document.getElementById('edate').value;
            const activity = document.getElementById('activities').value;
            const note = document.getElementById('notes').value;

            // Make an object of details
            const destination = {
                name,
                sdate,
                edate,
                activity,
                note
            };

            addDestination(destination,dList);
            saveDestination(destination);

            dForm.reset();
        }
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

    saved.forEach(destination => {
        addDestination(destination, dList); 
    });
   
});