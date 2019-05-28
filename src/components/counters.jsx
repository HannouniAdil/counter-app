import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const { onReset, onIncrement, onDelete, counters } = this.props;

    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>

        {counters.map(counter => (
          <Counter
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            key={counter.id}
            counter={counter}
          >
            <h3>Title</h3>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
