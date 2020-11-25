import {data} from './data';
import {ActionType} from './actions';
import {offers, reviews} from '../../__mocks__/mocks';
import {removeItem, replaceItem} from '../../utils/utils';

const [offer] = offers;

describe(`Data reducer work correctly`, () => {
  it(`Reducer return initial state`, () => {
    expect(data(void 0, {})).toEqual({
      offers: [],
      isOffersLoaded: false,
      offersError: null,
      offerDetails: null,
      isOfferDetailsLoaded: false,
      offerDetailsError: null,
      reviews: null,
      isReviewsLoaded: false,
      reviewsError: null,
      nearbyOffers: null,
      isNearbyOffersLoaded: false,
      nearbyOffersError: null,
      favoriteOffers: null,
      isFavoriteOffersLoaded: false,
      favoriteOffersError: null,
      isReviewRequestSend: false,
      sendReviewError: null,
    });
  });

  it(`Reducer should update offers by load offers`, () => {
    expect(data({
      offers: [],
      isOffersLoaded: false,
    }, {
      type: ActionType.GET_OFFERS,
      payload: offers,
    })).toEqual({
      offers,
      isOffersLoaded: true,
    });
  });

  it(`Reducer should update request status by request offers`, () => {
    expect(data({
      offersError: `404`,
      isOffersLoaded: true
    }, {
      type: ActionType.OFFERS_REQUESTED,
    })).toEqual({
      isOffersLoaded: false,
      offersError: null,
    });
  });

  it(`Reducer should update offer by load offer`, () => {
    expect(data({
      offerDetails: null,
      isOfferDetailsLoaded: false,
    }, {
      type: ActionType.GET_OFFER_DETAILS,
      payload: offer,
    })).toEqual({
      offerDetails: offer,
      isOfferDetailsLoaded: true,
    });
  });

  it(`Reducer should update request status by request offer`, () => {
    expect(data({
      isOfferDetailsLoaded: true
    }, {
      type: ActionType.OFFER_DETAILS_REQUESTED,
    })).toEqual({
      isOfferDetailsLoaded: false,
    });
  });

  it(`Reducer should update reviews by load reviews`, () => {
    expect(data({
      reviews: [],
      isReviewsLoaded: false,
    }, {
      type: ActionType.GET_REVIEWS,
      payload: reviews,
    })).toEqual({
      reviews,
      isReviewsLoaded: true,
    });
  });

  it(`Reducer should update request status by request reviews`, () => {
    expect(data({
      isReviewsLoaded: true
    }, {
      type: ActionType.REVIEWS_REQUESTED,
    })).toEqual({
      isReviewsLoaded: false,
    });
  });

  it(`Reducer should update nearby offers by load nearby offers`, () => {
    expect(data({
      nearbyOffers: [],
      isNearbyOffersLoaded: false,
    }, {
      type: ActionType.GET_NEARBY_OFFERS,
      payload: offers,
    })).toEqual({
      nearbyOffers: offers,
      isNearbyOffersLoaded: true,
    });
  });

  it(`Reducer should update request status by request nearby offers`, () => {
    expect(data({
      isNearbyOffersLoaded: true
    }, {
      type: ActionType.NEARBY_OFFERS_REQUESTED,
    })).toEqual({
      isNearbyOffersLoaded: false,
    });
  });

  it(`Reducer should update favorite offers by load favorite offers`, () => {
    expect(data({
      favoriteOffers: [],
      isFavoriteOffersLoaded: false,
    }, {
      type: ActionType.GET_FAVORITE_OFFERS,
      payload: offers,
    })).toEqual({
      favoriteOffers: offers,
      isFavoriteOffersLoaded: true,
    });
  });

  it(`Reducer should update request status by request favorite offers`, () => {
    expect(data({
      isFavoriteOffersLoaded: true
    }, {
      type: ActionType.FAVORITE_OFFERS_REQUESTED,
    })).toEqual({
      isFavoriteOffersLoaded: false,
    });
  });


  it(`Reducer should update reviewRequest status by send review`, () => {
    expect(data({
      isReviewRequestSend: true
    }, {
      type: ActionType.REVIEW_SEND,
    })).toEqual({
      isReviewRequestSend: false,
    });
  });

  it(`Reducer should update request status by reviewRequest `, () => {
    expect(data({
      isReviewRequestSend: false
    }, {
      type: ActionType.REVIEW_SEND_REQUESTED,
    })).toEqual({
      isReviewRequestSend: true,
    });
  });

  it(`Reducer should write error`, () => {
    expect(data({
      sendReviewError: null,
    }, {
      type: ActionType.SEND_REVIEW_ERROR,
      payload: `404`,
    })).toEqual({
      sendReviewError: `404`
    });
  });

  it(`Reducer should update favorite offers by remove offer from favorite`, () => {
    expect(data({
      favoriteOffers: offers,
    }, {
      type: ActionType.REMOVE_FROM_FAVORITE,
      payload: offer,
    })).toEqual({
      favoriteOffers: removeItem(offers, offer),
    });
  });

  it(`Reducer should update favorite status by changeFavoriteStatus `, () => {
    expect(data({
      offers
    }, {
      type: ActionType.CHANGE_OFFERS_FAVORITE_STATUS,
      payload: offer,
    })).toEqual({
      offers: replaceItem(offers, offer),
    });
  });

  it(`Reducer should update nearby offers favorite status by changeFavoriteStatus `, () => {
    expect(data({
      nearbyOffers: offers,
    }, {
      type: ActionType.CHANGE_NEARBY_OFFERS_FAVORITE_STATUS,
      payload: offer,
    })).toEqual({
      nearbyOffers: replaceItem(offers, offer),
    });
  });

  it(`Reducer should update offer favorite status by changeFavoriteStatus `, () => {
    expect(data({
      offerDetails: null,
    }, {
      type: ActionType.CHANGE_OFFER_FAVORITE_STATUS,
      payload: offer,
    })).toEqual({
      offerDetails: offer,
    });
  });
});
