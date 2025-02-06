'use strict';

// CASE 7: FEEDBACK FORM WITH INTERACTIVE SELECTIONS

// function to store feedback in localStorage
function storeFeedback() {
  let rating = document.getElementById("rating").value;
  let comments = document.getElementById("comments").value;
  let name = document.getElementById("name").value; 


  // create a feedback object
  let feedback = {
    rating: rating,
    comments: comments
  };

  // converting an object into a JSON string and storing it in localStorage
  window.localStorage.setItem(name, JSON.stringify(feedback));
}

// function to display all feedback from localStorage
function displayFeedback() {
  let feedbackList = document.getElementById("feedbackList");
  // clear previous feedback
  feedbackList.innerHTML = '';  
  
  // loop through localStorage keys and retrieve feedback
  for (let i = 0; i < localStorage.length; i++) {
    let name = localStorage.key(i);
    let feedbackData = JSON.parse(localStorage.getItem(name));

    // create a div or any other element to display the feedback
    let feedbackItem = document.createElement("div");
    feedbackItem.classList.add("feedback-item");
    
    feedbackItem.innerHTML = `
      <hr>
      <p><strong>User:</strong> ${name}</p>
      <p><strong>Rating:</strong> ${feedbackData.rating}</p>
      <p><strong>Comments:</strong> ${feedbackData.comments}</p>
    `;
    
    // append the feedback item to the list
    feedbackList.appendChild(feedbackItem);
  }
}

window.onload = function() {
  // Display feedback when the page loads
  displayFeedback();

  // Set up the feedback form submission
  document.getElementById("feedbackForm").onsubmit = function(event) {
    event.preventDefault();  // Prevent page refresh
    storeFeedback();
    displayFeedback(); // re-display feedback after new one is added
  };
}