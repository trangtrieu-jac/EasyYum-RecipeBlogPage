// CASE 2: INTERACTIVE FEATURES WITH JS

// get the modal and close button elements
const modal = document.getElementById("popupModal");
const closeButton = document.getElementById("closeModalBtn");

// show the modal when the page loads
window.onload = function() {
    modal.style.display = "block";
};

// close the modal when the close button is clicked
closeButton.onclick = function() {
    modal.style.display = "none";
};

// close the modal if the user clicks outside of it
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};
