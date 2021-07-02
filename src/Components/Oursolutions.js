import React from "react";
import './Oursolutions.css';
import Seller from "./Seller";
import Buyer from "./Buyer";

import SwipeableViews from "react-swipeable-views";
 import Tabs from "@material-ui/core/Tabs";
 import Tab from "@material-ui/core/Tab";

 const styles = {
  tabs: {
    background: '#fff',
    color:"#333",
    fontSize:"20px"
  }
};

class Oursolutions extends React.Component {
  state = {
    index: 0,
  };

  handleChange = (event, value) => {
    this.setState({
      index: value,
    });
  };

  handleChangeIndex = index => {
    this.setState({
      index,
    });
  };

  render() {
    const { index } = this.state;
    return (
      <section id="Oursolutions">
        <Tabs value={index} variant="fullWidth" onChange={this.handleChange} style={styles.tabs}>
          <Tab label="For Sellers" />
          <Tab label="For Buyers" />
        </Tabs>
        <SwipeableViews index={index} onChangeIndex={this.handleChangeIndex} >
          <div ><Seller/></div>
          
          <div ><Buyer/></div>
        </SwipeableViews>
      </section>
    );
  }
}
export default Oursolutions;