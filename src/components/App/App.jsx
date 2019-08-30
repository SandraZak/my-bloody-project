import React from 'react';
import './App.scss';
import Container from '../Container/Container';
import Form from '../Form/Form';
import Logo from '../Logo/Logo';

class App extends React.Component{

    render = () => {
        return (
            <div className="app">
                <Container>
                    <Logo />
                    <Form />
                </Container>
            </div>
        );
    };

}

export default App;
