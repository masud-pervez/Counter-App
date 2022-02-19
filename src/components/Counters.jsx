import React, { Component } from "react";
import Counter from "./Counter";
class Counters extends Component {
  state = {
    Count: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };
  render() {
    return (
      <div>
        {this.state.Count.map((counter) => (
          <Counter key={counter.id} value={counter.value}>
            <h4>Title</h4>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
