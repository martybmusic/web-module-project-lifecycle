import React from 'react';

class GitUser extends React.Component {
    componentDidMount() {
        console.log(`GitUser: Mounts`);
    }
    render() {
        console.log(`GitUser: ${this.props.userData} Renders`);
        return (this.props.userData?
            <div className="user">
                <img src={this.props.userData.avatar_url} alt={this.props.userData.login} />
                <div>
                    <h2>{this.props.userData.name}</h2>
                    <p>{this.props.userData.login}</p> 
                    <p>{this.props.userData.location}</p> 
                    <p>Repositories: {this.props.userData.public_repos}</p>
                    <h4>{this.props.userData.blog}</h4>
                </div>

            </div>: <div><p>"no user found"</p></div>
            )
    }
}

export default GitUser