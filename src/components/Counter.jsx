import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"],
  };

  render() {
    return (
      <div>
        <span style={{fontSize : 30}} className={this.getBadgeClassess()}>{this.formateCount()}</span>
        <button
          style={{fontSize : 30}}
          onClick={this.handleIncrement}
          className="btn btn-secondary-outline m-2 btn-sm"
        >
          Increment
        </button>
        {this.state.tags.length === 0 && "Please create a new tag!!"}
        {this.randertags()}
      </div>
    );
  }

  handleIncrement = () => {
    this.setState({count: this.state.count + 1})
  };

  randertags() {
    if (this.state.tags.length === 0) return <p>There are no tags</p>;
    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  getBadgeClassess() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formateCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : this.state.count;
  }
}

export default Counter;
