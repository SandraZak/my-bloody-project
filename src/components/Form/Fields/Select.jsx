import React from 'react';
import './Select.scss';

class Field extends React.Component{

    optionClickHandler = (key) => {
        this.props.onChange(key);
    };

    getKeyByName = (name) => {
        if(this.props.options){
            for(let key in this.props.options){
                if(this.props.options[key] == name){
                    return key;
                }
            }
        }
        return null;
    };

    getNameByKey = (key) => {
        if(this.props.options){
            return this.props.options[key];
        }
        return null;
    };

    render = () => {

        let options = [];
        if(this.props.options){
            for(let key in this.props.options){
                let className = 'field__option';
                if(this.props.value == key){ className += '--active'; };
                options.push((
                    <div key={key} vaue={key} className={className} onClick={()=>this.optionClickHandler(key)}>
                        { this.props.options[key] }
                    </div>
                ));
            }
        }

        let value = this.getNameByKey([this.props.value]);

        return (

            <div className="field--select">
                <div
                    className="field__select"
                >
                    { options }
                </div>
            </div>
        );

    };

}

export default Field;
