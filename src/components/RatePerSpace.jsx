import React, { Component } from 'react';
import OnClickCounter from './OnClickCounter';
import SimpleSelect from './SimpleSelect';
import PriceBox from './PriceBox';
import { Button } from 'mews-ui';
import Grid from '@material-ui/core/Grid';


const numberOfAdults = [
    {
        label: 'Adults: 1',
        value: 1
    },
    {
        label: 'Adults: 2',
        value: 2
    },
    {
        label: 'Adults: 3',
        value: 3
    },
    {
        label: 'Adults: 4',
        value: 4
    },
    {
        label: 'Adults: 5',
        value: 5
    },
    {
        label: 'Adults: 6',
        value: 6
    },
    {
        label: 'Adults: 7',
        value: 7
    },
    {
        label: 'Adults: 8',
        value: 8
    }

];

export const RATES = [
    {
        label: 'Fully flexible',
        value: 99
    },
    {
        label: 'Easy cancelation',
        value: 89
    },
    {
        label: 'Non refundable',
        value: 69
    },

];

export const CARDS = [];

const initialState = {
    counter: 0,
    availability: 3,
    adults: 0,
    price: 0,
    rate:  0,
    rateLabel: '',
    roomType: '',
}

class RatePerSpace extends Component {
    state = {
        ...initialState,
        roomType: this.props.spaceType
    }
    

    Increment = () => {
        if(this.state.counter <= this.state.availability) {

            this.setState({ counter: this.state.counter + 1,
                price: this.state.rate * (this.state.counter + 1),
                availability: this.state.availability - this.state.counter });
        } else {
            return 0
        }
    }

    Decrease = () => {
        if(this.state.counter > 0) {
            this.setState({ counter: this.state.counter - 1,
                price: this.state.rate * (this.state.counter - 1),
                availability: this.state.availability + 1 });
        } else {
           this.setState({ counter: 0,
                price: this.state.rate * this.state.counter })
        }
        
    }

    SelectAdults = selected => {
        this.setState({ adults: selected })
    }

    SelectRate = (selected, state) => {
        this.setState(state => ({ rate: selected,
            price: (selected * this.state.counter),
            rateLabel: RATES.map(rate => {
                if(rate.value === selected) {
                    return rate.label;
                }
            })
            
     }));
    }

    handleAddClick = () => {
        const { counter, adults, rate, rateLabel, price, roomType } = this.state;

        this.props.addToBasket({
            numberOfRooms: counter,
            numberOfAdults: adults,
            rate,
            rateLabel,
            price,
            roomType
        })

        this.setState(() => initialState)
        
    }

    render() {
        return (
            <div>
                <Grid container>
                <h3>{this.props.spaceType}</h3>
            </Grid>
            <Grid container
                spacing={8} 
                direction='row'
                justify='space-between'
                alignItems='flex-end'>
                <Grid item>
                <OnClickCounter availability={this.state.availability}
                                incrementItem={this.Increment}
                                decreaseItem={this.Decrease}
                                counter={this.state.counter} />
                </Grid>
                <Grid item sx={6} md={3}>
                    <SimpleSelect label='Adults'
                        items={numberOfAdults}
                        onChange={this.SelectAdults}
                        selected={this.state.adults} />
                </Grid>
                <Grid item sx={6} md={3}>
                    <SimpleSelect label='Rate'
                        items={RATES}
                        onChange={this.SelectRate}
                        selected={this.state.rate} />
                </Grid>
                <PriceBox price={this.state.price} />    
                <Button 
                    onClick={this.handleAddClick}
                    primary={true}
                    raised={true}
                    label='Add'  
                />
            </Grid>
            </div>
            
        );
    };
}

export default RatePerSpace;
