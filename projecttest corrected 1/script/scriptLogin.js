const validUserName="admin";
const validPassword="password123";


  function login() {

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
  
    if (username === validUserName && password === validPassword) {
      alert("Login successful! Welcome, " + username + "!");
    } else {
      alert("Invalid username or password. Please try again.");
    }
  }
