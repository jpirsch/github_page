import React from "react";
import Tab from './Tab';
//import Tabs from 'react-bootstrap/Tabs';
//import Tab from 'react-bootstrap/Tab';

//class MenuContainer extends React.Component {
class Toolbar extends React.Component {
  constructor() {
    super();

    this.state = { active: 0}
  }


  toggleTab = (toToggle) => {

  // function that will toggle active/false
    this.setState({
      active: toToggle
    });
    console.log(this.state);
  }


  render() {

    let displayState = this.props.contents.map((ct, i) =>
      i == this.state.active ? "block" : "none");
    return ( 
      <div>
        {this.props.tabs.map((t, i) =>
          <Tab key={i} id={i} title={t.title} onClick={this.toggleTab} />
        )}
        {this.props.contents.map((ct, i) =>
          <div key={i} style={{display: displayState[i]}}>
            {ct.inner}
          </div>
        )}
      </div>
    )
  }
}

export default Toolbar;
/*
        <Tab id={0} onClick={this.toggleTab} title='ni' >
        </Tab>
        <Tab id={this.state.active} onClick={this.toggleTab} title='ichi' >
        </Tab>
        <div style={{display: displayState}}>
          <h3>Coucou, tu veux voir Magritte ?</h3>
        </div>
        <div>
          <h3>Ceci n est pas une pipe</h3>
        </div>
  <div>
  <h3>Tooulbar</h3>
  <div eventKey="to" >
  </div>
  <div eventKey="be" >
  </div>
  <div eventKey="three" >
  </div>
  </div>
*/
/*      <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
        <Tab eventKey="home" title="Home">
          Pipe
        </Tab>
        <Tab eventKey="profile" title="Profile">
          Pas une pipe
        </Tab>
        <Tab eventKey="truc" title="truc">
          Pas un magritte
        </Tab>
        <Tab eventKey="contact" title="Contact" disabled></Tab>
      </Tabs>
*/
