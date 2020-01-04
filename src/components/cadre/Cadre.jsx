import React, { Component } from "react";
import "./cadre.css";
import CadreGold from "../pictures/cadres.gif";
import Feddog from "../pictures/feddog.jpg";
import {
  Button,
  Modal,
  Header,
  Grid,
  Image,
  Transition
} from "semantic-ui-react";
import GlitchClip from "react-glitch-effect/core/Clip";

const transitions = ["zoom"];

const options = transitions.map(name => ({
  key: name,
  text: name,
  value: name
}));

class Cadre extends Component {
  state = {
    animation: transitions[0],
    duration: 3600,
    visible: false,
    modalOpen: false
  };

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  handleOpen = () => this.setState({ modalOpen: true });

  handleClose = () => this.setState({ modalOpen: false });

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
                    <Modal
                      closeIcon
                      basic
                      trigger={
                        <Image
                          onClick={this.handleOpen}
                          centered
                          size="big"
                          src={CadreGold}
                          className="cadre"
                        />
                      }
                    >
                      <Grid verticalAlign="middle" columns={2} centered>
                        <Grid.Row>
                          <Grid.Column>
                            <Modal.Content image>
                              <Image wrapped size="huge" src={Feddog} />
                              <Modal.Description>
                                <Header
                                  style={{
                                    color: "gold",
                                    marginTop: "1em"
                                  }}
                                >
                                  Feddog, 2014
                                </Header>
                                <p>La Seyne-sur-Mer</p>
                                <p>Is it okay to use this photo?</p>
                              </Modal.Description>
                            </Modal.Content>
                          </Grid.Column>
                        </Grid.Row>
                      </Grid>
                    </Modal>
                  </GlitchClip>
                )}
              </Transition.Group>
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <Button
          style={{}}
          centered
          color="yellow"
          content={visible ? "" : "?"}
          onClick={this.handleVisibility}
        />
        {/*                           
                          <Button
                            color="yellow"
                            onClick={this.handleClose}
                            centered
                            inverted
                          >
                            <Icon /> Quitter
                          </Button> */}
      </div>
    );
  }
}

export default Cadre;
