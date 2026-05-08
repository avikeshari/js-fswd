import React from 'react'
//import Header from './components/Header.jsx'

/*function App(){ 
  return <div>
    <Header />
  </div>
}

const App = () => {
  const [likes,setLikes] = React.useState(0);
  const hLike = () => {
    setLikes(likes + 1); //likes++
  }
  return <div>
    <h1>Likes: {likes}</h1>
    <button onClick = {hLike}>Like</button>
  </div>
}*/

/*export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: 0
    }
  }

  hLike = () => {
    this.setState({
      likes: this.state.likes + 1
    })
  }

  render() {
    return <div>
      <h1>Likes: {this.state.likes}</h1>
      <button onClick={this.hLike}>Like</button>
    </div>
  }
}*/

/*const App = () => {
  let likes = 0;

  const lHandler = () => {
    likes++;
  };

  return <div>
    <h1>Likes: {likes}</h1>
    <button onClick={lHandler}>Like</button>
  </div>
}*/

export class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      likes: 0
    }
  }

  hLike = () => {
    this.setState({
      likes: this.state.likes + 1
    })
  }

  hDis = () => {
    if(this.state.likes>0){
      this.setState({
        likes: this.state.likes - 1
      })
    }
    else;
  }

  render() {
    return <div>
      <h1>Likes: {this.state.likes}</h1>
      <button onClick={this.hLike}>
        <span className="material-symbols-outlined">
          thumb_up
        </span>
      </button>
      &nbsp;
      <button onClick={this.hDis}>
        <span className="material-symbols-outlined">
          thumb_down
        </span>
      </button>
    </div>
  }
}

export default App;