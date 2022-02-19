import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
    // tags: ["tag1", "tag2", "tag3"],
  };

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

  handleIncrement = product => {
    console.log(product);
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    console.log('props',this.props);
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
          Increment
        </button>
        {/* {this.state.tags.length === 0 && "Please create a new tag!!"}
        {this.randertags()} */}
      </div>
    );
  }
}

export default Counter;
