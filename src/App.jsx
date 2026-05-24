import React from 'react'

const App = () => {

    const [count, setCount] = React.useState(0);

    fetch('https://6a12d11d78d0434e0d5d82d0.mockapi.io/recipes')
    .then(response => response.json())
    .then(recipes => console.log(recipes));

    return <div>
        <button onClick={() => setCount(count + 1)}>Fetch API</button>
    </div>
}

export default App