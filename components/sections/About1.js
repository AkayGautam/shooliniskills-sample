import Link from "next/link"
import Slider from "react-slick"


export default function About1() {

   
const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <button
      {...props}
      className={
        "slick-prev slick-arrow slick-prev" +
        (currentSlide === 0 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
      type="button"
    >
      <i className="fas fa-arrow-left"></i>
    </button>
  );
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <button
      {...props}
      className={
        "slick-next slick-arrow" +
        (currentSlide === slideCount - 1 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
      type="button"
    >
      <i className="fas fa-arrow-right"></i>
    </button>
  );
 
const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    autoplay: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
            }
        } ,
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                centerMode: false,
                centerPadding: '0',
            }
        },
    ]
}

    return (
        <>
            <section className="about-area tg-motion-effects section-py-120">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-xl-5 col-lg-8">
                            <Slider {...settings} className="row courses-slider-active">
                               <div className="about__images">
                               <div className="row">
                                    <div className="col-12">
                                        <div className="about__images-item mb-30">
                                            <img  className="img-new w-100"  src="/assets/img/nishtha.jpg" alt="img" />
                                        </div>
                                    </div>
                                 </div>  
                                 </div>

                                    <div className="about__images">
                               <div className="row">
                                    <div className="col-12">
                                        <div className="about__images-item mb-30">
                                            <img  className="img-new w-100"  src="/assets/img/janvi.jpg" alt="img" />
                                        </div>
                                    </div>
                                 </div>  
                                 </div>

                                    <div className="about__images">
                               <div className="row">
                                    <div className="col-12">
                                        <div className="about__images-item mb-30">
                                            <img  className="img-new w-100"  src="/assets/img/amar.jpg" alt="img" />
                                        </div>
                                    </div>
                                 </div>  
                                 </div>

 
                            
                            </Slider>
                        </div>
                        <div className="col-xl-7 col-lg-7">
                            <div className="about__content">
                                <div className="section__title">
                                    <span className="sub-title">Get To Know Your Mentors</span>
                                    <h2 className="title tg-svg"> Learn Directly from Top Industry Talent</h2>
                                </div>
                                <p className="desc">The curriculum is made by industry experts for new generation learners who want to grow and lead in their organisation. Therefore, our instructors come from live working environments where they are abreast with the latest developments in business, leadership, technology and more.  </p>
                                <ul className="about__info-list list-wrap">
                                    <li className="about__info-list-item">
                                        <div className="icon"><i className="flaticon-support" /></div>
                                        <p className="content">2000+ <br /> Expert Tutors</p>
                                    </li>
                                    <li className="about__info-list-item">
                                        <div className="icon"><i className="flaticon-file" /></div>
                                        <p className="content">1500+ <br /> Top Lessons</p>
                                    </li>
                                    <li className="about__info-list-item">
                                        <div className="icon"><i className="flaticon-graduation-cap" /></div>
                                        <p className="content">18000+ <br /> Over Students</p>
                                    </li>
                                    <li className="about__info-list-item">
                                        <div className="icon"><i className="flaticon-video-player" /></div>
                                        <p className="content">3200+ <br /> Pro Videos</p>
                                    </li>
                                </ul>
                                <div className="tg-button-wrap">
                                    <Link href="/about-us" className="btn tg-svg"><span className="text">Discover More</span> <span className="svg-icon" id="about-btn" data-svg-icon="assets/img/icons/btn-arrow.svg" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
