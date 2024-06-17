import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isError, setIsError] = useState(false);
 
  const handleSubmit = (event) => {
    event.preventDefault();
 
    // Check if passwords match
    if (password !== confirmPassword) {
      setIsError(true);
      return;
    }
 
    // Store user data in localStorage
    const userData = {
      username,
      email,
      role,
      password,
      confirmPassword,
    };
    event.preventDefault();

    axios.post('http://localhost:8081/register/addUser', userData)
    .then((res) => {
        console.log(res.data);
    })
    .catch((error) => {
        console.error("Error saving user data:", error);
    });
    localStorage.setItem("userData", JSON.stringify(userData));
    console.log("User Data:", userData);
 
    // Reset form fields
    setUsername("");
    setEmail("");
    setRole("");
    setPassword("");
    setConfirmPassword("");
    setIsError(false);
  };
 
  return (
<div className="register-container">
<center>
<form className="register-form" onSubmit={handleSubmit}>
<h2 className="font-sans text-center text-4xl mt-10 mb-2 font-bold">
            Registration Form
</h2>
<p className="text-center capitalize mb-2 hover:uppercase">
            Fill the below registration form
</p>
 
          <TextField
            className="px-2"
            id="outlined-basic"
            label="Username"
            variant="outlined"
            type="text"
            name="username"
            inputProps={{
              maxLength: 15,
            }}
            required
            placeholder="Username"
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
<br />
 
          <div className="p">
<select
              className="px-2"
              id="outlined-basic"
              label="Role"
              variant="outlined"
              type="select"
              style={{ padding: "20px" }}
              required
              placeholder="Role"
              onChange={(event) => {
                setRole(event.target.value);
              }}
>
<option value="">--Please choose your role--</option>
<option value="User">User</option>
<option value="Admin">Admin</option>
</select>
</div>
 
          <TextField
            className="px-2"
            id="outlined-basic"
            label="Email"
            variant="outlined"
            type="email"
            required
            placeholder="Email"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
 
          <br />
 
          <TextField
            className="px-2"
            id="outlined-basic"
            label="Password"
            variant="outlined"
            type="password"
            name="password"
            inputProps={{
              maxLength: 15,
            }}
            required
            placeholder="Password"
            onChange={(event) => {
              setPassword(event.target.value);
              setIsError(false); // Reset error state when user types in password field
            }}
          />
 
          <br />
<TextField
            onPaste={(event) => {
              event.preventDefault();
              return false;
            }}
            onCopy={(event) => {
              event.preventDefault();
              return false;
            }}
            className="px-2"
            id="outlined-basic"
            label="Confirm Password"
            variant="outlined"
            type="password"
            name="confirm_password"
            inputProps={{
              maxLength: 15,
            }}
            required
            placeholder="Confirm Password"
            onChange={(event) => {
              setConfirmPassword(event.target.value);
              setIsError(false); // Reset error state when user types in confirmPassword field
            }}
          />
 
          {/* Display error message if passwords do not match */}
          {isError && (
<p style={{ color: "red", marginTop: "5px" }}>
              Passwords do not match.
</p>
          )}
 
          <br />
          <br/>
<Button variant="contained" type="submit" >
            REGISTER
</Button>
<br />
 
          <Link className="py-3 text-center" to="/signinForm">
            Already have an account?{" "}
<p className="text-blue-600">Click to Login</p>
</Link>
</form>
</center>
</div>
  );
}
 
export default Register;