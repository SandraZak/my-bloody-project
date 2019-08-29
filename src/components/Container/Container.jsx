import React from 'react';
import './Container.scss';

class Container extends React.Component{

    state = {
        giverGroup: null,
        recipient: null,
        lastBloodDonationDate: null
    };

    render = () => {
        return (
            <div className="container">
                { this.props.children }
            </div>
        );
    };

}

export default Container;
