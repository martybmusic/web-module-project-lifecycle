import React from 'react';
import axios from 'axios';
import GitUser from './components/GitUser'
import './App.css';


class App extends React.Component {
  state = {
    user: '',
    currentUser: 'martybmusic',
    userData: []
  };

  getData = (user) => {
    axios.get(`https://api.github.com/users/${user}`)
      .then(res => this.setState({
        ...this.state,
        user: '',
        userData: res.data}))
  }
  

componentDidMount(){
  this.getData(this.state.currentUser)
};

  // componentDidUpdate(prevProps, prevState) {
  //   if(prevState.user !== this.state.user) {
  //     if(this.state.user === 'test') {
  //       getData('tetondan')
  //       .then(res => {
  //         this.setState({
  //           ...this.state,
  //           user: '',
  //           userData: res.data
  //         })
  //       })
  //       .catch(err => console.log(err))
  //     }
  //   }
  // }

  handleChange = (e) => {
    this.setState({
      user: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.getData(this.state.user)

  }


  render() {
    console.log('App: Renders Dom');
    return (
      <div className="App">
        <h3>Search GitHub users</h3>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} type="text" user={this.state.user}/>
          <button>View</button>
        </form>
        <GitUser userData={this.state.userData} />}
      </div>
    )
  }
}

  export default App;
