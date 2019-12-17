import React, { Component } from "react";
import { Button, Grid, Segment, Header } from "semantic-ui-react";

const square = { width: 175, height: 175 };

class Text extends Component {
  state = { log: [] };

  handleClick = () => this.updateLog("Button received click with mouse");

  handleKeyPress = e => {
    if (e.charCode === 32 || e.charCode === 13) {
      // Prevent the default action to stop scrolling when space is pressed
      e.preventDefault();
      this.updateLog("Button received click with keyboard");
    }
  };

  updateLog = message =>
    this.setState(prevState => ({ log: [message, ...prevState.log] }));

  render() {
    const { log } = this.state;
    return (
      <div>
        <Grid>
          <Grid.Column width={1}>
            <Button
              attached="bottom"
              content="Click"
              onClick={this.handleClick}
              onKeyPress={this.handleKeyPress}
            />
          </Grid.Column>
        </Grid>

        <Segment circular style={square} inverted floated="right">
          <pre>
            {log.map((e, i) => (
              <p inverted key={i}>
                {e}
              </p>
            ))}
          </pre>
        </Segment>
      </div>
    );
  }
}

export default Text;
