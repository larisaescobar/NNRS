import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

class PriceBox extends Component {
    render() {
        return (
            <div>
                <Grid container
                    direction='column'>
                <Grid container 
                    direction='row'
                    justify='space-between'
                    alignItems='center'>
                <strong>From </strong><i className="notranslate material-icons" data-icon-name="local_atm"></i>
                </Grid>
                <span>$ {this.props.price}/night</span> 
                </Grid>
            </div>
        )
    }
}

export default PriceBox;
