import PropTypes from 'prop-types';

export const REVIEW_PROP_TYPES = {
  name: PropTypes.string,
  photoUrl: PropTypes.string,
  reviewText: PropTypes.string,
  rating: PropTypes.number,
  date: PropTypes.string,
  isUserPremium: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};

export const OFFER_PROP_TYPES = {
  photosUrl: PropTypes.arrayOf(
      PropTypes.string.isRequired
  ).isRequired,
  type: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  isPremium: PropTypes.bool.isRequired,
  isInBookmark: PropTypes.bool.isRequired,
  rating: PropTypes.number.isRequired,
  facilities: PropTypes.arrayOf(
      PropTypes.string.isRequired
  ).isRequired,
  bedroomsCount: PropTypes.number.isRequired,
  maxCapacity: PropTypes.number.isRequired,
  hostName: PropTypes.string.isRequired,
  previewImage: PropTypes.string.isRequired,
  hostDescription: PropTypes.string.isRequired,
  hostAvatar: PropTypes.string.isRequired,
  isHostPremium: PropTypes.bool.isRequired,
  city: PropTypes.shape({
    name: PropTypes.string.isRequired,
    location: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};


