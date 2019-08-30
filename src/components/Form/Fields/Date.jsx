import React from 'react';

class Field extends React.Component{

    render = () => {
        return (
            <div className="field--date">
                <input
                    type="date"
                    value={this.props.value}
                    onChange={(e)=>this.props.onChange(e.target.value)}
                />
            </div>
        );
    };

}

export default Field;
