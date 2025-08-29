import Link from "next/link"

export default function Banner1() {
    return (
        <>
            <section className="banner-area banner-bg" data-background="/assets/img/banner/banner_bg.jpg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="banner__content">
                          
                                <span className="sub-title">100% Satisfaction
                                    Guarantee</span>
                                <h3 className="title tg-svg">Make Acquiring  <span className="position-relative"><span className="svg-icon" id="svg-2" data-svg-icon="assets/img/icons/title_shape.svg" />Skills</span>Online Worthwhile</h3>
                                <p data-aos-delay={600}>Career progression in 12–16 weeks with capstone and industry feedback.
                                    Get certified by <strong> India’s No. 1 Private University - Shoolini University.</strong>
                                </p>
                                <div className="banner__btn-wrap">
                                    <div className="tg-button-wrap">
                                        <Link href="/courses" className="btn tg-svg"><span className="text">Explore Courses</span>
                                            <span className="svg-icon" id="svg-1" data-svg-icon="assets/img/icons/btn-arrow.svg" /></Link>
                                    </div>
                                    <div className="banner__phone">
                                        <i className="flaticon-phone-call" />
                                        <div className="number-info">
                                            <span>Have any Question?</span>
                                            <h6 className="number"><Link href="tel:993-00-67777">993-00-67777</Link></h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="banner__images">
                                <img src="/assets/img/banner/banner_img1.png" alt="img" className="main-img" />
                                                              
                                {/* <div className="banner__fact">
                                    <div className="banner__fact-item">
                                        <div className="icon">
                                            <i className="flaticon-group" />
                                        </div>
                                        <div className="info">
                                            <span>Total Students</span>
                                            <h4 className="count">15K</h4>
                                        </div>
                                    </div>
                                    <div className="banner__fact-item">
                                        <div className="icon">
                                            <i className="flaticon-graduation-cap" />
                                        </div>
                                        <div className="info">
                                            <span>Complete Graduation</span>
                                            <h4 className="count">34K</h4>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
