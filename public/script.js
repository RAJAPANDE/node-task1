document.getElementById('userForm').addEventListener('submit', async function (e) {
    e.preventDefault();
  
    const formData = new FormData(e.target);
    const user = Object.fromEntries(formData.entries());
  
    try {
      const response = await fetch('http://localhost:5000/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
      });
  
      const result = await response.json();
      alert(result.message || 'User data saved successfully');
    } catch (error) {
      alert('Error: ' + error.message);
    }
  });
  
  document.getElementById('fetchData').addEventListener('click', async function () {
    try {
      const response = await fetch('http://localhost:5000/api/users');
      const users = await response.json();
  
      document.getElementById('userData').textContent = JSON.stringify(users, null, 2);
    } catch (error) {
      alert('Error: ' + error.message);
    }
  });
  