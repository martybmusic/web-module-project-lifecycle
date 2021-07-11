import React from 'react';

class GitCard extends React.Component {
    componentDidMount() {
        console.log("GitCard: Component Mounts");
    }

    render() {
        console.log("GitCard: Renders DOM");
        return (
            <div>
                {this.props.user.map(user => (
                    <GitUser key={user.id} user={user} />
                ))}
            </div>
        )
    }
}

export default GitCard;