
import React from "react";
import Timeline from "./Timeline.js"
import {Column6, RowHalf} from "../Grid.js"

function Exp1() {
    const date = "April 2019 - April 2020";
    const company = "Independant software developper Maa Berriet";
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

function Exp2() {
    const date = "October 2018 - April 2019";
    const company = "Mycelium lab @Matrice.io";
    const where = "Paris";
    const role = "Co-founder";
    const languages = "Python, Javascript";
    const content = `
Lab attached to the Matrice incubator mainly devoted to NLP.
Talk on NLP and AI influences on the workplace at Great Place To Work
Presentation at Robot of the Year for Randstad : overcoming biases in NLP algorithms.`;
  return ({date:date,company:company,where:where,role:role,
    languages:languages,content:content}
  );
}

function Exp3() {
    const date = "April 2017 - October 2017";
    const company = "Digital Arti";
    const where = "Paris";
    const role = "Freelance developer";
    const languages = "Objective-C, Lua, OpenGL, Dlib";
    const content = `
Portage of Dior FaceMapping ( Augmented Reality makeup
visualization ) to IOS .`;
  return ({date:date,company:company,where:where,role:role,
    languages:languages,content:content}
  );
}

function Exp4() {
    const date = "November 2016 - April 2017";
    const company = "Independant software developper Maa Berriet";
    const where = "Paris";
    const role = "Intern developer";
    const languages = "Lua, OpenGL, C++";
    const content = `
with Maa Berriet : extending AAASeed ( realtime 3d engine )
interface to VR, finishing the port to 64bit.`;
  return ({date:date,company:company,where:where,role:role,
    languages:languages,content:content}
  );
}

function Exp5() {
    const date = "November 2015 - February 2016";
    const company = "Domopad";
    const where = "Paris";
    const role = "Intern developer";
    const languages = "C, Python, PHP, network (TCP, UDP)";
    const content = `
Configuring, securing and optimising code and network
structure of connected objects, for connected houses.`;
  return ({date:date,company:company,where:where,role:role,
    languages:languages,content:content}
  );
}

function Exp0() {
  return ({date:"",company:"",where:"",role:"",
    languages:"",content:""});
}

class ExpRows extends React.Component {
  render() {
    const expb = [[Exp1(), Exp3()],
                  [Exp2(), Exp4()],
                  [Exp5(), Exp0()]];
    return (
      <>
        {expb.map((v,k) =>
        <RowHalf key={k} >
          {v.map((t,i) =>
          <Column6 key={i+20}>
            <Timeline date={t.date} company={t.company}
              where={t.where} languages={t.languages}
              role={t.role} content={t.content} key={i} />
          </Column6>
          )}
        </RowHalf>
        )}
      </>
    );
  }
}

export default ExpRows;
