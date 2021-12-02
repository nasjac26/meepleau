import { useState } from "react";
import { useNavigate } from 'react-router-dom';



function Signup({ setUser }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [password_confirmation, setPasswordConfirmation] = useState("");
    const navigate = useNavigate();

    

    function handleSignupSubmit(e) {
        e.preventDefault();
        fetch("/signup", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
        },
            body: JSON.stringify({
            username,
            password,
            password_confirmation
        }),
        }).then((r) => {
            if (r.ok) {
            r.json().then((user) => setUser(user));
            } else {
                r.json().then((errorData) => alert(errorData.errors));
                
                
            }
        });
        navigate('/')
    }

    return (  
        <div className="container registration-container mt-5">
            <div id="usernameHelp" class="form-text">Please choose a username and password for your <b>Meepleau Player Journal</b></div>

            <form onSubmit={handleSignupSubmit}>
                <div class="mb-3">
                    <label htmlfor="username" class="form-label">Username</label>
                    <input 
                        type="username" 
                        class="form-control" 
                        id="username"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}/>
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Password</label>
                    <input 
                        type="password" 
                        class="form-control" 
                        id="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        />
                </div>
                <div class="mb-3">
                    <label for="passwordConfirmation" class="form-label">Password Confirmation</label>
                    <input 
                        type="password" 
                        class="form-control" 
                        id="passwordConfirmation"
                        value={password_confirmation}
                        onChange={(event) => setPasswordConfirmation(event.target.value)}
                        />
                </div>
                <button type="submit" class="btn btn-primary">Signup</button>
            </form>
        </div>
        );
    }
    export default Signup;
