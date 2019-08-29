import React from 'react';
import DateField from './Fields/Date';
import SelectField from './Fields/Select';
import blood from '../../scripts/bloodGroups';

class App extends React.Component{

    state = {
        giverGroup: null,
        recipientGroup: null,
        lastBloodDonationDate: null
    };

    handlers = {

        giverGroupChange: (value) => {
            this.setState({ giverGroup: value });
        },

        recipientGroupChange: (value) => {
            this.setState({ recipientGroup: value });
        },

        lastBloodDonationDateChange: (value) => {
            this.setState({ lastBloodDonationDate: value });
        },

    };

    getResult = () => {
        if( !this.state.giverGroup || !this.state.recipientGroup || !this.state.lastBloodDonationDate ){ return null; };
        let resGroup = blood.checkGroup(this.state.giverGroup, this.state.recipientGroup);
        let resDate = blood.checkDate(this.state.lastBloodDonationDate);
        return {
            msg: 'Jest ok, możesz oddać krew',
            result: true
        };
    };

    render = () => {

        let result = this.getResult();
        let msg = null;
        if(result && result.msg){ msg = result.msg;};

        return (
            <div className="form">
                <div className="form__row">
                    <div className="form__label">
                        Twoja grupa krwi:
                    </div>
                    <div className="form__control">
                        <SelectField
                            option={blood.avaible}
                            onChange={this.handlers.giverGroupChange}
                            value={this.state.giverGroup}
                        />
                    </div>
                </div>
                <div className="form__row">
                    <div className="form__label">
                        Grupa krwi biorcy:
                    </div>
                    <div className="form__control">
                        <SelectField
                            option={blood.avaible}
                            onChange={this.handlers.recipientGroupChange}
                            value={this.state.recipientGroup}
                        />
                    </div>
                </div>
                <div className="form__row">
                    <div className="form__label">
                        Data ostatniego oddania krwi:
                    </div>
                    <div className="form__control">
                        <DateField
                            value={this.state.lastBloodDonationDate}
                            onChange={this.handlers.lastBloodDonationDateChange}
                        />
                    </div>
                </div>
                <div className="form__row">
                    <div className="form__label">
                        Status:
                    </div>
                    <div className="form__control">
                        <h1>
                            { msg }
                        </h1>
                    </div>
                </div>
            </div>
        );
    };

}

export default App;
