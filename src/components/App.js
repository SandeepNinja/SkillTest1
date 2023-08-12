import React from "react";
import Card from "./Card";
import ToolTipPosition from "./ToolTipPosition";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      position: "top",
      displayTip: false,
    };
  }
  handlePositionChange = (position) => {
    console.log("hP: ", this.state);
    this.setState(
      () => {
        return {
          position,
        };
      },
      () => console.log("newState: ", this.state)
    );
  };
  toogleDisplayTip = (val) => {
    // console.log("I am tool tip: ", this.state);
    // const { displayTip } = this.state;
    this.setState(() => {
      return {
        displayTip: val,
      };
    });
  };
  render() {
    const { position, displayTip } = this.state;
    return (
      <div className="App">
        <Card
          position={position}
          toogleDisplayTip={this.toogleDisplayTip}
          displayTip={displayTip}
        />
        {/* toolTip direction control */}
        <ToolTipPosition handlePositionChange={this.handlePositionChange} />
      </div>
    );
  }
}

export default App;
