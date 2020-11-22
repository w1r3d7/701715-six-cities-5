import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {
  AuthorizationStatus,
  BOOKMARK_ACTIVE_CLASS,
  RouteUrl,
  FavoriteButtonType,
} from '../../constants/constants';
import {getRatingInPercentage} from '../../utils/utils';
import {OFFER_PROP_TYPES} from '../../types';
import {getAuthStatus} from '../../store/selectors';
import {browserHistory} from '../../browser-history';
import {changeFavoriteStatus} from '../../store/data/api-actions';


const PlaceCard = ({
  offer,
  cardType,
  authStatus,
  changeFavoriteStatusAction,
  favoriteButtonType
}) => {

  const {
    id,
    type,
    price,
    description,
    isInBookmark,
    rating
  } = offer;

  const handleFavoriteButtonClick = (evt) => {
    evt.preventDefault();

    if (authStatus === AuthorizationStatus.NO_AUTH) {
      browserHistory.push(RouteUrl.LOGIN);
      return;
    }

    changeFavoriteStatusAction(id, favoriteButtonType, isInBookmark);
  };

  return (
    <div className={`${cardType} place-card__info`}>
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">&euro;{price}</b>
          <span className="place-card__price-text">&#47;&nbsp;night</span>
        </div>
        <button
          onClick={handleFavoriteButtonClick}
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
  cardType: ``,
  favoriteButtonType: FavoriteButtonType.OFFER_PAGE,
};

PlaceCard.propTypes = {
  cardType: PropTypes.string.isRequired,
  offer: PropTypes.shape(OFFER_PROP_TYPES).isRequired,
  authStatus: PropTypes.string.isRequired,
  changeFavoriteStatusAction: PropTypes.func.isRequired,
  favoriteButtonType: PropTypes.string,
};

const mapStateToProps = (state) => ({
  authStatus: getAuthStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  changeFavoriteStatusAction: (id, favoriteButtonType, isInBookmark) => (
    dispatch(changeFavoriteStatus(id, favoriteButtonType, isInBookmark)
    )),
});

export {PlaceCard};
export default connect(mapStateToProps, mapDispatchToProps)(PlaceCard);
