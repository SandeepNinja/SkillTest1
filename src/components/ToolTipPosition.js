import React from "react";

class ToolTipPosition extends React.Component {
  render() {
    const { handlePositionChange } = this.props;
    return (
      <div className="buttonContainer">
        {/* tooltip direction control */}
        <button onClick={() => handlePositionChange("left")}>Left</button>
        <button onClick={() => handlePositionChange("right")}>Right</button>
        <button onClick={() => handlePositionChange("top")}>Top</button>
        <button onClick={() => handlePositionChange("bottom")}>Bottom</button>
      </div>
    );
  }
}

export default ToolTipPosition;
