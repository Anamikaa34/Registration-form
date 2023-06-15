function submitForm(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
  
    // Display data
    var displayData = document.getElementById('displayData');
    displayData.innerHTML =
      '<h3>Registered Data:</h3>' +
      '<p><strong>Name:</strong> ' + name + '</p>' +
      '<p><strong>Email:</strong> ' + email + '</p>' +
      '<p><strong>Password:</strong> ' + password + '</p>';
  
    // Reset form
    document.getElementById('registrationForm').reset();
  }