import React from 'react'
import './App.css'

/*const App = () => {

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
            <form onSubmit={hLogIn}  className="fL">
                <h1>Log In</h1>
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
}*/

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
    /*const formStyle = {
        backgroundColor: "turquoise"
    }*/
    return (
        <div>
            <form onSubmit={hLogIn} className="flex flex-col gap-4 w-full mx-auto mt-10 border border-blue-300 rounded p-8 shadow-lg">
                <h1 className="text-2xl font-bold text-center">Log In</h1>
                <div className="flex flex-col gap-2">
                    <input name="email" type="email" placeholder="email..." value={email} onChange={(e) => setEmail(e.target.value)} className="border border-gray-300 rounded px-3 py-2 w-full" required />
                </div>
                &nbsp;
                <div>
                    <input name="password" type="password" placeholder="password..." value={password} onChange={(e) => setPassword(e.target.value)} className="border border-gray-300 rounded px-3 py-2 w-full" required />
                </div>
                &nbsp;
                <div>
                    <button type="submit" className="bg-blue-500 text-white rounded px-3 py-2 w-full">
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