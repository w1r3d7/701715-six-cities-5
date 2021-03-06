const adaptOfferToClient = (offer) => {
  const result = Object.assign(
      {},
      offer,
      {
        bedroomsCount: offer.bedrooms,
        facilities: offer.goods,
        photosUrl: offer.images,
        isPremium: offer.is_premium,
        isInBookmark: offer.is_favorite,
        description: offer.title,
        hostName: offer.host.name,
        hostDescription: offer.description,
        hostAvatar: offer.host.avatar_url,
        isHostPremium: offer.host.is_pro,
        maxCapacity: offer.max_adults,
        previewImage: offer.preview_image,
      }
  );

  delete result.images;
  delete result.is_favorite;
  delete result.is_premium;
  delete result.host;
  delete result.goods;
  delete result.max_adults;
  delete result.preview_image;

  return result;
};

const adaptReviewToClient = (review) => {
  const result = Object.assign(
      {},
      review,
      {
        reviewText: review.comment,
        photoUrl: review.user.avatar_url,
        name: review.user.name,
        isUserPremium: review.user.is_pro,
        userId: review.user.id,
      }
  );

  delete result.user;
  delete result.comment;
  return result;
};

const adaptUserInfoToClient = (userInfo) => {
  const result = Object.assign(
      {},
      userInfo,
      {
        avatarUrl: userInfo.avatar_url,
        isPremiumUser: userInfo.is_pro,
      }
  );

  delete result.avatar_url;
  delete result.is_pro;

  return result;
};

export {adaptOfferToClient, adaptReviewToClient, adaptUserInfoToClient};
