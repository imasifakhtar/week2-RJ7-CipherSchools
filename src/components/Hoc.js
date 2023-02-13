import React from "react";

function higherOrderComponent(HocComponent) {
  return class extends React.Component {
    render() {
      <div>
        <HocComponent />
      </div>;
    }
  };
}

export default higherOrderComponent;
