import React from 'react'
import './App.css'

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
    const formStyle = {
        backgroundColor: "turquoise"
    }
    return (
        <div>
            <h1>Log In</h1>
            <form onSubmit={hLogIn} style={/*{display:"flex", flexDirection:"column", gap:"50", border:"1px solid red", padding:"10px"}*/formStyle}>
                <div>
                    <input name="email" type="email" placeholder="email..." value={email} onChange={(e) => setEmail(e.target.value)} style={{width:"100%"}} required />
                </div>
                &nbsp;
                <div>
                    <input name="password" type="password" placeholder="password..." value={password} onChange={(e) => setPassword(e.target.value)} style={{width:"100%"}} required />
                </div>
                &nbsp;
                <div>
                    <button type="submit" className="bL">
                        Login
                    </button>
                </div>
            </form>
        </div>
    )
}

/*const App = () => {
    return <div>
        App
    </div>
}*/

export default App;