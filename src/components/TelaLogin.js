import React     from 'react';
import UserLogin from '../services/UserLogin';

export default class TelaLogin extends React.Component {

  handleSubmit() {
    e.preventDefault();

    validatePswd: value => {
            var isValid = {status:'success', message:''};
            if(this.refs.password.value.length < 6){
              isValid.status = 'error';
              isValid.message = 'Senha deve ter 6 digitos';
              console.log(isValid);
            }
            return isValid
            console.log(isValid);
};

    UserLogin.getByUserLogin(this.refs.username.value, this.refs.password.value)
         .then(function(response) {
          this.props.updateUser(response),
          this.props.updatePswd(response);
    }.bind(this));
  };
  
  render() {
    return (
      <div>

        <header>
          <div className="center">
            <img src="img/ole-logo.png" className="logo-ole" />
          </div>
        </header>

        <section className="box-login" id="login">
          <div className="center">
            <form method="" action="" className="form-login" id="form-login" onSubmit={this.handleSubmit}>
              <h6>LOGIN</h6>
              <div className="row row-input">
                <input type="number" min="6" max="6" required ref="username" className="" id="" name="usuario" placeholder="NUMBER"/>
              </div>
              <div className="row row-input">
                <input type="password" min="11" max="11" required ref="password" className="" id="" name="senha" placeholder="SENHA" />
              </div>
              <div className="row">
                <a href="" className="esqueci-senha">Esqueci minha senha</a>
              </div>
              <div className="row row-input">
                <button id="">ENTRAR</button>
              </div>
            </form>
          </div>
        </section>

        <div className="ct-footer">
          <footer>
            <div className="center">
              <img src="img/santander-footer-1x.png" />
            </div>
          </footer>
        </div>

      </div>
          );
        }
       };

TelaLogin.propTypes = {
  updateUser: React.PropTypes.func,
  updatePswd: React.PropTypes.func,
};

