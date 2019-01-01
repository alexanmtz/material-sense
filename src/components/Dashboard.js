import React,  { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { withRouter, Link } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/lab/Slider';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableFooter from '@material-ui/core/TableFooter';
import SimpleLineChart from './SimpleLineChart';
import Months from './common/Months'

import Topbar from './Topbar';

const numeral = require('numeral');
numeral.defaultFormat('0,000');

const backgroundShape = require('../images/shape.svg');

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#F8F8F8',
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
    width: 1200
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
    marginTop: 24
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
  loanAvatar: {
    display: 'inline-block',
    verticalAlign: 'center',
    width: 16,
    height: 16,
    marginRight: 10,
    marginBottom: -2,
    color: '#fff',
    backgroundColor: '#17729D'
  },
  interestAvatar: {
    display: 'inline-block',
    verticalAlign: 'center',
    width: 16,
    height: 16,
    marginRight: 10,
    marginBottom: -2,
    color: '#fff',
    backgroundColor: '#17729D80'
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

const monthRange = Months;

class Dashboard extends Component {

  state = {
    loading: true,
    amount: 15000,
    period: 3,
    start: 0,
    monthlyInterest: 0,
    totalInterest: 0,
    monthlyPayment: 0,
    totalPayment: 0,
    data: []
  };

  updateLoanValues() {
    const { amount, period, start } = this.state;
    const monthlyInterest = (amount)*(Math.pow(0.01*(1.01), period))/(Math.pow(0.01, period - 1))
    const totalInterest = monthlyInterest * (period + start);
    const totalPayment = amount + totalInterest;
    const monthlyPayment = period > start ? totalPayment/(period - start) : totalPayment/(period)

    const data = Array.from({length: period + start}, (value, i) => {
      const delayed = i < start;
      return {
        name: monthRange[i],
        'Type': delayed ? 0 : Math.ceil(monthlyPayment).toFixed(0),
        'OtherType': Math.ceil(monthlyInterest).toFixed(0)
      }
    })

    this.setState({monthlyInterest, totalInterest, totalPayment, monthlyPayment, data})
  }

  componentDidMount() {
    this.updateLoanValues();
  }

  handleChangeAmount = (event, value) => {
    this.setState({amount: value, loading: false});
    this.updateLoanValues();
  }

  handleChangePeriod = (event, value) => {
    this.setState({period: value, loading: false});
    this.updateLoanValues();
  }

  handleChangeStart = (event, value) => {
    this.setState({start: value, loading: false});
    this.updateLoanValues();
  }

  render() {
    const { classes } = this.props;
    const { amount, period, start, monthlyPayment, totalPayment,
      monthlyInterest, totalInterest, data, loading } = this.state;
    const currentPath = this.props.location.pathname

    return (
      <React.Fragment>
        <CssBaseline />
        <Topbar currentPath={currentPath} />
        <div className={classes.root}>
          <Grid container justify="center"> 
            <Grid spacing={24} alignItems="center" justify="center" container className={classes.grid}>
              <Grid item xs={12}>
                <div className={classes.topBar}>
                  <div className={classes.block}>
                    <Typography variant="h6" gutterBottom>Dashboard</Typography>
                    <Typography variant="body2">
                      Adjust and play with our sliders.
                    </Typography>
                  </div>
                  <div>
                    <Button variant="outlined" className={classes.outlinedButtom}>
                      Get help
                    </Button>
                  </div>
                </div>
              </Grid>
              <Grid item xs={4}>
                <Paper className={classes.paper}>
                  <div>
                    <Typography variant="subtitle1" gutterBottom>
                      How much you want to transfer
                    </Typography>
                    <Typography variant="body2">
                      Use slider to set the amount you need.
                    </Typography>
                    <div className={classes.blockCenter}>
                      <Typography color='secondary' variant="h6" gutterBottom>
                        {numeral(amount).format()} USD
                      </Typography>
                    </div>
                    <div>
                      <Slider
                        value={amount}
                        min={20000}
                        max={150000}
                        step={15000}
                        onChange={this.handleChangeAmount}
                      />
                    </div>
                    <div className={classes.rangeLabel}>
                      <div>
                        <Typography variant="subtitle2">
                          15,000 USD
                        </Typography>
                      </div>
                      <div>
                        <Typography variant="subtitle2">
                          150,000 USD
                        </Typography> 
                      </div>
                    </div>
                  </div>
                </Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper className={classes.paper}>
                  <div>
                    <Typography variant="subtitle1" gutterBottom>
                      Period
                    </Typography>
                    <Typography variant="body2">
                      A sample period
                    </Typography>
                    <div className={classes.blockCenter}>
                      <Typography color='secondary' variant="h6" gutterBottom>
                        {period} months
                      </Typography>
                    </div>
                    <div>
                      <Slider
                        value={period}
                        min={1}
                        max={6}
                        step={1}
                        onChange={this.handleChangePeriod}
                      />
                    </div>
                    <div className={classes.rangeLabel}>
                      <div>
                        <Typography variant="subtitle2">
                          1 month
                        </Typography>
                      </div>
                      <div>
                        <Typography variant="subtitle2">
                          6 months
                        </Typography> 
                      </div>
                    </div>
                  </div>
                </Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper className={classes.paper}>
                  <div>
                    <Typography variant="subtitle1" gutterBottom>
                      Start date
                    </Typography>
                    <Typography variant="body2">
                      Set your preferred start date.
                    </Typography>
                    <div className={classes.blockCenter}>
                      <Typography color='secondary' variant="h6" gutterBottom>
                        {monthRange[start]}
                      </Typography>
                    </div>
                    <div>
                      <Slider
                        value={start}
                        min={0}
                        max={5}
                        step={1}
                        onChange={this.handleChangeStart}
                      />
                    </div>
                    <div className={classes.rangeLabel}>
                      <div>
                        <Typography variant="subtitle2">
                          Dec 2018
                        </Typography>
                      </div>
                      <div>
                        <Typography variant="subtitle2">
                          May 2019
                        </Typography> 
                      </div>
                    </div>
                  </div>
                </Paper>
              </Grid>
              <Grid container item xs={12}>
                <div>
                  <Grid spacing={24} container item xs={12} justify="center" style={{maxWidth: 'none'}}>
                    <Grid item xs={8} spacing={24}>
                      <Paper className={classes.paper} style={{position: 'relative'}}>
                        <div style={loading ? {display: 'block'} : {display: 'none'}} className={classes.loadingMessage}>
                          <span role='img' aria-label='emoji' style={{fontSize: 58, textAlign: 'center', display: 'inline-block', width: '100%'}}>👋</span>
                          <Typography variant="h6">
                            Waiting for input
                          </Typography>
                        </div>
                        <div className={loading ? classes.loadingState : ''}>
                          <Typography variant="subtitle1" gutterBottom>
                            Some details
                          </Typography>
                          <Typography variant="body2">
                            Details about the graph
                          </Typography>
                          <div style={{marginTop: 14, marginBottom: 14}}>
                            <div className={classes.inlining}>
                              <Avatar className={classes.loanAvatar}></Avatar>
                              <Typography className={classes.inlining} variant="subtitle2" gutterBottom>
                                Type
                              </Typography>
                              <Typography className={classes.inlining} color='secondary' variant="h6" gutterBottom>
                                {numeral(monthlyPayment).format()} units
                              </Typography>
                            </div>
                            <div className={classes.inlining}>
                              <Avatar className={classes.interestAvatar}></Avatar>
                              <Typography className={classes.inlining} variant="subtitle2" gutterBottom>
                                Othe type
                              </Typography>
                              <Typography className={classes.inlining} color="secondary" variant="h6" gutterBottom>
                                {numeral(monthlyInterest).format()} units
                              </Typography>
                            </div>
                          </div>
                          <div >
                            <SimpleLineChart data={data} />
                          </div>
                        </div>
                      </Paper>
                  </Grid>
                  <Grid item xs={4}>
                    <Paper className={classes.paper} style={{position: 'relative'}}>
                      <div style={loading ? {display: 'block', left: '30%'} : {display: 'none'}} className={classes.loadingMessage}>
                        <span role='img' aria-label='emoji' style={{fontSize: 58, textAlign: 'center', display: 'inline-block', width: '100%'}}>👋</span>
                        <Typography variant="h6">
                          Waiting for input
                        </Typography>
                      </div>
                      <div className={loading ? classes.loadingState : ''}>
                        <Typography variant="subtitle1" gutterBottom>
                          State
                        </Typography>
                        
                        <Table className={classes.mainTable}>
                          <TableBody>
                            <TableRow className={classes.noBorder}>
                              <TableCell padding='none' style={{textAlign: 'left'}}>
                                <Typography variant="subtitle2">
                                  Number
                                </Typography>
                              </TableCell>
                              <TableCell numeric padding='none' style={{textAlign: 'right'}}>
                                <Typography variant="subtitle2" color="secondary">
                                  {numeral(amount).format()}
                                </Typography>
                              </TableCell>
                              <TableCell style={{textAlign: 'left'}}>
                                <Typography variant="subtitle2" color="secondary">
                                  USD
                                </Typography>
                              </TableCell>
                            </TableRow>
                            <TableRow className={classes.noBorder}>
                              <TableCell padding='none' style={{textAlign: 'left'}}>
                                <Typography variant="subtitle2">
                                  Extra
                                </Typography>
                              </TableCell>
                              <TableCell numeric padding='none' style={{textAlign: 'right'}}>
                                <Typography variant="subtitle2" color="secondary">
                                  0
                                </Typography>
                              </TableCell>
                              <TableCell style={{textAlign: 'left'}}>
                                <Typography variant="subtitle2" color="secondary">
                                  USD
                                </Typography>
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell padding='none' style={{textAlign: 'left'}}>
                                <Typography variant="subtitle2">
                                  Other
                                </Typography>
                              </TableCell>
                              <TableCell numeric padding='none' style={{textAlign: 'right'}}>
                                <Typography variant="subtitle2" color="secondary">
                                  {numeral(totalInterest).format()}
                                </Typography>
                              </TableCell>
                              <TableCell style={{textAlign: 'left'}}>
                                <Typography variant="subtitle2" color="secondary">
                                  USD
                                </Typography>
                              </TableCell>
                            </TableRow>
                          </TableBody>
                          <TableFooter>
                            <TableCell padding='none' style={{textAlign: 'left', paddingTop: 20}}>
                              <Typography variant="h6">
                                Costs
                              </Typography>
                            </TableCell>
                            <TableCell numeric padding='none' style={{textAlign: 'right', paddingTop: 20}}>
                              <Typography variant="h4" color="secondary">
                                {numeral(totalPayment).format()}
                              </Typography>
                            </TableCell>
                            <TableCell style={{textAlign: 'left', paddingTop: 20}}>
                              <Typography variant="h6" color="secondary">
                                USD
                              </Typography>
                            </TableCell>
                          </TableFooter>
                        </Table>
                        <div className={classes.buttonBar}>
                          <Button to={{ pathname: "/dashboard", search: `?type=save` }} component={Link} variant="outlined" className={classes.actionButtom}>
                            Save
                          </Button>
                          <Button to={{ pathname: "/dashboard", search: `?type=apply` }} component={Link} style={{background: '#182841'}} color='primary' variant="contained" className={classes.actionButtom}>
                            Apply
                          </Button>
                        </div>
                      </div>
                      </Paper>
                    </Grid>
                  </Grid>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </React.Fragment>
    )
  }
}

export default withRouter(withStyles(styles)(Dashboard));