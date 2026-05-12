import React from 'react'
//import {useState} from 'react'
//import Header from './components/Header.jsx'

/*function App(){ 
  return <div>
    <Header />
  </div>
}

const App = () => {
  const [likes,setLikes] = React.useState(0);
  const [dislikes,setDislikes] = React.useState(0);
  const hLike = () => {
    setLikes(likes + 1); //likes++
  }
  const hDislike = () => {
    setDislikes(dislikes + 1);
  }
  return <div>
    <h1>Likes: {likes}</h1>
    <button onClick = {hLike}>Like</button>
    <button onClick = {hDislike}>Dislike</button>
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
}

export class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      likes: 0, dislikes: 0
    }
  }

  hLike = () => {
    this.setState({
      likes: this.state.likes + 1
    })
  }

  /*hDis = () => {
    if(this.state.likes>0){
      this.setState({
        likes: this.state.likes - 1
      })
    }
    else;
  }

  hDis = () => {
    this.setState({
      dislikes: this.state.dislikes + 1
    })
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

  render() {
    return <div>
      <button onClick={this.hLike}>
        <span className="material-symbols-outlined">
          thumb_up
        </span>
        {this.state.likes}
      </button>
      &nbsp;
      <button onClick={this.hDis}>
        <span className="material-symbols-outlined">
          thumb_down
        </span>
        {this.state.dislikes}
      </button>
    </div>
  }
}*/

const App = () => {
  const [reactions, setReactions] = React.useState({
    likes: 0,
    dislikes: 0
  });

  const [history, setHistory] = React.useState([]);

  const hLike = () => {
    setReactions ({
      ...reactions,
      likes: reactions.likes + 1
    });
    setHistory ([...history, 'L']);
  };

  const hDislike = () => {
    setReactions ({
      ...reactions,
      dislikes: reactions.dislikes + 1
    });
    setHistory ([...history, 'D']);
  };

  console.log(history);

  return <div>
    <button onClick={hLike}>
      <span className="material-symbols-outlined">
        thumb_up
      </span>
      {reactions.likes}
    </button>
    &nbsp;
    <button onClick={hDislike}>
      <span className="material-symbols-outlined">
        thumb_down
      </span>
      {reactions.dislikes}
    </button>
    <p>{history}</p>
  </div>
}

export default App;