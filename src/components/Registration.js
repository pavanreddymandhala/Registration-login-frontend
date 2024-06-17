import axios from 'axios';
import React, { useState } from 'react'
function Registration(){
    const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);
 
  const userData = {
    username,
    email,
    role,
    password,
    confirmPassword,
  };
  const changeName=(e)=>{
    setUsername(e.target.value)
  }
  const changeEmail=(e)=>{
    setEmail(e.target.value)
  }
  const changeRole=(e)=>{
    setRole(e.target.value)
  }
  const changePass=(e)=>{
    setPassword(e.target.value)
    setPasswordsMatch(e.target.value === confirmPassword);
  }
  const confirmPass=(e)=>{
    setConfirmPassword(e.target.value)
    setPasswordsMatch(e.target.value === password);
  }
 
  const handleSubmit=(e)=>{
    if (password !== confirmPassword) {
        setPasswordsMatch(false);
        return;
      }
   e.prevent.default()
    axios.post('http://localhost:8081/register/addUser',userData).then(response=>console.log(response.data));
  }
 
  return(
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor='userName'>Name</label>
            <input type="text"
                id="userName"
                value={username}
                onChange={changeName}
            />
            <br/>
             <label htmlFor='email'>Email</label>
            <input type="text"
                id="email"
                value={email}
                onChange={changeEmail}
            />
            <br/>
             <label htmlFor='role'>Role</label>
            <input type="text"
                id="role"
                value={role}
                onChange={changeRole}
            />
            <br/>
            <label htmlFor='password'>Password</label>
            <input type="text"
                id="password"
                value={password}
                onChange={changePass}
            />
            <br/>
            <label htmlFor='confirmpassword'>Confirm Password</label>
            <input type="text"
                id="confirmPassword"
                value={confirmPassword}
                onChange={confirmPass}
            />
            <br/>
            {passwordsMatch ? (
        <span style={{ color: 'green' }}>Passwords match!</span>
      ) : (
        <span style={{ color: 'red' }}>Passwords do not match!</span>
      )}
           
            <div>
                <button type="Submit">Register</button>
            </div>
        </form>
    </div>
  )
 
  }
 
export default Registration;