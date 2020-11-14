import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {AuthorizationStatus, BOOKMARK_ACTIVE_CLASS, RouteUrl} from '../../constants';
import {getRatingInPercentage} from '../../utils';
import {OFFER_PROP_TYPES} from '../../types';
import {getAuthStatus} from '../../store/selectors';
import {browserHistory} from '../../browser-history';


const PlaceCard = ({offer, cardType, authStatus}) => {

  const {
    id,
    type,
    price,
    description,
    isInBookmark,
    rating
  } = offer;

  const handleButtonClick = (evt) => {
    evt.preventDefault();

    if (authStatus === AuthorizationStatus.NO_AUTH) {
      browserHistory.push(RouteUrl.LOGIN);
      return;
    }


  };

  return (
    <div className={`${cardType} place-card__info`}>
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">&euro;{price}</b>
          <span className="place-card__price-text">&#47;&nbsp;night</span>
        </div>
        <button
          onClick={handleButtonClick}
          className={`place-card__bookmark-button button ${isInBookmark ? BOOKMARK_ACTIVE_CLASS : ``}`}
          type="button">
          <svg className="place-card__bookmark-icon" width="18" height="19">
            <use xlinkHref="#icon-bookmark"/>
          </svg>
          <span className="visually-hidden">In bookmarks</span>
        </button>
      </div>
      <div className="place-card__rating rating">
        <div className="place-card__stars rating__stars">
          <span style={{width: getRatingInPercentage(rating)}} />
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <h2 className="place-card__name">
        <Link to={RouteUrl.OFFER + id}>
          {description}
        </Link>
      </h2>
      <p className="place-card__type">{type}</p>
    </div>
  );
};

PlaceCard.defaultProps = {
  cardType: ``
};

PlaceCard.propTypes = {
  cardType: PropTypes.string.isRequired,
  offer: PropTypes.shape(OFFER_PROP_TYPES).isRequired,
  authStatus: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  authStatus: getAuthStatus(state),
});

export default connect(mapStateToProps)(PlaceCard);
