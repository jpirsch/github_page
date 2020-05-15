
import React from "react";

function SkillBar( props ) {
  /*for (const prop in props) {
    console.log(`props.${prop} = ${props[prop]}`);
  }*/
  return (
    <>
    <li>
      <div className={"progress percent"+props.percent}><span>{props.percent+"%"}</span></div>
      <strong>{props.name}</strong>
    </li>
    </>
  );
}

class Skills extends React.Component {

  render() {
    const skillList = [
      { name: "C++", percent: "80" },
      { name: "C", percent: "80" },
      { name: "Lua", percent: "80" },
      { name: "Javascript", percent: "80" },
      { name: "Python", percent: "80" }
    ];
//    return (<h1> HOHO </h1>);
    return (
      <div>
        <h3>Skill Bars</h3>
        <ul className="skill-bars">
          {skillList.map((t, i) =>
            <SkillBar name={t.name} percent={t.percent} />
          )}
        </ul>
      </div>
    );
  }
}

export default Skills;
