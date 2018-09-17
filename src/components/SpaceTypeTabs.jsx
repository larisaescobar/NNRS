import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import RatePerSpace, { RATES } from './RatePerSpace';
import SimpleSelect from './SimpleSelect';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const ROOMS = [
  {
    value: 'Single room'
  },
  {
    value: 'Double room'
  },
  {
    value: 'King Deluxe room'
  }
];

const styles = theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 956,
    width: '100%',
    backgroundColor: theme.palette.background.paper
  }
});

class SpaceTypeTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static" color='white'>
          <Tabs
            value={value}
            onChange={this.handleChange}
            indicatorColor='primary'
            textColor='black'
          >
            <Tab label="Room" />
            <Tab label="Bed" />
            <Tab label="Dorm" />

          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer>
          <Grid container spacing={24}>
            <Grid item sx={12} md={6}>
              <SimpleSelect 
                  label='Rate group'
                  items={RATES}
                  onChange={selected => {
                    this.setState({ selected })}}
                   selected={this.state.selected} 
                   />
             </Grid>   
             <Grid item sx={12} md={6}>
                <TextField 
                    id="voucher"
                    label="Voucher"
                    className={classes.TextField}
                    fullWidth
                    margin="normal" />
             </Grid> 
          </Grid>
          {ROOMS.map(room => (
            <RatePerSpace spaceType={room.value}
            addToBasket={this.props.addToBasket} />
          ))}
        </TabContainer>}
       
        {value === 1 && <TabContainer> 
          <Grid container spacing={24}>
            <Grid item sx={12} md={6}>
              <SimpleSelect 
                  label='Rate group'
                  items={RATES}
                   />
             </Grid>   
             <Grid item sx={12} md={6}>
              <TextField id="voucher"
                  label="Voucher"
                  className={classes.TextField}
                  fullWidth
                  margin="normal" />
             </Grid> 
          </Grid>
          <RatePerSpace spaceType='Bed in a 4 bed dorm'
            addToBasket={this.props.addToBasket} />
            <RatePerSpace spaceType='Bed in a 6 bed dorm'
            addToBasket={this.props.addToBasket} />
            <RatePerSpace spaceType='Bed in a 12 bed dorm'
            addToBasket={this.props.addToBasket} />
         
          </TabContainer>}
        {value === 2 && <TabContainer>
          <Grid container spacing={24}>
            <Grid item sx={12} md={6}>
              <SimpleSelect 
                  label='Rate group'
                  items={RATES}
                   />
             </Grid>   
             <Grid item sx={12} md={6}>
              <TextField id="voucher"
                  label="Voucher"
                  className={classes.TextField}
                  fullWidth
                  margin="normal" />
             </Grid> 
          </Grid>
          <RatePerSpace spaceType='6 bed dorm'
            addToBasket={this.props.addToBasket} />
            <RatePerSpace spaceType='8 bed dorm'
            addToBasket={this.props.addToBasket} />
        </TabContainer>}
      </div>
      

    );
  }
}

SpaceTypeTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SpaceTypeTabs);