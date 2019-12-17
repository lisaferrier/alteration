import React, { Component, Fragment } from "react";
import "./cadre.css";
import CadreGold from "../pictures/cadre.png";
import { Button, Popup, Grid, Image, Transition } from "semantic-ui-react";
import TextVert from "./Text";
import Title from "./Title";
import GlitchClip from "react-glitch-effect/core/Clip";

const transitions = ["zoom"];
const options = transitions.map(name => ({
  key: name,
  text: name,
  value: name
}));

class Cadre extends Component {
  state = { animation: transitions[0], duration: 3600, visible: false };

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  handleVisibility = () =>
    this.setState(prevState => ({ visible: !prevState.visible }));

  render() {
    const { animation, duration, visible } = this.state;
    return (
      <div>
        <Grid verticalAlign="middle" columns={2} centered>
          <Grid.Row>
            <Grid.Column>
              <Transition.Group animation={animation} duration={duration}>
                {visible && (
                  <GlitchClip onHover={true}>
                    <Image
                      centered
                      size="big"
                      src={CadreGold}
                      className="cadre"
                    />
                  </GlitchClip>
                )}
              </Transition.Group>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Button
          inverted
          color="yellow"
          content={visible ? "!" : "?"}
          onClick={this.handleVisibility}
        />
      </div>
    );
  }
}

export default Cadre;
