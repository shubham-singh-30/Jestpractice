// hidden-message.js
import * as React from "react";

// NOTE: React Testing Library works well with React Hooks and classes.
// Your tests will be the same regardless of how you write your components.
function Hidden({ children }) {
  const [showMessage, setShowMessage] = React.useState(false);
  const getData = () => {
    setShowMessage(!showMessage);
  };
  return (
    <div>
      <label htmlFor="toggle">Show Message</label>
      <input
        id="toggle"
        type="checkbox"
        onChange={(e) => setShowMessage(e.target.checked)}
        checked={showMessage}
      />
      {showMessage ? children : null}
      <button  onCLick={getData}> click me</button>
    </div>
  );
}

export default Hidden;
