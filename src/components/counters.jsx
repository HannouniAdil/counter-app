import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 2 },
      { id: 4, value: 0 }
    ]
  };

  handleDelete = () => {
    console.log("Event Handler Called");
  };
  render() {
    return (
      <div>
        {this.state.counters.map(counter => (
          <Counter
            onDelete={this.handleDelete}
            value={counter.value}
            id={counter.id}
          >
            <h3>Title</h3>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
