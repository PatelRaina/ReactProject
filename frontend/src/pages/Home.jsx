import React from "react";
import { Container,Row,Col } from "reactstrap";
import '../styles/home.css';
import heroImg from '../assets/images/hero-img01.jpg';
import heroImg02 from '../assets/images/hero-img02.jpg';
import heroImg03 from '../assets/images/hero-img03.jpg';
import experienceImg from '../assets/images/experience.png'
import worldImg from '../assets/images/world.png';
import Subtitle from "../shared/Subtitle";
import FeaturedTourList from "../components/Featured-tours/FeaturedTourList";
import MasonryImagesGallery from "../components/Image-gallery/MasonryImagesGallery";
import Testimonials from "../components/Testimonial/Testimonials";
import SearchBar from "../shared/SearchBar";
import ServiceList from "../services/ServiceList";
import Newsletter from "../shared/Newsletter";

const Home = () => {
    return ( 
        <>
        <section className="home">
        <Container>
            <Row>
            <Col >
                    <div className="hero__img-box">
                        <img src={heroImg} alt="" />
                    </div>
                </Col>
                <Col>
                <div className="hero__img-box hero__video-box">
                    <img src={heroImg03} alt=""/>
                </div>
            </Col>
            <Col>
            <div className="hero__img-box" >
                <img src={heroImg02} alt="" />
            </div>
        </Col>
           </Row><Row> 
                <Col>
                    <div className="hero__content">
                        
                        <h1>Life is either a daring <span className="highlight">adventure</span> or nothing at all 
                        </h1>
                        <p>“The world is a book and those who do not travel read only one page.”<br/>
                        “Travel is the only thing you buy that makes you richer.” <br/>
                        “Traveling – it leaves you speechless, then turns you into a storyteller.”</p>
                    </div>
                </Col>
                
        {/* <SearchBar/> */}
        </Row>
        </Container>
       </section>

       <section>
        <Container>
            <Row>
                <Col lg='3'>
                    <h5 className="services__subtitle">What we serve</h5>
                    <h2 className="services__title">We provide our top services.</h2>
                </Col>
                <ServiceList />
            </Row>
        </Container>
    </section>
    {/*================= featured tour section start =================== */}
    {/* <section>
        <Container>
            <Row>
                <Col lg='12' className="mb-5">
                    <Subtitle  subtitle={'Explore'}/>
                    <h2 className="featured__tour-title">Our Featured Tours</h2>
                </Col>
                <FeaturedTourList/>
            </Row>
        </Container>
    </section> */}
    {/*================= featured tour section end =================== */}
    {/*================= experience section start =================== */}
    {/* <section>
        <Container>
            <Row>
                <Col lg='6'>
                <div className="experience__content">
                    <Subtitle subtitle={'Experience'}/>
                    <h2>With our all experience<br/>we will serve you</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        <br/>
                        Quas aliqum, hic tempora inventore suscipit unde.
                    </p>
                </div>
                <div className="counter__wrapper d-flex align-items-center gap-5">
                    <div className="counter__box">
                        <span>12k+</span>
                        <h6>Succeassfull Trip</h6>
                    </div>
                    <div className="counter__box">
                        <span>2k+</span>
                        <h6>Regular Clients</h6>
                    </div>
                    <div className="counter__box">
                        <span>15k+</span>
                        <h6>Years Experience</h6>
                    </div>
                </div>
                </Col>
                <Col lg='6'>
                    <div className="experience__img">
                        <img src={experienceImg} alt=""/>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
     */}
    
    {/*================= experience section end =================== */}
    {/*================= gallery section start =================== */}
    <section className="gallery">
        <Container>
            <Row>
                <Col lg='12'>
                    
                    <h2 className="gallery__title">
                        Visit Our Customers tour Gallery
                    </h2>
                </Col>
                <Col lg='12'>
                    <MasonryImagesGallery/>
                </Col>
            </Row>
        </Container>
    </section>
    {/*================= gallery section end =================== */}
{/*================= testimonial section start =================== */}
{/* <section>
        <Container>
            <Row>
                <Col lg='12'>
                    <Subtitle subtitle={'Fans Love'}/>
                    <h2 className="testimonial__title">
                        Customer's review
                    </h2>
                </Col>
                <Col lg='12'>
                    <Testimonials/>
                </Col>
            </Row>
        </Container>
    </section> */}
    
  {/*================= testimonial section end =================== */}
    
    {/* <Newsletter /> */}
    

    

    </>
    );
};
 
export default Home;