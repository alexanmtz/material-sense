import React,  { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { withRouter, Link } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import MobileStepper from '@material-ui/core/MobileStepper';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

import Topbar from './Topbar';

const backgroundShape = require('../images/shape.svg');
const logo = require('../images/logo.svg');

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    label: 'A first label',
    description: 'This is the first item on the label',
    imgPath:
      'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'A second label',
    description: 'This is the second item on the label',
    imgPath:
      'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'A third label',
    description: 'This is the third item on the label',
    imgPath:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80',
  },
  {
    llabel: 'A fifth label',
    description: 'This is the fifth item on the label',
    imgPath:
      'https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Other label',
    description: 'This is other label',
    imgPath:
      'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
  },
];

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.grey['100'],
    overflow: 'hidden',
    background: `url(${backgroundShape}) no-repeat`,
    backgroundSize: 'cover',
    backgroundPosition: '0 400px',
    paddingBottom: 200
  },
  mainTable: {
    tableLayout: 'fixed',
    marginBottom: 36
  },
  grid: {
    width: 1200,
    marginTop: 40
  },
  paper: {
    padding: theme.spacing.unit * 3,
    textAlign: 'left',
    color: theme.palette.text.secondary
  },
  rangeLabel: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: theme.spacing.unit * 2
  },
  topBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 32
  },
  outlinedButtom: {
    textTransform: 'uppercase',
    margin: theme.spacing.unit
  },
  actionButtom: {
    textTransform: 'uppercase',
    margin: theme.spacing.unit,
    width: 152,
    height: 36
  },
  blockCenter: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center'
  },
  block: {
    padding: theme.spacing.unit * 2,
  },
  inlining: {
    display: 'inline-block',
    marginRight: 10
  },
  buttonBar: {
    display: 'flex'
  },
  noBorder: {
    borderBottomStyle: 'hidden'
  },
  loadingState: {
    opacity: 0.05
  },
  loadingMessage: {
    position: 'absolute',
    top: '40%',
    left: '40%'
  }
});

class Main extends Component {

  state = {
    learnMoredialog: false,
    getStartedDialog: false,
    activeStep: 0
  };

  componentDidMount() {}

