
import React from 'react';

export class Bullet extends React.Component {
  render() {
    return (
      <>
        <BasePost/>
      </>
    );
  }
}

class BasePost extends React.Component {
  render() {
    return (
      <>
        <div class="s-content content">
          <main class="row content__page">
            <article class="column large-full entry format-standard">
              <div class="media-wrap entry__media">
                <div class="entry__post-thumb">
                  <img src="images/thumbs/single/standard/standard-1000.jpg" />
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
                  dolore culpa occaecat ut laboris in sit minim cupidatat ut dolor voluptate enim 
                  veniam consequat occaecat fugiat in adipisicing in amet Ut nulla nisi non ut enim 
                  aliqua laborum mollit quis nostrud sed sed.
                </p>
      
                  <p>
                  <img src="images/wheel-1000.jpg" />
                  </p>
      
                  <h2>Large Heading</h2>
      
                  <p>
                  Harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum 
                  soluta nobis est eligendi optio cumque nihil impedit quo minus 
                  <a href="http://#">omnis voluptas assumenda est</a> id quod maxime placeat 
                  facere possimus, omnis dolor repellendus. Temporibus autem quibusdam et aut 
                  officiis debitis aut rerum necessitatibus saepe eveniet ut et.
                  </p>
      
                  <blockquote>
                      <p>
                      For God so loved the world, that he gave his only Son, that whoever believes in 
                      him should not perish but have eternal life. For God did not send his Son into 
                      the world to condemn the world, but in order that the world might be 
                      saved through him.
                      </p>
                      <cite>John 3:16-17 ESV</cite>
                  </blockquote>
      
                  <p>
                  Odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque 
                  corrupti dolores et quas molestias excepturi sint occaecati cupiditate non provident, 
                  similique sunt in culpa. Aenean eu leo quam. Pellentesque ornare sem lacinia quam 
                  venenatis vestibulum. Nulla vitae elit libero, a pharetra augue laboris in sit minim 
                  cupidatat ut dolor voluptate enim veniam consequat occaecat fugiat in adipisicing 
                  in amet Ut nulla nisi non ut enim aliqua laborum mollit quis nostrud sed sed.
                  </p>
      
                  <h3>Smaller Heading</h3>
      
                  <p>
                  Odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque 
                  corrupti dolores et quas molestias excepturi sint occaecati cupiditate non provident, 
                  similique sunt in culpa. Aenean eu leo quam. Pellentesque ornare sem lacinia quam 
                  venenatis vestibulum. Nulla vitae elit libero, a pharetra augue laboris in sit minim 
                  cupidatat ut dolor voluptate enim veniam consequat occaecat fugiat in adipisicing 
                  in amet Ut nulla nisi non ut enim aliqua laborum mollit quis nostrud sed sed.
                  </p>
<pre><code>
    {`code {
        font-size: 1.4rem;
        margin: 0 .2rem;
        padding: .2rem .6rem;
        white-space: nowrap;
        background: #F1F1F1;
        border: 1px solid #E1E1E1;	
        border-radius: 3px;
    }`}
</code></pre>
                  <p>
                  Odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque 
                  corrupti dolores et quas molestias excepturi sint occaecati cupiditate non provident, 
                  similique sunt in culpa. Aenean eu leo quam. Pellentesque ornare sem lacinia quam 
                  venenatis vestibulum. Nulla vitae elit libero, a pharetra augue laboris in sit minim 
                  cupidatat ut dolor voluptate enim veniam consequat occaecat fugiat in adipisicing 
                  in amet Ut nulla nisi non ut enim aliqua laborum mollit quis nostrud sed sed.
                  </p>
      
                  <ul>
                      <li>Donec nulla non metus auctor fringilla.
                          <ul>
                              <li>Lorem ipsum dolor sit amet.</li>
                              <li>Lorem ipsum dolor sit amet.</li>
                              <li>Lorem ipsum dolor sit amet.</li>
                          </ul>
                      </li>
                      <li>Donec nulla non metus auctor fringilla.</li>
                      <li>Donec nulla non metus auctor fringilla.</li>
                  </ul>
      
                  <p>
                  Odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque 
                  corrupti dolores et quas molestias excepturi sint occaecati cupiditate non provident, 
                  similique sunt in culpa. Aenean eu leo quam. Pellentesque ornare sem lacinia quam 
                  venenatis vestibulum. Nulla vitae elit libero, a pharetra augue laboris in sit minim 
                  cupidatat ut dolor voluptate enim veniam consequat occaecat fugiat in adipisicing 
                  in amet Ut nulla nisi non ut enim aliqua laborum mollit quis nostrud sed sed.
                  </p>
      
      
                  <p class="entry__tags">
                      <span>Post Tags</span>
      
                      <span class="entry__tag-list">
                          <a href="#0">orci</a>
                          <a href="#0">lectus</a>
                          <a href="#0">varius</a>
                          <a href="#0">turpis</a>
                      </span>
      
                  </p>
              </div> 
            </article>
          </main>
        </div>
      </>
    );
  }
}

//srcset="images/thumbs/single/standard/standard-2000.jpg 2000w, 
//images/thumbs/single/standard/standard-1000.jpg 1000w, 
//images/thumbs/single/standard/standard-500.jpg 500w" sizes="(max-width: 2000px) 100vw, 2000px" alt="">

//srcset="images/wheel-2000.jpg 2000w, 
//        images/wheel-1000.jpg 1000w, 
//        images/wheel-500.jpg 500w" 
//        sizes="(max-width: 2000px) 100vw, 2000px" alt="">

export default BasePost;
