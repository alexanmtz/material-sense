import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import { withRouter } from 'react-router-dom';

const styles = theme => ({
  sectionContainer: {
    marginTop: theme.spacing.unit * 4,
    marginBottom: theme.spacing.unit * 4
  },
  title: {
    fontWeight: 'bold'
  }
});

class SectionHeader extends Component {
  render() {
    const { classes, title, subtitle} = this.props;
    return (
      <div className={classes.sectionContainer}>
        <Typography variant="subtitle1" className={classes.title}>
          {title}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {subtitle}
        </Typography>
      </div>
    )
  }
}

export default withRouter(withStyles(styles)(SectionHeader));
