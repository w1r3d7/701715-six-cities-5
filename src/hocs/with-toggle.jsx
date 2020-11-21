import React, {useState} from 'react';

const withToggle = (Component) => {
  const WithToggle = (props) => {
    const [isToggleOpen, setToggleState] = useState(false);

    const onToggleClick = () => {
      setToggleState(!isToggleOpen);
    };

    return (
      <Component
        isToggleOpen={isToggleOpen}
        onToggleClick={onToggleClick}
        {...props}
      />
    );
  };

  return WithToggle;
};
export default withToggle;

