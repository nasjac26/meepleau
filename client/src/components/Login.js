import { useState } from "react";
import { useNavigate } from 'react-router-dom';

function Login({ setUser }) {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        }).then((response) => {
            if (response.ok) {
                response.json().then((user) => setUser(user));
            }
        });
        navigate('/ourlibrary');
    }


    return (
        <div className="container registration-container mt-5">
            <div id="usernameHelp" class="form-text">Signin</div>

            <form onSubmit={handleSubmit}>
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
                <button type="submit" class="btn btn-primary">Login</button>
            </form>
        </div>
);
}

export default Login;
