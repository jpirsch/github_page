import React from "react";
import SimpleMDEReact from "react-simplemde-editor";
import "simplemde/dist/simplemde.min.css";
import FileInput from './FileInput';
import Header from './Header';
import Footer from './Footer';
import Download from './Download';
import Git from './Git';
import Clock from './Clock';
import Toolbar from './Toolbar';
import UserLogin from './UserLogin';
import Githob from './Githob';

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {textValue:"I am the initial value. Erase me, or try the button above."};
  }

  handleChange = value => {
    this.setState({
      textValue: value
    });
  };

  handleChangeFile = (e) => {
    if(window.FileReader){
      let file = e.target.files[0], reader = new FileReader(), self = this;
      reader.onload = function(r){
          self.setState({
              textValue: r.target.result
          });
      }
      reader.readAsText(file);
    }
  }

  render() {
  const tabs = [
    { title: "ichi" },
    { title: "ni" },
    { title: "san" },
    { title: "Log in" },
    { title: "Github" }
  ];
  const contents = [
    { inner: <div className="">
                      <FileInput onFileChange={this.handleChangeFile}/>
                      <Download text={this.state.textValue}/>
                    </div>},
    { inner: <p>Just a test to link a <a href="myfile.pdf">PDF file </a>...</p> },
    { inner: <Git /> },
    { inner: <UserLogin /> },
    { inner: <Githob /> }
  ];
    return (
      <div className="container container-narrow">
        <Header />
        <Clock />
        <Toolbar tabs={tabs} contents={contents} />
        
        
        <SimpleMDEReact
          id="page1-md1"
          className={""}
          label="Markdown Editor"
          value={this.state.textValue}
          onChange={this.handleChange}
        />
        <hr />
        <Footer />
      </div>
    );
  }
}

export default Demo;
