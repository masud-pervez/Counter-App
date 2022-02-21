import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.counter.value,
    // tags: ["tag1", "tag2", "tag3"],
  };

  render() {
    return (
      <div>
        <span style={{ fontSize: 30 }} className={this.getBadgeClassess()}>
          {this.formateCount()}
        </span>
        <button
          style={{ fontSize: 25 }}
          onClick={() => this.handleIncrement()}
          className=" btn btn-outline-primary m-3 btn-sm"
        >
          Increment +
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClassess() {
    let classes = "badge  rounded  p-2 m-3 bg-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formateCount() {
    const { value: count } = this.state;
    return count === 0 ? "Zero" : this.state.value;
  }

  // randertags() {
  //   if (this.state.tags.length === 0) return <p>There are no tags</p>;
  //   return (
  //     <ul>
  //       {this.state.tags.map((tag) => (
  //         <li key={tag}>{tag}</li>
  //       ))}
  //     </ul>
  //   );
  // }

  handleIncrement = (product) => {
    this.setState({ value: this.state.value + 1 });
  };
  // handleDecncrement = product => {
  //   this.setState({ value: this.state.value - 1 });
  // };
}

export default Counter;
