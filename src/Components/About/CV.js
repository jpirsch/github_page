
import React from "react";
import Skills from "./Skills.js"
import Timeline from "./Timeline.js"
import {Column6, RowHalf} from "../GridHOC.js"

//class Page_item extends React.Component {
//  render() {
function Item(props) {
    return (
      <div>
        <h3>A test</h3>
        <p> Ask for more</p>
	{props.children}
      </div>
    );
//  }
}

function Experience1() {
    const date = "April 2019 - April 2020";
    const company = "Emmanuel Berriet";
    const where = "Paris";
    const role = "Freelance developer";
    const languages = "C++ - Lua - OpenGL";
    const content = `
Motion capture with Kinect and OpenCV
Physic engine with Bullet, Vector field generation.
3D Rendering Techniques : Raymarching
Applied in various digital art events : Djeddah Waterfront festival, Launch of LV Blossom`;
  return ({date:date,company:company,where:where,role:role,
    languages:languages,content:content}
  );
}

class CV extends React.Component {
  render() {
    const e1 = Experience1();
//    const t1      = new Timeline({content:"test"});
    const R1Col1  = Column6(Timeline);
    const R1Col2  = Column6(Item);
    const Row1    = RowHalf(R1Col1, R1Col2);
    const R2Col1  = Column6(Item);
    const R2Col2  = Column6(Skills);
    const Row2    = RowHalf(R2Col1, R2Col2);
    return (
      <div>
	<Item><Timeline date={e1.date} company={e1.company}
                where={e1.where} languages={e1.languages}
                role={e1.role} content={e1.content} /></Item>
        <Row1/>
        <Row2/>
      </div>
    );
  }
}

export default CV;

/*
Mycelium lab @Matrice.io, Paris - Co-founder

October 2018 - April 2019 | Python, Javascript

Lab attached to the Matrice incubator mainly devoted to NLP.

Talk on NLP and AI influences on the workplace at Great Place To Work

Presentation at Robot of the Year for Randstad : overcoming biases in NLP algorithms.

Digital Arti,  Paris - Freelance developer

April 2017 - October 2017 | Objective-C, Lua, OpenGL, Dlib 

Portage of Dior FaceMapping ( Augmented Reality makeup visualization ) to IOS .

Emmanuel Berriet, Paris - Intern developer

November 2016 - April 2017 | Lua, OpenGL, C++ 

with Maa Berriet : extending AAASeed ( realtime 3d engine ) interface to VR, finishing the port to 64bit.

Domopad, Paris - Intern developer

November 2015 - February 2016 | C, Python, PHP, network (TCP, UDP)

Configuring, securing and optimising code and network structure of connected objects, for connected houses.

*/
