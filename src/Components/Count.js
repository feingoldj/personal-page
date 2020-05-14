import React from "react";

class Count extends React.Component {
    constructor(props) {
      super(props);
      this.state = {count: 0};
    }
  
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
  
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
  
    tick() {
      this.setState((state) => ({
        count: state.count + 1
      }));
    }
  
    render() {
      return (
        <div>
          <h1>This page has been running for {this.state.count} seconds.</h1>
        </div>
      );
    }
}

export default Count;