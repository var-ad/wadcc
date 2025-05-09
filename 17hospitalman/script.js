let patientCount = 0;

document.getElementById('patientForm').addEventListener('submit', function (e) {
  e.preventDefault();

  // Optional: Validate fields manually if needed
  const name = document.getElementById('name').value.trim();
  const age = document.getElementById('age').value.trim();
  const gender = document.getElementById('gender').value;
  const disease = document.getElementById('disease').value.trim();

  if (!name || !age || !gender || !disease) {
    alert('Please fill out all fields.');
    return;
  }

  // Increment and update count
  patientCount++;
  document.getElementById('patientCount').innerText = patientCount;

  // Reset form
  document.getElementById('patientForm').reset();
  alert('Patient registered successfully!');
});
