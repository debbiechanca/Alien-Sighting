// Get references to the tbody element, input field and button
var $tbody = document.querySelector("tbody");
var $stateInput = document.querySelector("#state");
var $searchBtn = document.querySelector("#search");

// Add an event listener to the searchButton, call handleSearchButtonClick when clicked
$searchBtn.addEventListener("click", handleSearchButtonClick);

// Set filtered UFO data to UFO data initially
var filteredUFOData = dataSet;

// renderTable renders the filteredUFOData to the tbody
function renderTable() {
  $tbody.innerHTML = "";
  for (var i = 0; i < filteredUFOData.length; i++) {
    // Get get the current UFO object and its fields
    var ufoData = filteredUFOData[i];
    var fields = Object.keys(ufoData);

    // Create a new row in the tbody, set the index to be i + startingIndex
    var $row = $tbody.insertRow(i);

    for (var j = 0; j < fields.length; j++) {
      // For every field in the UFOData object, create a new cell at set its inner text to be the current value at the current UFO data's field
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = ufoData[field];
    }
  }
}

function handleSearchButtonClick() {
  // Format the user's search by removing leading and trailing whitespace, lowercase the string
  var filterState = $stateInput.value.trim().toLowerCase();

  // Set filteredAddresses to an array of all addresses whose "state" matches the filter
  filteredUFOData = dataSet.filter(function(ufoData) {
    var ufoState = ufoData.state.toLowerCase();

    // If true, add the address to the filteredAddresses, otherwise don't add it to filteredAddresses
    return ufoState === filterState;
  });
  renderTable();
}
// Render the table for the first time on page load
renderTable();
