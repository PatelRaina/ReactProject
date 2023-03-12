import React from "react";
import Slider from 'react-slick'
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'
const Testimonials = () => {
    const settings = {
        dots:true,
        infinite:true,
        autoplay:true,
        speed: 1000,
        swipeToSlide:true,
        autoplaySpeed:2000,
        slidestoShow:3,

        responsive:[
            {
                breakpoint: 992,
                settings:{
                    slidesToShow:2,
                    SlidesToScroll:1,
                    infinite: true,
                    dots:true,
                },
            },
            {
                breakpoint: 576,
                settings:{
                    slidesToShow:1,
                    SlidesToScroll:1,
                   
                },
            }
        ]
    }
    return <Slider {...settings}>
        <div className="testimonial py-4 px-3">
            <p>Fantastic!!! this was our second holiday in 4 months that I booked with this website all went smoothly.
                Thank you!
            </p>
            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava01} className='w-25 h-25 rounded-2' alt=""/>
                <div>
                    <h6 className="mb-0 mt-3">Raina Patel</h6>
                    <p>Customer</p>
                </div>
            </div>
        </div>
        <div className="testimonial py-4 px-3">
            <p>A great service and what we were is exactly what we received.
            We will be holiday inn again shortly and my first stop will be this travel online website
            Thank You
            </p>
            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava02} className='w-25 h-25 rounded-2' alt=""/>
                <div>
                    <h6 className="mb-0 mt-3">Mansi Patel</h6>
                    <p>Customer</p>
                </div>
            </div>
        </div>
        <div className="testimonial py-4 px-3">
            <p>Excellent service including feedback on bookings. Will definitely recommend and continue using website services!
            Awesome booking guys. Everything was perfect. Will recommend you to anyone looking for a holiday
            </p>
            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava03} className='w-25 h-25 rounded-2' alt=""/>
                <div>
                    <h6 className="mb-0 mt-3">Guddan Katariya</h6>
                    <p>Customer</p>
                </div>
            </div>
        </div>
        <div className="testimonial py-4 px-3">
            <p>This is the first time I have EVER used a travel agent as I always book stuff myself, flights, hotel tours, cruises, I usually do it all myself. This experience has me thinking I will change to an agent for all my future holidays.
            Thanks for an awesome, relaxing holiday. I would not have found that hotel or transfers etc. without you, I'm very grateful!
            </p>
            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava03} className='w-25 h-25 rounded-2' alt=""/>
                <div>
                    <h6 className="mb-0 mt-3">Guddan Katariya</h6>
                    <p>Customer</p>
                </div>
            </div>
        </div>
        <div className="testimonial py-4 px-3">
            <p>Very happy, used this website a few times now and never had a problem. The extra things required were noted and carried through to the place going to. 
                Everything is clear to understand when booking and follow up correspondence. Very attentive to responding to your emails and questions and would have no hesitation in booking a holiday again through them.
            </p>
            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava03} className='w-25 h-25 rounded-2' alt=""/>
                <div>
                    <h6 className="mb-0 mt-3">Guddan Katariya</h6>
                    <p>Customer</p>
                </div>
            </div>
        </div>
        
    </Slider>
};
 
export default Testimonials;