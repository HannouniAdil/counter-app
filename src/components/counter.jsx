import React, { Component } from "react";
class Counter extends Component {
  componentDidUpdate(prevProps, prevState) {
    console.log("provProps", prevProps);
    console.log("prevState", prevState);

    if (prevProps.counter.value !== this.props.counter.value) {
      //Ajax call and get data from the server
    }
  }

  componentWillUnmount() {
    console.log("App - Unmount");
  }
  styles = {
    fontSize: 14,
    fontWeight: "bold"
  };

  render() {
    const { onIncrement, onDecrement, onDelete, counter } = this.props;

    let classes = this.getBadgeClasses();
    return (
      <div>
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => onIncrement(counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => onDecrement(counter)}
          className="btn btn-secondary btn-sm m-2"
        >
          Decrement
        </button>
        <button
          onClick={() => onDelete(counter.id)}
          className="btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    const x = <h1>Zero</h1>;
    return value === 0 ? x : value;
  }
}

export default Counter;
