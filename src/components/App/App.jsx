import React from 'react';
import './App.scss';
import Container from '../Container/Container';
import Form from '../Form/Form';

class App extends React.Component{

    render = () => {
        return (
            <div className="app">
                <Container>
                    <Form />
                </Container>
            </div>
        );
    };

}

export default App;
