import React from 'react'

const App = () => {

    const [email,setEmail]=React.useState("rana.harpreet12@gmail.com");
    const [password,setPassword]=React.useState("qazsedcf");
    const hLogIn = (e) => {
        e.preventDefault();
        //console.log(e.target.email.value);
        console.log(email,password);
        //console.log(e.target.password.value);
        console.log("Form submitted successfully!");
        //reset the form
        setEmail("");
        setPassword("");

        e.target.email.focus();
    }
    return (
        <div>
            <h1>Log In</h1>
            <form onSubmit={hLogIn}>
                <div>
                    <input name="email" type="email" placeholder="email..." value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                &nbsp;
                <div>
                    <input name="password" type="password" placeholder="password..." value={password} onChange={(e) => setPassword(e.target.value)} required />
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