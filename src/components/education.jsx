import React, { Component } from 'react'


export default class Education extends Component {
  render() {
    return (

      <section className="colorlib-education" data-section="education">
        <div className="colorlib-narrow-content">
          <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
              <span className="heading-meta">Education</span>
              <h2 className="colorlib-heading animate-box">Education</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 animate-box" data-animate-effect="fadeInLeft">
              <div className="fancy-collapse-panel">
                <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                  <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="headingOne">
                      <h4 className="panel-title">
                        <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Bachelor Degree of Computer Science
                        </a>
                      </h4>
                    </div>
                    <div id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                      <div className="panel-body">
                        <p>I completed my degree in computer science in 2019 with a <strong>GPA of 3.86.</strong> I learned a broad range of skills during my time in CS at CU. I primarily focused on learning skills pertaining to data science in python, but also obtained the core skill of CS (data structures, algorithms). Some of my interest areas focused on becoming fluent with python's available libraries like numpy, pandas, scikit-learn/image, pyTorch, and dask. I also learned quite a bit about applying machine learning to problems in natural language processing and spatio-temporal problems. There are so many topics in CS that I could never cover them all in my 4 years of undergrad, but I am confident that I can quickly learn languages or other technologies I haven't previously used.</p>
                        <span className="heading-meta">Coursework</span>
                        <ul>
                          <li>Algorithms</li>
                          <li>Data Science</li>
                          <li>Data Structures</li>
                          <li>Computer Systems</li>
                          <li>Database Systems</li>
                          <li>Natural Language Processing</li>
                          <li>Big Data Architecture</li>
                          <li>Big Data</li>
                          <li>Discrete Math</li>
                          <span class="btn btn-outline-link">C/C++</span>
                          <span class="btn btn-outline-link">Python</span>
                          <span class="btn btn-outline-link">R</span>
                          <span class="btn btn-outline-link">SQL</span>
                          <span class="btn btn-outline-link">MongoDB</span>
                          <span class="btn btn-outline-link">GIT</span>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="headingTwo">
                      <h4 className="panel-title">
                        <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Bachelor Degree of Geography
                        </a>
                      </h4>
                    </div>
                    <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                      <div className="panel-body">
                        <p>I completed my Geography degree in 2018 with a GPA of 3.86. I focused on Geographic Information Science while working on my Geography degree. I worked with ESRI software, but prefer to use open source python solutions to solve problems. My coursework covered a broad range of topics ranging from Geomorphology to Spatial Programming.</p>
                        <span className="heading-meta">Coursework</span>
                        <ul>
                          <li>GIS Fundamentals</li>
                          <li>Spatial Modeling</li>
                          <li>Earth Data Science</li>
                          <li>Geospatial Statitics</li>
                          <li>GIS Programming</li>
                          <li>Cartography</li>
                          <li>Geomorphology</li>
                          <li>Atmoshperic Science</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="headingThree">
                      <h4 className="panel-title">
                        <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Geographic Information Science (GIS) Professional Certificate
                        </a>
                      </h4>
                    </div>
                    <div id="collapseThree" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                      <div className="panel-body">
                        <p>I completed a professional certificate in Geographic Information Science, GIS, in 2018. My work involved a focus on solving spatio-temporal problems with open source python tools. I was also trained to use ESRI software, although I prefer the many tools open source python has to offer.</p>	
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}