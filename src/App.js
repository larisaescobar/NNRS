import React, { Component } from 'react';
import SpaceTypeTabs from './components/SpaceTypeTabs';
import SummaryBasket from './components/SummaryBasket';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Button } from 'mews-ui';

class App extends Component {
  state = {
    basket: [],
    totalGuests: 0,  
    };

    addToBasket = (newItem, state) => {
      this.setState(state => ({
        basket: [
          ...this.state.basket,
          newItem,
        ],
      }));
  }

    handleDelete = (e) => {
      const i = e.currentTarget.getAttribute('datakey');
      const basket = this.state.basket;
      basket.splice(i, 1);
      this.setState(state => ({
        basket: basket
      }));
    }

  render() {
    const arrayOfPrices = this.state.basket.map(x =>  x.price )
    const arrayOfAdults = this.state.basket.map(x => x.numberOfAdults)
    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    const totalPrice = arrayOfPrices.reduce(reducer, 0);
    const totalAdults = arrayOfAdults.reduce(reducer, 0);

    console.log(this.state.basket);

    return (
      <div>
        <Typography variant="title" color="inherit" style={{margin: 20, paddingTop: 20}}>
              Dates
            </Typography>
          <AppBar position="static" color='white' style={{maxWidth: 956 }}>
          <Toolbar>
            <Typography variant="subheading" color="inherit">
            <strong>Dates:</strong> Fri 16.8.2018 - Sun 18.8.2018 <i className="material-icons">edit</i>
            </Typography>
          </Toolbar>
        </AppBar>
        <Typography variant="title" color="inherit" style={{margin: 20}}>
              Price & availability
            </Typography>
        <Grid container
            direction='row'>
          <SpaceTypeTabs addToBasket={this.addToBasket}/>
          {this.state.basket.length > 0 && 
            <div style={{marginTop: 50, marginLeft: 20}}
            >
              <Typography gutterBottom variant="title" component="h3">
                  Summary
              </Typography>
              <Typography variant='subheading' gutterBottom>
                  My Hostel
              </Typography>
              {this.state.basket.map((item, index) => (
                  <SummaryBasket key={index} {...item}
                  datakey={index}
                  handleDelete={this.handleDelete} />
              ))}
               <Divider style={{marginTop:20, marginBottom:20}}/>
                <Grid container
                    direction='row'
                    justify='space-between'
                    alignItems='center'>
                    <Typography gutterBottom variant='title'>
                        Adults: {totalAdults}
                    </Typography>
                    <Typography gutterBottom  variant='title'>
                        Total: $ {totalPrice} 
                    </Typography>
                </Grid>
                <Grid container
                    direction='row'
                    justify='space-around'
                    alignItems='center'
                    style={{marginTop: 20, marginBottom: 20}}>
                <Button onClick={this.props.addToBasket}
              primary={false}
              raised={true}
              label='Book now'  
                />
                </Grid>
              </div>
              }  
        </Grid>
        
      </div>
    );
  }
}

export default App;
