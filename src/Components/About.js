
import React from "react";
import CV from "./About/CV.js"

/*                   srcset="images/thumbs/about/about-2000.jpg 2000w, 
                        images/thumbs/about/about-1000.jpg 1000w, 
                        images/thumbs/about/about-500.jpg 500w"
                   sizes="(max-width: 2000px) 100vw, 2000px" alt="">
*/
class AboutStyles extends React.Component {
  render() {
    return (
      <>
      <div class="media-wrap">
          <div>
              <img src="images/thumbs/about/about-1000.jpg" ></img>
          </div>
      </div>

      <div class="content__page-header">
          <h1 class="display-1">
          Hello, We Are TypeRite.
          </h1>
      </div> 

      <p class="lead drop-cap">
      Duis ex ad cupidatat tempor Excepteur cillum cupidatat 
      fugiat nostrud cupidatat dolor sunt sint sit nisi est eu exercitation 
      incididunt adipisicing veniam velit id fugiat enim mollit amet anim veniam dolor 
      dolor irure velit commodo cillum sit nulla ullamco magna amet magna cupidatat qui 
      labore cillum sit in tempor veniam consequat non laborum adipisicing aliqua 
      ea nisi sint.
      </p>

      <p>
      Duis ex ad cupidatat tempor Excepteur cillum cupidatat fugiat nostrud cupidatat 
      dolor sunt sint sit nisi est eu exercitation incididunt adipisicing veniam velit 
      id fugiat enim mollit amet anim veniam dolor dolor irure velit commodo cillum sit 
      nulla ullamco magna amet magna cupidatat qui labore cillum sit in tempor veniam 
      consequat non laborum adipisicing aliqua ea nisi sint ut quis proident ullamco ut 
      dolore culpa occaecat.
      </p>

      <h2>This Is Our Story</h2>

      <p>
      Odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti 
      dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique 
      sunt in culpa. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis 
      </p>
      
      <p>
      Duis ex ad cupidatat tempor Excepteur cillum cupidatat fugiat nostrud cupidatat dolor 
      sunt sint sit nisi est eu exercitation incididunt adipisicing veniam velit id fugiat enim 
      mollit amet anim veniam dolor dolor irure velit commodo cillum sit nulla ullamco. Lorem 
      ipsum Nisi amet fugiat eiusmod et aliqua ad qui ut nisi Ut aute anim mollit fugiat aute.
      </p>

      <hr></hr>

      <div class="row block-large-1-2 block-tab-full">
          <div class="column">
              <h4>Who We Are.</h4>
              <p>Lorem ipsum Nisi amet fugiat eiusmod et aliqua ad qui ut nisi Ut aute anim mollit fugiat qui sit ex occaecat et eu mollit nisi pariatur fugiat deserunt dolor veniam reprehenderit aliquip magna nisi consequat aliqua veniam in aute ullamco Duis laborum ad non pariatur sit.</p>
          </div>

          <div class="column">
              <h4>Our Mission.</h4>
              <p>Lorem ipsum Nisi amet fugiat eiusmod et aliqua ad qui ut nisi Ut aute anim mollit fugiat qui sit ex occaecat et eu mollit nisi pariatur fugiat deserunt dolor veniam reprehenderit aliquip magna nisi consequat aliqua veniam in aute ullamco Duis laborum ad non pariatur sit.</p>
          </div>

          <div class="column">
              <h4>Our Vision.</h4>
              <p>Lorem ipsum Nisi amet fugiat eiusmod et aliqua ad qui ut nisi Ut aute anim mollit fugiat qui sit ex occaecat et eu mollit nisi pariatur fugiat deserunt dolor veniam reprehenderit aliquip magna nisi consequat aliqua veniam in aute ullamco Duis laborum ad non pariatur sit.</p>
          </div>

          <div class="column">
              <h4>Our Core Values.</h4>
              <p>Lorem ipsum Nisi amet fugiat eiusmod et aliqua ad qui ut nisi Ut aute anim mollit fugiat qui sit ex occaecat et eu mollit nisi pariatur fugiat deserunt dolor veniam reprehenderit aliquip magna nisi consequat aliqua veniam in aute ullamco Duis laborum ad non pariatur sit.</p>
          </div>

      </div>
      </>
    );
  }
}

class About extends React.Component {

  render() {
    return (
      <div className="s-content content">
        <main className="row content__page">
          <section id="about" className="column large-full entry format-standard">

<AboutStyles/>

            <div className="row">
              <div className="column large-full">
                <h3>A test</h3>
                <p> Ask for more</p>
              </div>
            </div>

            <CV/>

          </section>
        </main>
      </div>
    );
  }
}

export default About;
