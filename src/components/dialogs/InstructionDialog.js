import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import withStyles from '@material-ui/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import BaseDialog from './BaseDialog';

const styles = theme => ({
  container: {
    maxWidth: 600,
    flexGrow: 1,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  bottomMargin: {
    marginBottom: theme.spacing(2)
  }
});

class InstructionDialog extends Component {
  render() {
    const { classes } = this.props;
    return (
      <BaseDialog {...this.props} >
        <div className={classes.bottomMargin}>
          <Typography variant="body2" gutterBottom>
            This is a sample introduction
          </Typography>
        </div>
        <Button component={Link} to='/dashboard' className={classes.bottomMargin} variant='contained' onClick={this.handleClose} color="primary" autoFocus>
          Getting started
        </Button>
        <Button component={Link} to='/dashboard' variant='outlined' onClick={this.handleClose} color="primary" autoFocus>
          Dashboard
        </Button>
      </BaseDialog>
    )
  }
}

export default withRouter(withStyles(styles)(InstructionDialog));
