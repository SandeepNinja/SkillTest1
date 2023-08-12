import React from "react";
class Card extends React.Component {
  render() {
    const { position, toogleDisplayTip, displayTip } = this.props;
    // console.log("CardPosition : ", position);
    return (
      <div
        className="centerDiv"
        onMouseEnter={() => toogleDisplayTip(true)}
        onMouseLeave={() => toogleDisplayTip(false)}
      >
        Hover Over Me
        {/* {console.log("div :", displayTip)} */}
        {/* tooltip component */}
        {displayTip && (
          <div className={`description ${position}`}>
            description: I am sticky ToolTip
          </div>
        )}
      </div>
    );
  }
}
export default Card;
