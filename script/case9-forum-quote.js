//CASE 9: FETCHING AND DISPLAYING ENTERNAL DATA (AJAX


// create an XMLHttpRequest object
let xhr = false;

// check for browser support for AJAX
if (window.XMLHttpRequest) {
  // if browser supports, innitializa the XMKHttpRequest object
  xhr = new XMLHttpRequest();
} else if (window.ActiveXObject) {
  //if it doesnt support,  innitializa the ActiveXObject object
  xhr = new ActiveXObject('Microsoft.XMLHTTP');
}

// handle data download from the server
function getData(dataSource, divID) {
  if (xhr) {
    // get the div where we want to display the quote
    let obj = document.getElementById(divID);

    // open it
    xhr.open('GET', dataSource, true);

    // pass data to the server using AJAX
    xhr.onreadystatechange = function () {
      // if the request is complete and successful since it satisfied 2 conditions
      if (xhr.readyState == 4 && xhr.status == 200) { 
        // split the response text by new lines
        let quotes = xhr.responseText.split('\n'); 
        // pick random quote
        let randomQuote = quotes[Math.floor(Math.random() * quotes.length)]; 
        
        // insert the randomly selected quote into the target div
        obj.innerHTML = `<h5>${randomQuote}</h5>`;
      }
    };

    // send the request
    xhr.send();
  } else {
    // error message if there an error
    console.error('Browser does not support XMLHttpRequest or ActiveXObject');
  }
}