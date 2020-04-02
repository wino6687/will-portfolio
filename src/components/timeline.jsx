import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Research Assistant at EarthLab <span>2019-2020</span></h2>
                        <p> I was hired as a research assistant for the Analytics Hub at EarthLab after completing my internship. My work for the Analytics Hub focused on developing open source tools for accessing and processing large sattelite datasets, particularly netCDF files.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Intern at EarthLab - Data Harmonization<span>2017-2019</span></h2>
                        <p> I began an internship at EarthLab with their Data Harmonization team in the summer of 2017. My research pertained to the study of snow water equivalent (SWE) on large spatial extents using newly resampled passive microwave data. SWE is difficult to measure, and current techniques (Snotel) limit us to limited spatial resolutions and extents. Using temperature brightness data we can find reasonably accurate proxy variables for snow levels over massive extents. Wrangling and working with these massive datasets introduced me to many challenges of scaling data processing workflows. I learned to work with dask, vectorize operations with numpy, and more efficiently manage memory consumption. I also worked with many neural networks, mainly LSTM's and Conv-LSTM's for predicting SWE.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Undergraduate at CU Boulder <span>2014-2019</span></h2>
                        <p>I completed my undergraduate degrees in Computer Science and Geography from the University of Colorado Boulder in May 2019 with a cumulative GPA of 3.86. I also completed a professional certificate in Geographic Information Science (GIS). I focused on data science, machine learning, and open source python development in my time at CU. </p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
