document.addEventListener('DOMContentLoaded',()=>{
    
    const bgContainer = document.getElementById('background-container');
    const defaultImage = '/images/trip.jpg'; 
    
    const params = new URLSearchParams(window.location.search);
    const bgImage = params.get('bgImage') || defaultImage;

    
    if (bgContainer) {
        bgContainer.style.backgroundImage = `url(${bgImage})`;
    } else {
        console.error("Element with ID 'background-container' not found.");
    }
});