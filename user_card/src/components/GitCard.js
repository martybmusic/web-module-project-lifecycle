import React from 'react';
import GitUser from './GitUser'

class GitCard extends React.Component {
    componentDidMount() {
        console.log("GitCard: Component Mounts");
    }

    render() {
        console.log("GitCard: Renders DOM");
        return (
            <div>
                <GitUser />
                )}
            </div>
        )
    }
}

export default GitCard;