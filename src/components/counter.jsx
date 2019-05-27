import React, { Component } from "react";
class Counter extends Component {
  state = {
    value: this.props.value,
    imageUrl: "https://picsum.photos/200",
    tags: ["item1", "item2", "item3"],
    products: ["prd1", "prod2", "prod3"]
  };

  styles = {
    fontSize: 14,
    fontWeight: "bold"
  };

  handleIncrement = product => {
    console.log(product);
    this.setState({ value: this.state.value + 1 });
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;

    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  render() {
    let classes = this.getBadgeClasses();
    console.log(this.props);
    return (
      <React.Fragment>
        <img src={this.state.imageUrl} />
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.handleIncrement(this.state.products[2])}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button onClick={this.props.onDelete} className="btn-danger btn-sm m-2">
          Delete
        </button>

        {this.state.tags.length === 0 && "Please add new tags"}
        {this.renderTags()}
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.state;
    const x = <h1>Zero</h1>;
    return value === 0 ? x : value;
  }
}

export default Counter;
