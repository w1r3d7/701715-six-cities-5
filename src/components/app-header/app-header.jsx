import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {getAuthStatus, getUserInformation} from '../../store/selectors';
import {AuthorizationStatus, RouteUrl} from '../../constants/constants';

const SIGN_IN_TEXT = `Sign in`;

const AppHeader = ({authStatus, userInfo: {email}}) => {
  const isLogin = authStatus === AuthorizationStatus.AUTH;

  const route = isLogin ? RouteUrl.FAVORITES : RouteUrl.LOGIN;

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link to={RouteUrl.HOME} className="header__logo-link">
              <img
                className="header__logo"
                src="/img/logo.svg"
                alt="6 cities logo"
                width="81"
                height="41"
              />
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <Link className="header__nav-link header__nav-link--profile" to={route}>
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                  </div>
                  <span className="header__user-name user__name">{email || SIGN_IN_TEXT}</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

AppHeader.propTypes = {
  userInfo: PropTypes.shape({
    email: PropTypes.string
  }).isRequired,
  authStatus: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  authStatus: getAuthStatus(state),
  userInfo: getUserInformation(state)
});

export {AppHeader};
export default connect(mapStateToProps)(AppHeader);
