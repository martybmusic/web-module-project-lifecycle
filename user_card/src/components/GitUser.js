import React from 'react';

class GitUser extends React.Component {
    componentDidMount() {
        // console.log(`GitUser: ${this.props.user.name} Mounts`);
    }
    render() {
        const { user } = this.props;
        // console.log(`GitUser: ${this.props.user.name} Renders`);
        return (
            <div className="user">
                <img src={user.avatar_url} alt={user.login} />
                <div>
                    <h3>{user.name}</h3>
                    <p>
                    {user.login && user.location && user.public_repos && user.blog}
                    </p>
                </div>

            </div>
        )
    }
}

export default GitUser