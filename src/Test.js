import React from "react";
import PropTypes from "prop-types";

function Test({ name = "", setName }) {
  return (
    <div>
      <h1>The name is: {name}</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}

Test.propTypes = {
  name: PropTypes.string,
  setName: PropTypes.func,
};

export default Test;
