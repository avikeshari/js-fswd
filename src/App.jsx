import React from 'react'
import './App.css'
import { FaHeart } from 'react-icons/fa'
import { CiHeart } from 'react-icons/ci'

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
    /*const formStyle = {
        backgroundColor: "turquoise"
    }*/
    /*return (
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
}*/

const App = () => {

    /*const name = 'Avi Keshari';
    const number = 18;
    let isOkay = false;
    let types = ['Sniper', ' Assault', ' LMG', ' SMG', ' Shotgun', ' Marksman', ' Pistol']

    return <div>
        <h1>Hello {name}</h1>
        <h2>You have been allotted Serial No. {number}</h2>
        <h3>If you're {isOkay?'okay':'not okay'} with this, just tell us!</h3>
        <h4>We know you're trained in {types.join()}</h4>
    </div>*/

    /*const menu = [
        'Biryani',
        'Pulao',
        'Fried Rice',
        'Noodles',
        'Pasta',
        'Pizza',
        'Burger',
        'Sandwich',
        'Salad',
        'Pizza'
    ];*/

    const recipes = [
        {
            name: 'Pasta',
            ingredients: ['Pasta', 'Tomato Sauce', 'Cheese'],
            author: 'John Doe',
            cookingTime: '30 minutes',
            difficulty: 'Easy',
            fav: true
        },
        {
            name: 'Chicken Curry',
            ingredients: ['Chicken', 'Curry Powder', 'Coconut Milk'],
            author: 'Jane Smith',
            cookingTime: '45 minutes',
            difficulty: 'Medium',
            fav: true
        },
        {
            name: 'Chocolate Cake',
            ingredients: ['Flour', 'Sugar', 'Cocoa Powder', 'Eggs'],
            author: 'Emily Johnson',
            cookingTime: '1 hour',
            difficulty: 'Hard',
            fav: false
        }
    ];

    /*const list = [];

    menu.forEach (menuItem => {
        list.push(
            <li>{menuItem}</li>
        )
    });*/

    return <div>
        <h1>Menu</h1>
        <ul>
            {recipes.map((data, index) => <li key={index}>
                <div className='card'>
                    <header>
                        <h2>{data.name}</h2>
                        <span>
                            {
                                data.fav?<FaHeart />:<CiHeart />
                            }
                        </span>
                    </header>
                    <hr></hr>
                    <p><strong>Author:</strong>{data.author}</p>
                    <p><strong>Preparation Time:</strong>{data.cookingTime}</p>
                    <p><strong>Difficulty:</strong>{data.difficulty}</p>
                    <p><strong>Ingredients:</strong></p>
                    <ul>
                        {
                            data.ingredients.map((items,i) => <li key={i}>{items}</li>)
                        }
                    </ul>
                    <p><strong>Is it Favourite?</strong>{data.fav?<FaHeart />:<CiHeart />}</p>
                </div>
            </li>)}
        </ul>
    </div>

}

export default App;