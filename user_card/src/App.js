import React from 'react';
import axios from 'axios';
import GitCard from './components/GitCard'
import './App.css';

const getData = (user) => {
  return axios.get(`https://api.github.com/users/${user}`)
    .then(res => {
      return (res.data);
    });
}

class App extends React.Component {
  state = {
    user: [],
    currentUser: 'martybmusic'
  };

  componentDidMount() {
    console.log("App: Component Mounts");
    getData(this.state.currentUser)
      .then(res => {
        this.setState({
          user: res.data
        });
      })
  };

  componentDidUpdate(prevProps, prevState) {
    if(prevState.user !== this.state.user) {
      if(this.state.user === 'test') {
        getData('tetondan')
        .then(res => {
          this.setState({
            user: res.data
          })
        })
        .catch(err => console.log(err))
      }
    }
  }

  handleChange = (e) => {
    this.setState({
      user: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    getData(this.state.user)
      .then(res => {
        this.setState({
          user: res.data
        })
      })
      .catch(err => console.log(err))
  }


  render() {
    console.log('App: Renders Dom');
    return (
      <div className="App">
        <h1>Search GitHub users</h1>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} type="text"/>
          <button>View</button>
        </form>
        <GitCard user={this.state.user} />}
      <h1>Hi</h1>
      </div>
    )
  }
}

  export default App;
