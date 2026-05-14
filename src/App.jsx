import React from 'react'

const App = () => {

    const [email,setEmail]=React.useState("");
    const [password,setPassword]=React.useState("");
    const hLogIn = (e) => {
        e.preventDefault();
        console.log(event.target.email.value);
        console.log(event.target.password.value);
        console.log("Form submitted successfully!");
    }
    return (
        <div>
            <h1>Log In</h1>
            <form onSubmit={hLogIn}>
                <div>
                    <input name="email" type="email" placeholder="email..." value={email} onChange={(e) => console.log(e.target.value)} />
                </div>
                &nbsp;
                <div>
                    <input name="password" type="password" placeholder="password..." />
                </div>
                &nbsp;
                <div>
                    <button type="submit">
                        Login
                    </button>
                </div>
            </form>
        </div>
    )
}

export default App;