import React     from 'react';
import TelaLogin from './TelaLogin';

export default class TelaCadastro extends React.Component {

constructor() {
    super()
    this.state ={
        user: null,
        pswd: null,
    };
}

updateUser(){
    this.setState({
        user: this.state.user}
    );
}

updatePswd(){
    this.setState({
        pswd: this.state.pswd}
    );
}

      render (){
        return (
          <div className="container">
            <TelaLogin
              updateUser={this.updateUser}
              updatePswd={this.updatePswd} /> 
          </div>    
        );
      }
    }