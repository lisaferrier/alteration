import React, { Component } from "react";
import "./title.less";

class Title extends Component {
  render() {
    return (
      <div>
        <div class="header">
          <a href="test" className="glitch" data-text="Explore">
            Explore
          </a>
        </div>
      </div>
    );
  }
}

export default Title;
