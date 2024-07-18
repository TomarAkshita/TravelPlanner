export  function validateForm() {
        let isValid = true;

        const nameInput = document.getElementById('name');
        const nameFeedback = document.getElementById('nameFeedback');
        if (nameInput.value.trim() === '') {
            nameFeedback.style.display = 'block';
            isValid = false;
        } else {
            nameFeedback.style.display = 'none';
        }

        const sInput = document.getElementById('sdate');
        const sFeedback = document.getElementById('sFeedback');
        if (sInput.value.trim() === '') {
            sFeedback.style.display = 'block';
            isValid = false;
        } else {
            sFeedback.style.display = 'none';
        }

        const eInput = document.getElementById('edate');
        const eFeedback = document.getElementById('eFeedback');
        if (eInput.value.trim() === '') {
            eFeedback.style.display = 'block';
            isValid = false;
        } else {
            eFeedback.style.display = 'none';
        }

        const actInput = document.getElementById('activities');
        const actFeedback = document.getElementById('actFeedback');
        if (actInput.value.trim() === '') {
            actFeedback.style.display = 'block';
            isValid = false;
        } else {
            actFeedback.style.display = 'none';
        }

        return isValid;
}