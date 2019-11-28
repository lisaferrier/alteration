import React, { Component, Fragment } from "react";
import "./cadre.css";
import CadreGold from "../pictures/cadre.png";
import { Row, Col } from "reactstrap";

class Cadre extends Component {
  render() {
    return (
      <div className="grandparent-cadre">
        <div className="parent-cadre">
          <img src={CadreGold} className="cadre" alt="cadre" />
        </div>
        <div className="image_centre">
          <img
            src={"https://via.placeholder.com/150"}
            className="flicker-in-1 test"
            alt="test"
          />
        </div>
      </div>
    );
  }
}

export default Cadre;
