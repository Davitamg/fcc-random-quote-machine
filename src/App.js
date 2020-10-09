import React from "react";
import QuoteMashine from "./components/QuoteMashine";
import { random } from "lodash";
import "typeface-roboto";
import { Grid, withStyles } from "@material-ui/core";
import "./App.css";
const styles = {
  root: {
    alignItems: "center",
    display: "flex",
    height: "100vh",
    color: "red",
  },
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      selectedIndex: null,
    };
    this.selectedIndex = this.selectedIndex.bind(this);
    this.assignNewQuoteMethod = this.assignNewQuoteMethod.bind(this);
  }

  componentDidMount() {
    fetch(
      "https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json"
    )
      .then((data) => data.json())
      .then((quotes) => this.setState({ quotes }, this.assignNewQuoteMethod));
  }

  selectedIndex() {
    if (!this.state.quotes.length) {
      return undefined;
    }
    return random(0, this.state.quotes.length - 1);
  }

  get selectedQuote() {
    if (
      !this.state.quotes.length ||
      !Number.isInteger(this.state.selectedIndex)
    ) {
      return undefined;
    }

    return this.state.quotes[this.state.selectedIndex];
  }
  assignNewQuoteMethod() {
    this.setState({ selectedIndex: this.selectedIndex() });
  }

  render() {
    console.log(this.state.selectedIndex);
    return (
      <Grid
        className={this.props.classes.root}
        id="quote-box"
        justify="center"
        container
      >
        <Grid xs={11} lg={4} item>
          {this.selectedQuote ? (
            <QuoteMashine
              selectedQuote={this.selectedQuote}
              assignNewQuoteMethod={this.assignNewQuoteMethod}
            />
          ) : null}
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(App);