  handleNext = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep + 1,
    }));
  };

  handleBack = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep - 1,
    }));
  };

  handleStepChange = activeStep => {
    this.setState({ activeStep });
  };
    
  openDialog = (event) => {
    this.setState({learnMoredialog: true});
  }

  dialogClose = (event) => {
    this.setState({learnMoredialog: false});
  }

  openGetStartedDialog = (event) => {
    this.setState({getStartedDialog: true});
  }

  closeGetStartedDialog = (event) => {
    this.setState({getStartedDialog: false});
  }

  render() {
    const { classes } = this.props;
    const { activeStep } = this.state;
    const maxSteps = tutorialSteps.length

    return (
      <React.Fragment>
        <CssBaseline />
        <Topbar />
        <div className={classes.root}>
          <Grid container justify="center"> 
            <Grid spacing={24} alignItems="center" justify="center" container className={classes.grid}>
              <Grid item xs={4}>
                <Paper className={classes.paper}>
                  <div style={{marginBottom: 40}}>
                    <Typography style={{textTransform: 'uppercase'}} color='secondary' gutterBottom>
                      First title
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      A first title style <br/> with two lines
                    </Typography>
                  </div>
                  <div style={{display: 'flex', justifyContent: 'flex-end'}}>                          
                    <Button style={{background: '#182841'}} color='primary' variant="contained" className={classes.actionButtom}>
                      Learn more
                    </Button>
                  </div>
                </Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper className={classes.paper}>
                  <div style={{marginBottom: 40, height: 65}}>
                    <Typography style={{textTransform: 'uppercase'}} color='secondary' gutterBottom>
                      Another box
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      A default box
                    </Typography>
                  </div>
                  <div style={{display: 'flex', justifyContent: 'flex-end'}}>                          
                    <Button style={{background: '#182841'}} color='primary' variant="contained" className={classes.actionButtom}>
                      Learn more
                    </Button>
                  </div>
                </Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper className={classes.paper}>
                  <div style={{marginBottom: 40, height: 65}}>
                    <Typography style={{textTransform: 'uppercase'}} color='secondary' gutterBottom>
                      A box with a carousel
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      If you click in Getting Started, you will see a nice carousel
                    </Typography>
                  </div>
                  <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                    <Button onClick={this.openDialog}  variant="outlined" className={classes.actionButtom}>
                      Learn more
                    </Button>                          
                    <Button onClick={this.openGetStartedDialog} style={{background: '#182841'}} color='primary' variant="contained" className={classes.actionButtom}>
                      Dashboard
                    </Button>
                  </div>
                </Paper>
              </Grid>
              <Grid container item xs={12}>
                  <Grid item xs={12} spacing={24}>
                    <Paper className={classes.paper}>
                      <div>
                        <div style={{marginBottom: 40, height: 65}}>
                          <Typography style={{textTransform: 'uppercase'}} color='secondary' gutterBottom>
                            Full box
                          </Typography>
                          <Typography variant="body1" gutterBottom>
                            This is an example of a full-width box
                          </Typography>
                        </div>
                        <div style={{display: 'flex', justifyContent: 'flex-end'}}>                          
                          <Button style={{background: '#182841'}} color='primary' variant="contained" className={classes.actionButtom}>
                            Learn more
                          </Button>
                        </div>
                      </div>
                    </Paper>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Dialog
            open={this.state.learnMoredialog}
            onClose={this.dialogClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            scroll='body'
          >
            <DialogTitle id="alert-dialog-title">
            
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                <div style={{ maxWidth: 600, flexGrow: 1, textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                  <div style={{marginBottom: 20}}>
                    <img width={100} src={logo} />
                  </div>
                  <div>
                    <AutoPlaySwipeableViews
                      axis='x'
                      index={activeStep}
                      onChangeIndex={this.handleStepChange}
                      enableMouseEvents
                    >
                      {tutorialSteps.map((step, index) => (
                        <div key={step.label}>
                          {Math.abs(activeStep - index) <= 2 ? (
                            <img className={classes.img} src={step.imgPath} alt={step.label} />
                          ) : null}
                        </div>
                      ))}
                    </AutoPlaySwipeableViews>
                    <MobileStepper
                      steps={maxSteps}
                      position="static"
                      activeStep={activeStep}
                      className={classes.mobileStepper}
                      nextButton={
                        <Button size="small" onClick={this.handleNext} disabled={activeStep === maxSteps - 1}>
                          Next
                        </Button>
                      }
                      backButton={
                        <Button size="small" onClick={this.handleBack} disabled={activeStep === 0}>
                          Back
                        </Button>
                      }
                    />
                  </div>
                  <div style={{marginLeft: 72, textAlign: 'left', marginTop: 20, height: 65}}>
                    <Typography style={{textTransform: 'uppercase'}} color='secondary' gutterBottom>
                      {tutorialSteps[activeStep].label}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      {tutorialSteps[activeStep].description}
                    </Typography>
                  </div>
                </div>
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button component={Link} to='/dashboard' variant='contained' onClick={this.handleClose} color="primary" autoFocus>
                Getting started
              </Button>
            </DialogActions>
          </Dialog>
          <Dialog
            open={this.state.getStartedDialog}
            onClose={this.closeGetStartedDialog}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            scroll='body'
          >
            <DialogTitle id="alert-dialog-title">
            
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                <div style={{ maxWidth: 600, flexGrow: 1, textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                  <div style={{marginBottom: 20}}>
                    <img src={logo} />
                  </div>
                  <div style={{marginTop: 20, height: 65}}>
                    <Typography variant="body1" gutterBottom>
                      This is a sample introction text
                    </Typography>
                  </div>
                  <Button component={Link} to='/dashboard' style={{marginBottom: 10}} variant='contained' onClick={this.handleClose} color="primary" autoFocus>
                    Getting started
                  </Button>
                  <Button component={Link} to='/dashboard' variant='outlined' onClick={this.handleClose} color="primary" autoFocus>
                    Dashboard
                  </Button>
                </div>
              </DialogContentText>
            </DialogContent>
          </Dialog>
        </div>
      </React.Fragment>
    )
  }
}

export default withRouter(withStyles(styles)(Main));