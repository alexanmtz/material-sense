import React,  { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { Link, withRouter } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const logo = require('../images/logo.svg');

const styles = theme => ({
  appBar: {
    position: 'relative',
    boxShadow: 'none',
    borderBottom: `1px solid ${theme.palette.grey['100']}`,
    backgroundColor: 'white'
  },
  productLogo: {
    display: 'inline-block',
    borderLeft: `1px solid ${theme.palette.grey['A100']}`,
    marginLeft: 32,
    paddingLeft: 24
  },
  tabContainer: {
    marginLeft: 32
  },
  tabItem: {
    paddingTop: 20,
    paddingBottom: 20,
    minWidth: 'auto'
  }
})

class Topbar extends Component {

  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  current = () => {
    if(this.props.currentPath === '/home') {
      return 0
    }
    if(this.props.currentPath === '/dashboard') {
      return 1
    }
    if(this.props.currentPath === '/signup') {
      return 2
    }
    if(this.props.currentPath === '/wizard') {
      return 3
    }
    if(this.props.currentPath === '/cards') {
      return 4
    }

  }
  
  render() {
    
    const { classes } = this.props;
    
    return (
      <AppBar position="absolute" color="default" className={classes.appBar}>
        <Toolbar>
            <Grid container spacing={24} alignItems="baseline">
              <Grid item xs={12} alignItems='baseline' style={{display: 'flex'}}>
                  <div style={{display: 'inline-block'}}>
                    <Typography variant="h6" color="inherit" noWrap>
                      <Link to='/' style={{textDecoration: 'none', color: 'inherit'}}>
                        <img width={20} src={logo} />
                        <span style={{display: 'inline-block', marginLeft: 10}}>Material Sense</span>
                      </Link>
                    </Typography>
                  </div>
                  { !this.props.noTabs && (
                    <React.Fragment>
                      <div className={classes.productLogo}>
                        <Typography style={{fontWeight: 'bold'}}>
                          A material UI Template
                        </Typography>
                      </div>
                      <div className={classes.tabContainer}>
                        <Tabs
                          value={this.current() || this.state.value}
                          indicatorColor="primary"
                          textColor="primary"
                          onChange={this.handleChange}
                        >
                          <Tab component={Link} to={{pathname: "/", search: this.props.location.search}} classes={{root: classes.tabItem}} label="Home" />
                          <Tab component={Link} to={{pathname: "/dashboard", search: this.props.location.search}} classes={{root: classes.tabItem}} label="Dashboard" />
                          <Tab component={Link} to={{pathname: "/signup", search: this.props.location.search}} classes={{root: classes.tabItem}} label="Signup" />
                          <Tab component={Link} to={{pathname: "/wizard", search: this.props.location.search}} classes={{root: classes.tabItem}} label="Wizard" />
                          <Tab component={Link} to={{pathname: "/cards", search: this.props.location.search}} classes={{root: classes.tabItem}} label="Cards" />
                        </Tabs>
                      </div>
                    </React.Fragment>  
                  )}
              </Grid>
            </Grid> 
        </Toolbar>
      </AppBar>
    )
  }
}

export default withRouter(withStyles(styles)(Topbar))