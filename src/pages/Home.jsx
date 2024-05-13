import React from 'react'
import '../style/Home.css'
import { Container, Row, Col } from 'reactstrap'

import worldImg from '../file/image/world.png'
import heroImg from '../file/image/Travel01.jpg' 
import heroImg02 from '../file/image/Travel02.jpg'
import experienceImg from '../file/image/experience01.jpg'
//import heroVideo from '../file/image/hero-video.mp4'

import Subtitle from './../shared/subtitle'
import SearchBar from './../shared/SearchBar'
import ServiceList from '../services/ServiceList'
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList'
import MasonryImagesGallery from '../Image-gallery/MasonryImagesGallery'
import Testimonials from '../components/Testimonial/Testimonials'
import NewsLetter from '../shared/Newsletter' 



const Home = () => {
  return <>
  <section>
    <section className='first'>
      <Container>
        <Row>
            <Col lg='6'>
              <div className='hero_content'>
                <div className="hero_subtitle d-flex align-items-center">
                  <Subtitle subtitle={'Search Before You Buy'} />
                  <img src={worldImg} alt="" />
                </div>
                  <h1>E Commerce Buy without any <span> Hesitation</span></h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Ullam ipsum nobis asperiores soluta voluptas quas voluptates.
                  Molestiae tempora dignissimos, animi praesentium molestias perferendis porro expedita delectus. Soluta natus porro.
                </p>
                </div>
            </Col>

            <Col lg='2'>
                  <div className="hero_img-box">
                     <img src={heroImg} alt="" /><br></br>
                  </div>
            </Col>
           
            <Col lg='2'>
                  <div className="hero_img-box mt-1">
                     <img src={heroImg02} alt="" />
                  </div>
            </Col>
               
        </Row>
      </Container>
    </section>

 

    <section className='third'>
          <Container>
            <Row>
               <Col lg='12' className='explore mb-2'>
                  <Subtitle subtitle={'Explore'} />
                  <h2 className='featured_tour-title'>Our featured products</h2>
               </Col>

               <Col className='featuredTourList'>
                  <FeaturedTourList />
               </Col>
               
            </Row>
          </Container>
    </section>
  

    <section className='fourth'>
         <Container>
            <Row>
               <Col lg='6'>
                  <div className="experience_content">
                     <Subtitle subtitle={'Experience'} />
                     <h2>With our all experience <br /> we will serve you</h2>
                     <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        <br /> Quas aliquam, hic tempora inventore suscipit unde. </p>
                  </div>

                  <div className="counter_wrapper d-flex align-items-center gap-5">
                     <div className="counter_box">
                        <span>12k+</span>
                        <h6>Product Delivered</h6>
                     </div>
                     <div className="counter_box">
                        <span>2k+</span>
                        <h6>Regular customers</h6>
                     </div>
                     <div className="counter_box">
                        <span>15</span>
                        <h6>Year experience</h6>
                     </div>
                  </div>
               </Col>
               <Col lg='6'>
                  <div className="experience01_img">
                     <img src={experienceImg} alt=""/>
                  </div>
               </Col>
            </Row>
         </Container>
    </section>

    <section className='fifth'>
         <Container>
            <Row>
               <Col lg='12'>
                  <Subtitle subtitle={'Gallery'} />
                  <h2 className="gallery_title">Visit our customers product gallery</h2>
               </Col>

               <Col lg='12'>
               <MasonryImagesGallery/>
               </Col>
            </Row>
         </Container>
    </section>


    <section className='sixth'>
         <Container>
            <Row>
               <Col lg='12'>
                  <Subtitle subtitle={'Customer Love'} />
                  <h2 className="testimonial_title">What our International Customer say about us</h2>
               </Col>
               <Col className='Testimonials' lg='12'>
                  <Testimonials />                 
               </Col>
            </Row>
         </Container>
    </section>

    <section className='seven'>
    <NewsLetter />
    </section>  
    

  </section>
  </>
}

export default Home