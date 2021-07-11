import React from 'react';
import axios from 'axios';
import './App.css';

const getData = (user) => {
  return axios.get(`https://api.github.com/users/${user}`)
    .then(res => {
      return (res.data);
    });
}

class App extends React.Component {
  state = {
    user: []
  };

  componentDidMount() {
    console.log("App");
    setTimeout(() => {
      this.setState({
        user: ""
      });
    }, 3000);
  };


  render() {
    console.log('App: Renders Dom');
    return (
      <div className="App">
        {this.state.user.length === 0 ? <div>Loading</div> : <GitCard user={this.state.user} />}
      <h1>Hi</h1>
      </div>
    )
  }
}

  export default App;
