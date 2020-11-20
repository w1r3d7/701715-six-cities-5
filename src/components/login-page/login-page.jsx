import React, {createRef, PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {login} from '../../store/user/api-actions';

class LoginPage extends PureComponent {
  constructor(props) {
    super(props);

    this.emailRef = createRef();
    this.passwordRef = createRef();

    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
  }

  handleLoginSubmit(evt) {
    evt.preventDefault();

    const {loginAction} = this.props;

    const authInfo = {
      email: this.emailRef.current.value,
      password: this.passwordRef.current.value,
    };

    loginAction(authInfo);
  }


  render() {
    return (
      <div className="page page--gray page--login">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <Link className="header__logo-link" to={`/`}>
                  <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
                </Link>
              </div>
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <Link className="header__nav-link header__nav-link--profile" to={`/favorites`}>
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__login">Sign in</span>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>

        <main className="page__main page__main--login">
          <div className="page__login-container container">
            <section className="login">
              <h1 className="login__title">Sign in</h1>
              <form className="login__form form" action="#" method="post" onSubmit={this.handleLoginSubmit}>
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden">E-mail</label>
                  <input
                    className="login__input form__input"
                    type="email"
                    name="email"
                    placeholder="Email"
                    required=""
                    ref={this.emailRef}
                  />
                </div>
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden">Password</label>
                  <input
                    className="login__input form__input"
                    type="password"
                    name="password"
                    placeholder="Password"
                    required=""
                    ref={this.passwordRef}
                  />
                </div>
                <button className="login__submit form__submit button" type="submit">Sign in</button>
              </form>
            </section>
            <section className="locations locations--login locations--current">
              <div className="locations__item">
                <a className="locations__item-link" href="#">
                  <span>Amsterdam</span>
                </a>
              </div>
            </section>
          </div>
        </main>
      </div>
    );
  }
}

LoginPage.propTypes = {
  loginAction: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  loginAction: (authInfo) => dispatch(login(authInfo))
});

export {LoginPage};
export default connect(null, mapDispatchToProps)(LoginPage);
