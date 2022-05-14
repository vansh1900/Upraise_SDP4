import React from 'react'
import './volhome.css';
import VolHeader from '../v_header/VolHeader';
import imran from '../../Images/imran.png';
import faqimg from '../../Images/faqimg.png';
import aboutimg from '../../Images/aboutimg.png';
import donate from '../../Images/donate.jpg';

export default function Vol_Home() {
  return (
    <div>
      <VolHeader />

      <div class="top">
        <div class="leftcontent">
          <span class="textLeftTop">Transport as per the Others <span class="specialTextOnline">Need</span></span><br />
          <span><span class="textLeftTopDown">... it helps to some one.</span></span>
        </div>
        <div class="rightimage">
          <img class="image" style={{borderRadius: '50%', width: '60%', height: '60%', marginLeft: '150px', marginTop: '100px'}} src={donate} alt="doctor" />
        </div>
      </div>


      <section id="about" class="section-100 bg-white">
        <div class="container">
          <div class="row flex-center">
            <div class="col-md-6 col-lg-6">
              <img src={aboutimg} alt="" class="img-fluid m-b-15" data-aos="fade-up" />
            </div>
            <div class="col-md-6 col-lg-5 offset-lg-1">
              <br />
              <div class="feat">
                <div class="feat-box" data-aos="fade-left" data-aos-delay="300">
                  <div class="feat-icon">
                    <i class="fa fa-user fa-2x" aria-hidden="true"></i>
                  </div>
                  <div class="feat-content">
                    <h5>Donator</h5>
                    <p>Donator donates certain catogory of donations like: clothes, toys, etcc..</p>
                  </div>
                </div>
                <div class="feat-box" data-aos="fade-left" data-aos-delay="400">
                  <div class="feat-icon">
                    <i class="fa fa-user fa-2x" aria-hidden="true"></i>
                  </div>
                  <div class="feat-content">
                    <h5>Volunteer</h5>
                    <p>Volunteer keep help us in the form of transporting the donations from the donator to the organization</p>
                  </div>
                </div>
                <div class="feat-box" data-aos="fade-left" data-aos-delay="500">
                  <div class="feat-icon">
                  <i class="fa fa-user fa-2x" aria-hidden="true"></i>
                  </div>
                  <div class="feat-content">
                    <h5>Organization</h5>
                    <p>Organization people will register and request for certain category of donations. If that ctaegory acheives then we will send to them.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="team" class="section-100 bg-white">
        <div class="container">
          <h1 class="text-center" data-aos="fade-up" data-aos-delay="100"><b>Our Team</b></h1>
          <p class="text-center" data-aos="fade-up" data-aos-delay="200">We are very productive and supportive team</p>
          <br />
          <br />
          <div class="row">
            <div class="col-lg-4 col-sm-6">
              <div class="team-box" data-aos="fade-left" data-aos-delay="100">
                <img src={imran} alt="" />
                <div class="team-info">
                  <h4 class="text-muted">P.Imran Ali Khan</h4>
                  <p class="primary-color" style={{marginLeft: '-50px'}}>Frontend Developer</p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6">
              <div class="team-box" data-aos="fade-left" data-aos-delay="200">
                <img src={imran} alt="" />
                <div class="team-info">
                  <h4 class="text-muted">S. Krishna Vamsi</h4>
                  <p class="primary-color" style={{marginLeft: '-50px'}}>Backend Developer</p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6">
              <div class="team-box" data-aos="fade-left" data-aos-delay="300">
                <img src={imran} alt="" />
                <div class="team-info">
                  <h4 class="text-muted">Vansh Sanghvi</h4>
                  <p class="primary-color" style={{marginLeft: '-50px'}}>Backend Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" class="section-100">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <h1 data-aos="fade-up" data-aos-delay="100"><b>Frequently Asked Questions & Discussions</b></h1>
              <p data-aos="fade-up" data-aos-delay="200">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              <img src={faqimg} alt="faqimage" class="img-fluid" data-aos="fade-up" data-aos-delay="300" />
            </div>
            <div class="col-md-6">
              <div id="accordion" data-aos="fade-left" data-aos-delay="300">
                <div class="card">
                  <div class="card-header" id="headingOne" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <h5 class="mb-0">
                      DOnator
                      <i class="fa fa-angle-down pull-right"></i>
                    </h5>
                  </div>
                  <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                    <div class="card-body">
                    Donator donates certain catogory of donations like: clothes, toys, etcc..
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header collapsed" id="headingTwo" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <h5 class="mb-0">
                      Volunteer
                      <i class="fa fa-angle-down pull-right"></i>
                    </h5>
                  </div>
                  <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                    <div class="card-body">
                    Volunteer keep help us in the form of transporting the donations from the donator to the organization
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header collapsed" id="headingThree" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <h5 class="mb-0">
                        Organization
                      <i class="fa fa-angle-down pull-right"></i>
                    </h5>
                  </div>
                  <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                    <div class="card-body">
                      Organization people will register and request for certain category of donations. If that ctaegory acheives then we will send to them.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
