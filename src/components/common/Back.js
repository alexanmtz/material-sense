import React,  { Component } from 'react';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import Typography from '@material-ui/core/Typography';
import { Link, withRouter } from 'react-router-dom';

class Back extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div>
                <Typography variant="h6" gutterBottom>
                    <Link style={{textDecoration: 'none', color: 'inherit'}} to={{ pathname: "/dashboard" }}>
                        <KeyboardArrowLeft />
                        <span style={{display: 'inline-block', verticalAlign: 'text-bottom'}}>Back to Dashboard</span>
                    </Link>
                </Typography>
            </div>
        )
    }
  }
  
  export default withRouter(Back);