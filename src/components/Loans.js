import React,  { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import DescriptionIcon from '@material-ui/icons/Description'

import Topbar from './Topbar'

const qs = require('query-string');

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
    marginTop: 60,
    padding: 20,
    paddingBottom: 500
  },
  grid: {
    width: 1000
  },
  paper: {
    padding: theme.spacing.unit * 3,
    textAlign: 'left',
    color: theme.palette.text.secondary
  },
  avatar: {
    margin: 10,
    backgroundColor: '#E6ECFF',
    color: 'black'
  },
  itemContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  backButton: {
    marginRight: theme.spacing.unit,
  }
})

const months = [
  '01 December 2018',
  '01 January 2019',
  '01 February 2019',
  '01 March 2019',
  '01 April 2019',
  '01 May 2019',
  '01 June 2019',
  '01 July 2019',
  '01 August 2019',
  '01 September 2019',
  '01 October 2019',
  '01 November 2019',
  '01 December 2019',
  '01 January 2020',
  '01 March 2020',
  '01 April 2020',
  '01 May 2020',
  '01 June 2020',
  '01 July 2020',
  '01 August 2020',
  '01 September 2020',
  '01 October 2020',
  '01 November 2020',
  '01 December 2020'
]

class Loans extends Component {

  componentDidMount() {
  
  }

  render() {
    const { classes } = this.props;
    const queryString = this.props.location.search
    const parsed = queryString ? qs.parse(queryString) : {}
    const currentPath = this.props.location.pathname

    return (
      <React.Fragment>
        <CssBaseline />
        <Topbar currentPath={currentPath} />
        <div className={classes.root}>
          <Grid container justify="center"> 
            <Grid spacing={24} alignItems="center" justify="center" container className={classes.grid}>
              <Grid item xs={12}>
                <Typography variant="subtitle1" style={{fontWeight: 'bold'}} gutterBottom>
                  Concluded requests for Loans
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Here you find all loans that you've been applied for.
                </Typography>
                <div style={{marginTop: 20}}>
                  { parsed.type === 'loan' && (
                     <Paper className={classes.paper}>
                     <div className={classes.itemContainer}>
                       <div>
                         <Avatar className={classes.avatar}>
                           <DescriptionIcon />
                         </Avatar>
                       </div>
                       <div style={{alignSelf: 'baseline', marginLeft: 80}}>
                         <div style={{ display: 'inline-block'}}>
                           <Typography style={{textTransform: 'uppercase'}} color='secondary' gutterBottom>
                             Repayment
                           </Typography>
                           <Typography variant="h6" gutterBottom>
                             { parsed ? numeral(parsed.period).format() : 4} month(s)
                           </Typography>
                         </div>
                         <div style={{ display: 'inline-block', marginLeft: 40}}>
                           <Typography style={{textTransform: 'uppercase'}} color='secondary' gutterBottom>
                             Start date
                           </Typography>
                           <Typography variant="h6" gutterBottom>
                             { parsed && parsed.start ? months[parsed.start] : '01 February 2019'}
                           </Typography>
                         </div>
                         <div style={{ display: 'inline-block', marginLeft: 40}}>
                           <Typography style={{textTransform: 'uppercase'}} color='secondary' gutterBottom>
                             Interests
                           </Typography>
                           <Typography variant="h6" gutterBottom>
                             { parsed ? numeral(parsed.interest).format() : '6,600'} DKK
                           </Typography>
                         </div>
                       </div>
                       <div style={{width: '30%', textAlign: 'right', marginLeft: 50, alignSelf: 'flex-end'}}>
                         <Typography style={{textTransform: 'uppercase'}} color='secondary' gutterBottom>
                           Applied Amount
                         </Typography>
                         <Typography variant="h4" gutterBottom>
                           { parsed ? numeral(parsed.cost).format() : '81,600'} DKK
                         </Typography>
                         <div style={{marginTop: 24}}>
                           <Button
                             onClick={() => null}
                             className={classes.backButton}
                             >
                               Delete
                             </Button>
                             <Button 
                               variant="contained"
                               color="primary"
                               onClick={() => null}
                               style={{background: '#182841', color: 'white'}}
                             >
                               Recalculate
                             </Button>
                         </div>
                       </div>
                     </div>
                   </Paper> 
                  )}
                </div>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </React.Fragment>
    )
  }
}

export default withStyles(styles)(Loans);