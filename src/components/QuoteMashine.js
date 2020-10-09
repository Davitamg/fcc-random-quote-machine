import React from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const QuoteMashine = ({ assignNewQuoteMethod, selectedQuote }) => (
  <Card id="text">
    <CardContent>
      <Typography variant="h5" color="secondary">
        " {selectedQuote.quote}" ---{" "}
        <span id="author">{selectedQuote.author} </span>
      </Typography>
    </CardContent>
    <CardActions>
      <Button id="new-quote" size="small" onClick={assignNewQuoteMethod}>
        Next Quote
      </Button>
      <IconButton
        color="primary"
        target="_blank"
        id="tweet-quote"
        href={encodeURI(
          `https://twitter.com/intent/tweet?text=${selectedQuote.quote}`
        )}
      >
        <FontAwesomeIcon icon={faTwitter} size="md"></FontAwesomeIcon>
      </IconButton>
    </CardActions>
  </Card>
);

export default QuoteMashine;
