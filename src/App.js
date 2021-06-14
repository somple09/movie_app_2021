import React from "react";
// import PropTypes from "prop-types";

class App extends React.Component {
  state = {
    count: 0,
  }
  add = () => {
    this.setState(current => ({count: current.count + 1}));
  };
  minus = () => {
    this.setState(current => ({count: current.count - 1}));
  };
  componentDidMount(){
    console.log("Component created")
  }
  componentDidUpdate(){
    console.log("I was just updated")
  }
  componentWillUnmount(){
    console.log("Goodbye my lord")
  }
    render() {
      console.log("Rendering Processing")
    return <div>
      <h3>  The number is: {this.state.count}</h3>
      <button onClick={this.add}>Add</button>
      <button onClick={this.minus}>Minus</button>
      </div>
  }
}

export default App;
