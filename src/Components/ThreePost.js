
import React from "react";
import "./ShaderGallery.css"
import ThreeC from "./Three/ThreeCanvas.js"
import Scene2 from "./Three/Scene2.js"


class ThreePost extends React.Component {

  render() {
    return (
      <div className="s-content content">
        <main className="row s-styles">
          <section id="Graphics" className="column large-full">

            <div className="backshadow">
              <ThreeC>
                <Scene2 />
              </ThreeC>
            </div>

          </section>
        </main>
      </div>
    );
  }
}
    //const Col = ColumnFull(ThreeCanvas); 
    //const Row1 = Row(Col);

export default ThreePost;


                  //<img src="images/thumbs/single/standard/standard-1000.jpg" />
export class ThreePost2 extends React.Component {
  render() {
    return (
      <>
        <div class="s-content content">
          <main class="row content__page">
            <article class="column large-full entry format-standard">
              <div class="media-wrap entry__media">
                <div class="entry__post-thumb">
            <div className="backshadow">
                  <ThreeC>
                    <Scene2 />
                  </ThreeC>
            </div>
                </div>
              </div>
      
              <div class="content__page-header entry__header">
                <h1 class="display-1 entry__title">
                  This Is A Standard Format Post.
                </h1>
                <ul class="entry__header-meta">
                  <li class="author">By <a href="#0">Jonathan Doe</a></li>
                  <li class="date">April 30, 2019</li>
                  <li class="cat-links">
                    <a href="#0">Marketing</a><a href="#0">Management</a>
                  </li>
                </ul>
              </div>
      
              <div class="entry__content">
                <p class="lead drop-cap">
                  Duis ex ad cupidatat tempor Excepteur cillum cupidatat 
                  fugiat nostrud cupidatat dolor sunt sint sit nisi est eu 
                  incididunt adipisicing veniam velit id fugiat enim mollit 
                  dolor irure velit commodo cillum sit nulla ullamco magna 
                  labore cillum sit in tempor veniam consequat non laborum 
                  ea nisi sint.
                </p>
      
                <p>
                  Duis ex ad cupidatat tempor Excepteur cillum cupidatat 
                  dolor sunt sint sit nisi est eu exercitation incididunt 
                  id fugiat enim mollit amet anim veniam dolor dolor irure 
                  nulla ullamco magna amet magna cupidatat qui labore cillum 
                  consequat non laborum adipisicing aliqua ea nisi sint ut ut 
                  dolore culpa occaecat ut laboris in sit minim cupidatat ut 
                  veniam consequat occaecat fugiat in adipisicing in amet Ut 
                  aliqua laborum mollit quis nostrud sed sed.
                </p>
              </div>
            </article>
          </main>
        </div>
      </>
    );
  }
}
