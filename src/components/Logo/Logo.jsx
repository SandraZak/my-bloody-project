import React from 'react';
import Logo from '../../assets/images/logo.jpg';

class App extends React.Component{

    render = () => {
        return (
            <img style={{width:"1200", height:"400px", display:"block", opacity:"0.7"}} src={Logo} />
        );
    };

}

export default App;
