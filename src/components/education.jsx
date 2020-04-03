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
                        <p>I completed my degree in computer science in 2019 with a <strong>GPA of 3.86.</strong> </p>
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
                        <p>I completed my Geography degree in 2018 with a GPA of 3.86. I focused on Geographic Information Science while working on my Geography degree. I worked with ESRI software, but mainly used open source solutions to solve spatio-temporal problems.</p>
                        <span className="heading-meta">Coursework</span>
                        <ul>
                          <li>GIS 1, 2, 3</li>
                          <li>Geospatial Statitics</li>
                          <li>GIS Programming</li>
                          <li>Earth Data Science</li>
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