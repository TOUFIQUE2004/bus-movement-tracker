document.getElementById('bus-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const busNumber = document.getElementById('bus-number').value;
    const departurePlace = document.getElementById('departure-place').value;
    const arrivalPlace = document.getElementById('arrival-place').value;
    const departureTime = document.getElementById('departure-time').value;
    const arrivalTime = document.getElementById('arrival-time').value;

    // Create a new row
    const table = document.getElementById('bus-table').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    // Insert cells
    newRow.insertCell(0).textContent = busNumber;
    newRow.insertCell(1).textContent = departurePlace;
    newRow.insertCell(2).textContent = arrivalPlace;
    newRow.insertCell(3).textContent = departureTime;
    newRow.insertCell(4).textContent = arrivalTime;

    // Clear form
    document.getElementById('bus-form').reset();

    // Display thank you message
    alert('Thank you for your contribution!');
});
