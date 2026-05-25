import React from 'react'

const App = () => {

    const [count, setCount] = React.useState(0);
    
    // This code will fetch the recipes from the API every time the component renders, which is not ideal. We can use useEffect to control when the fetch happens.
    /*fetch('https://6a12d11d78d0434e0d5d82d0.mockapi.io/recipes')
    .then(response => response.json())
    .then(recipes => console.log(recipes));*/
    
    // The above code will run on every render, which is not ideal. We can use useEffect to control when the fetch happens.
    //without dependency array, the useEffect will run on every render, which is not ideal. We can use an empty dependency array to run the useEffect only once when the component mounts.
    /*React.useEffect(() => {
        fetch('https://6a12d11d78d0434e0d5d82d0.mockapi.io/recipes')
        .then(response => response.json())
        .then(recipes => console.log(recipes));
    });*/

    //with empty dependency array, the useEffect will run only once when the component mounts, which is ideal for fetching data from an API.
    React.useEffect(() => {
        fetch('https://6a12d11d78d0434e0d5d82d0.mockapi.io/recipes')
        .then(response => response.json())
        .then(recipes => console.log(recipes));
    }, []);

    //with dependency array, the useEffect will run every time the count state changes, which is not ideal for fetching data from an API. We can use an empty dependency array to run the useEffect only once when the component mounts.
    React.useEffect(() => {
        fetch('https://6a12d11d78d0434e0d5d82d0.mockapi.io/recipes')
        .then(response => response.json())
        .then(recipes => console.log(recipes));
    }, [count]);

    return <div>
        <button onClick={() => setCount(count + 1)}>Fetch API</button>
    </div>
}

export default App