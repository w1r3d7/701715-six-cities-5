import React, {useState} from 'react';

const withActiveCardId = (Component) => {
  const WithActiveCardId = (props) => {
    const [activeCardId, setActiveCardId] = useState(null);

    const handleCardHover = (cardId) => {
      if (activeCardId !== cardId) {
        setActiveCardId(cardId);
      }
    };

    return (
      <Component
        activeCardId={activeCardId}
        onCardHover={handleCardHover}
        {...props}
      />
    );
  };
  return WithActiveCardId;
};
export default withActiveCardId;
