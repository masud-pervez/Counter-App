import React, { Component } from "react";
import Counter from "./Counter";

class Counters extends Component {
  state = {
    Counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };
  handlereset = ()=> {
   const Counters = this.state.Counters.map(c =>{
    c.value = 0;
    return c;
    })
    this.setState({Counters});
  }

  handleDelete = counterId => {
    const Counters = this.state.Counters.filter(c => c.id !== counterId );
    this.setState({Counters})
    console.log(counterId);
  };

  render() {
    return (
      <div>
        <button
          onClick={this.handleReset}
          className="btn btn-primary btn-sm m-2">Reset</button>
        {this.state.Counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
