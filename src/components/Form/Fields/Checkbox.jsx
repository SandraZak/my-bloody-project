import React from 'react';

class Field extends React.Component{

    render = () => {
        return (
            <label className="field--checkbox">
                <input
                    className="field__input"
                    type="checkbox"
                    value={this.props.value}
                    onChange={(e)=>this.props.onChange(e.target.value)}
                />
                <span className="field__label">
                    { this.props.label }
                </span>
            </label>
        );
    };

}

export default Field;
