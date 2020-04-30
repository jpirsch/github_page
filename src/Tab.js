import React from "react";

class Tab extends React.Component {
  constructor() {
    super();
    this.toggleTab = this.toggleTab.bind(this);
  }

  toggleTab(){
    this.props.onClick(this.props.id)
  }

  render() {
    return ( 
      <button className='btn btn-outline-secondary' onClick={this.toggleTab} >
        {this.props.title}
      </button>
    )
  }
}

export default Tab;
