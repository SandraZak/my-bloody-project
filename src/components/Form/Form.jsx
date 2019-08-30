import React from 'react';
import DateField from './Fields/Date';
import SelectField from './Fields/Select';
import Checkbox from './Fields/Checkbox';
import blood from '../../scripts/bloodGroups';
import './Form.scss';

class App extends React.Component{

    state = {
        giverGroup: null,
        recipientGroup: null,
        lastBloodDonationDate: null,
        isNextDonation: false,
        sex: null
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

        nextDonationChange: () => {
            this.setState({ isNextDonation: !this.state.isNextDonation });
        },

        sexChange: (value) => {
            this.setState({ sex: value });
        }

    };

    checkState = () => {
        let dateValidate = true;
        if(this.state.isNextDonation){ dateValidate = this.state.lastBloodDonationDate; };
        return this.state.giverGroup && this.state.recipientGroup && dateValidate && this.state.sex;
    };

    checkDate = () => {
        if(this.state.isNextDonation){
            return blood.checkDate(this.state.lastBloodDonationDate,this.state.sex);
        };
        return true;
    };

    checkErrors = () => {
        if( !this.state.giverGroup || !this.state.recipientGroup ){ return null; };
        let resGroup = blood.checkGroup(this.state.giverGroup, this.state.recipientGroup);
        let resDate = this.checkDate();
        if( !resGroup ){
            return 'Nie możesz oddać krwi temu biorcy.';
        }else if( !resDate ){
            return 'Nie możesz jeszcze oddać krwi temu biorcy.';
        }
        return null;
    };

    render = () => {
        let msg = null;
        let classAlert = '';
        const errorMsg = this.checkErrors();
        const resultState = this.checkState();
        if( !resultState ){
            msg = 'Wypełnij wszystkie pola';
            classAlert = '--info';
        }else if(errorMsg){
            msg = errorMsg;
            classAlert = '--error';
        }else{
            msg = 'Możesz oddać krew.';
            classAlert = '--success';
        }
        let dateField = null;
        if( this.state.isNextDonation ){
            dateField = (
                <>
                    <div className="form__label">
                        Data ostatniego oddania krwi:
                    </div>
                    <div className="form__control">
                        <DateField
                            value={this.state.lastBloodDonationDate}
                            onChange={this.handlers.lastBloodDonationDateChange}
                        />
                    </div>
                </>
            );
        }

        return (
            <div className="form">
                <div className="form__row">
                    <div className="form__control">
                        <Checkbox
                            label="Oddawałem już krew"
                            value={this.state.isNextDonation}
                            onChange={this.handlers.nextDonationChange}
                        />
                    </div>
                    { dateField }
                </div>
                <div className="form__row">
                    <div className="form__label">
                        Twoja Płeć
                    </div>
                    <div className="form__control">
                        <SelectField
                            options={blood.sex}
                            onChange={this.handlers.sexChange}
                            value={this.state.sex}
                        />
                    </div>
                </div>
                <div className="form__row">
                    <div className="form__label">
                        Twoja grupa krwi:
                    </div>
                    <div className="form__control">
                        <SelectField
                            options={blood.avaible}
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
                            options={blood.avaible}
                            onChange={this.handlers.recipientGroupChange}
                            value={this.state.recipientGroup}
                        />
                    </div>
                </div>
                <div className="form__row">
                    <div className="form__label">
                        Status:
                    </div>
                    <div className={"form__control"+classAlert}>
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
