import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import SimpleMenu from './SimpleMenu';
import SimpleSelect from './SimpleSelect';
import Grid from '@material-ui/core/Grid';



const products = [
    {
        label: 'Breakfast',
        value: 10
    },
    {
        label: 'Parking',
        value: 5
    }
];

class SummaryBasket extends Component {
    constructor(props) {
        super(props);
        this.state = {
        active: false
        }
    }
 
    render() {
        return (
            <div>
                
                <Card style={{minWidth: 300, marginBottom: 15}}> 
                    <CardContent>
                        <Grid container
                            direction='row'
                            justify='space-between'
                            alignItems='center'
                            >
                            <Typography variant='title' gutterBottom align='left'>
                             {this.props.numberOfRooms} x {this.props.roomType}
                            </Typography>
                            <SimpleMenu handleDelete={this.props.handleDelete}
                            datakey={this.props.datakey} />
                        </Grid>
                        <Typography variant='subheading' gutterBottom align='left'>
                            {this.props.numberOfAdults} Adults
                        </Typography>
                       <SimpleSelect label='Products'
                            items={products}
                            onChange={selected => {
                                this.setState({ selected })}}
                               selected={this.state.selected}  />             
                       <Grid container
                            direction='row'
                            justify='flex-start'
                            alignItems='center'
                            style={{marginTop: 15}}
                            >
                            <Grid item xs={8} >
                            <Typography variant='body2' gutterBottom align='left'>
                                Rate
                            </Typography>   
                            <Typography variant='body1' gutterBottom align='left'>
                                {this.props.rateLabel}
                            </Typography>   
                        </Grid> 
                        <Grid item xs={4} >
                            <Typography variant='body2' gutterBottom align='left'>
                                Price
                            </Typography>   
                            <Typography variant='body1' gutterBottom align='left'>
                                ${this.props.price} 
                            </Typography>    
                        </Grid> 
                        </Grid> 
                    </CardContent>
                </Card>
            </div>
        )
    }
}

export default SummaryBasket;