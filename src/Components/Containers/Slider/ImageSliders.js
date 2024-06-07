import React from 'react'
import '../../CSSModules/Styles.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const ImageSliders = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    cssEase: "linear",
    arrow:false
    }
  return (
    <>
        <section className='slider-container'>
        <Slider {...settings}>
                        <div>
                            <img src={require("../../../Assets/slider-5.webp")} alt="Not Found"/>
                        </div>
                        <div>
                            <img src={require("../../../Assets/slider-2.jpeg")} alt="Not Found"/>
                        </div>
                        <div>
                            <img src={require("../../../Assets/slider-3.jpeg")} alt="Not Found"/>
                        </div>
                        <div>
                            <img src={require("../../../Assets/slider-4.jpeg")} alt="Not Found"/>
                        </div>
                        <div>
                            <img src={require("../../../Assets/slider-1.jpeg")} alt="Not Found"/>
                        </div>
                    </Slider>
        </section>
    </>
  )
}

export default ImageSliders