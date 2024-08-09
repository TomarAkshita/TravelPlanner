document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('toggle').addEventListener('click', function () {
        document.getElementById('header').classList.toggle('header-active');
        document.getElementById('slide').classList.toggle('slide-active');
    });
});