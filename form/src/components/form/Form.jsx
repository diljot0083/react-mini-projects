import { useState } from "react"

const Form = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {

        e.preventDefault();

        if (!username.trim() || !password.trim()) {
            alert("Please fill details carefully")
            return;
        }

        const newUser = { username, password };
        const existingUser = JSON.parse(localStorage.getItem('users')) || [];
        existingUser.push(newUser);
        localStorage.setItem('users', JSON.stringify(existingUser));

        alert("Form Submitted Successfully")

        setUsername("");
        setPassword("");
    }

    return (
        <form onSubmit={handleSubmit}>

            <input
                type="text"
                placeholder="Enter Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            /> <br /> <br />

            <input
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            /> <br /> <br />

            <button type="submit" >Submit</button>

        </form>
    )
}

export default Form