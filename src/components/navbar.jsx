import React, { Component } from "react";

class NavBar extends Component {
  render() {
    const { totalCounters } = this.props;
    return (
      <nav className="navBar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Navbar{" "}
          <span className="badge badge-pill badge-secondary">
            {totalCounters}
          </span>
        </a>
      </nav>
    );
  }
}

export default NavBar;