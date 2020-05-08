import React from "react";

var NewComponent = React.createClass({

  render: function() {

    return (
      <div id="preloader">
        <div id="loader" className="dots-fade">
          <div />
          <div />
          <div />
        </div>
      </div>
    );
  }
});
