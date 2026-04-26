import React from 'react'
import Header from './components/Header.jsx'

/*function App(){ 
  return <div>
    <Header />
  </div>
}*/

const App = () => {
  const [likes,setLikes] = React.useState(0);
  const hLike = () => {
    setLikes(likes + 1); //likes++
  }
  return <div>
    <h1>Likes: {likes}</h1>
    <button onClick = {hLike}>Like</button>
  </div>
}

export default App;