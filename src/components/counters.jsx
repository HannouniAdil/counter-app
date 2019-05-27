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

  handleDelete = counterId => {
    console.log("Event Handler Called", counterId);
    const activeCounters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters: activeCounters });
  };
  render() {
    return (
      <div>
        {this.state.counters.map(counter => (
          <Counter
            onDelete={this.handleDelete}
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
