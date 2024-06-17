import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";

function Signin(){
    const [id, setId] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isError, setIsError] = useState(false);
 

const handleSubmit = (event) => {
    event.preventDefault();
 
    
    // Store user data in localStorage
    const userData = {
      id,
      email,
      password,
    
    };
    axios.post('http://localhost:8081/login/login'+id, userData)
    .then((res) => {
        console.log(res.data);
        alert("LOGIN SUCCESFULL")
    })
    .catch((error) => {
        console.error("Error saving user data:", error);
    });
    localStorage.setItem("userData", JSON.stringify(userData));
    console.log("User Data:", userData);
 
    // Reset form fields
    
    setEmail("");
    setPassword("");
    setIsError(false);
    
  };
  return (
    <div className="signin-container">
    <center>
    <form className="Signin-form" onSubmit={handleSubmit}>
    <h2 className="font-sans text-center text-4xl mt-10 mb-2 font-bold">
                Signin Form
    </h2>  
    <p className="text-center capitalize mb-2 hover:uppercase">
                Fill the below Signin form
    </p>
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
          <br/>
          <br/>
          <Button variant="contained" type="submit" >Signin</Button>
    </form>
</center>
</div>
  );
}
 
export default Signin;