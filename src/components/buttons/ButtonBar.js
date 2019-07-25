import React, { Component } from 'react';
import withStyles from '@material-ui/styles/withStyles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  primary: {
    marginRight: theme.spacing(2)
  },
  secondary: {
    background: theme.palette.secondary['100'],
    color: 'white'
  },
  spaceTop: {
    marginTop: 20
  }
})

class ButtonBar extends Component {

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.spaceTop}>
        <Button
          className={classes.primary}
        >
          Delete
        </Button>
        <Button
          variant="contained"
          color="primary"
          className={classes.secondary}
        >
          Edit
        </Button>
      </div>
    )
  }
}

export default withStyles(styles)(ButtonBar);