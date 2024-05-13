import React from 'react'
import '../style/About.css'
import { Container, Row, Col } from 'reactstrap'

import Subtitle from './../shared/subtitle'

import traveler1 from '../file/image/Traveler01.jpg'
import traveler2 from '../file/image/Traveler02.jpg'
import traveler3 from '../file/image/Traveler03.png'

const About = () => {
  return (
    <section className='About_first'>
    <Container className='p-0'>
    <div className='row'>
        <div className='col-3'>
          <div className='About_notice text-center'>
            <h3>Notice</h3>
            <hr className='divi m-0'/>
          </div>
        </div>
        <div className='col-9'>
          <h2 className="Tour_guide">Our Best Ecommerce Website</h2>
          <Container className='Traveler'>
            <Row>
              <Col lg='6'>
                <div className="experience_content">
                  <h2>Flat 50% OFF</h2>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  <br /> Quas aliquam, hic tempora inventore suscipit unde. </p>
                </div>
                  

                <div className="counter_wrapper d-flex align-items-center gap-5">
                  <div className="counter_box">
                    <span>300+</span>
                    <h6>orders</h6>
                  </div>
                  <div className="counter_box">
                    <span>100+</span>
                    <h6>New customers</h6>
                  </div>
                 
                </div>
              </Col>
              <Col lg='6'>
                <div className="experience_img">
                  <img src={traveler1} alt="" />
                </div>
               </Col>
            </Row>
         </Container>
         <Container className='Traveler'>
            <Row>
              <Col lg='6'>
                <div className="experience_img">
                  <img src={traveler2} alt="" />
                </div>
              </Col>
              <Col lg='6'>
                <div className="experience_content">
                  <h2>New Fashion Design</h2>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  <br /> Quas aliquam, hic tempora inventore suscipit unde. </p>
                </div>
                  

                <div className="counter_wrapper d-flex align-items-center gap-5">
                  <div className="counter_box">
                    <span>100+</span>
                    <h6>Orders</h6>
                  </div>
                  <div className="counter_box">
                    <span>200+</span>
                    <h6>New Demands</h6>
                  </div>
                  <div className="counter_box">
                   
                  </div>
                </div>
              </Col>
            </Row>
         </Container>
         <Container className='Traveler'>
            <Row>
              <Col lg='6'>
                <div className="experience_content">
                  <h2>Big Billion Days</h2>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  <br /> Quas aliquam, hic tempora inventore suscipit unde. </p>
                </div>
                  

                <div className="counter_wrapper d-flex align-items-center gap-5">
                  <div className="counter_box">
                    <span>200+</span>
                    <h6>Successful Orders</h6>
                  </div>
                  <div className="counter_box">
                    <span>100+</span>
                    <h6>Regular clients</h6>
                  </div>
                  <div className="counter_box">
                  
                  </div>
                </div>
              </Col>
              <Col lg='6'>
                <div className="experience_img">
                  <img src={traveler3} alt="" />
                </div>
               </Col>
            </Row>
         </Container>
        </div>
      </div>
    </Container>
    </section>
  )
}

export default About