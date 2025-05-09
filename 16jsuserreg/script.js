document.getElementById('registrationForm')?.addEventListener('submit', function (e) {
  e.preventDefault();

  const firstName = document.getElementById('firstName').value.trim();
  const lastName = document.getElementById('lastName').value.trim();
  const dob = document.getElementById('dob').value;
  const gender = document.querySelector('input[name="gender"]:checked')?.value;
  const mobile = document.getElementById('mobile').value.trim();
  const email = document.getElementById('email').value.trim();

  // Validate mobile number
  if (!/^\d{10}$/.test(mobile)) {
    alert("Mobile number must be exactly 10 digits.");
    return;
  }

  // Validate email format
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    alert("Invalid email format.");
    return;
  }

  const user = { firstName, lastName, dob, gender, mobile, email };

  // Save to localStorage
  const users = JSON.parse(localStorage.getItem('users')) || [];
  users.push(user);
  localStorage.setItem('users', JSON.stringify(users));

  alert("User registered successfully!");
  document.getElementById('registrationForm').reset();
});
