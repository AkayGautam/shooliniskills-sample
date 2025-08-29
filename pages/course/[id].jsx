import VideoPopup from "@/components/elements/VidepPopup"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import courses from "../../data/courses.json"

const CourseSingle = () => {
    const router = useRouter()
    const [course, setCourse] = useState({})
    const id = router.query.id

    useEffect(() => {
        if (!id) <h1>Loading...</h1>
        else setCourse(courses.find((item) => item.id == id))
        return () => { }
    }, [id])

    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    })

    // Default open module
    const firstKey = course?.curriculum?.[0]?.module ?? null;
    const [activeKey, setActiveKey] = useState(firstKey);

    const handleToggle = (key) => {
        setActiveKey((prev) => (prev === key ? null : key));
    };

    if (!course) return <p>No course found.</p>;



    return (
        <>
            <Layout headerStyle={3} footerStyle={1}>
                <section className="courses__breadcrumb-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="courses__breadcrumb-content">
                                    <Link href="#" className="category">{course.category}</Link>
                                    <h3 className="title">{course.courseTitle}</h3>
                                    <p>{course.description}</p>
                                    <ul className="courses__item-meta list-wrap">
                                        <li>
                                            <div className="author">
                                                <Link href="#"><img src="/assets/img/courses/course_author02.png" alt="img" /></Link>
                                                <Link href="#">{course.instructor}</Link>
                                            </div>
                                        </li>
                                        <li><i className="flaticon-timer" /> Duration:{course.duration}</li>

                                        <li>
                                            <div className="rating">
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <span className="rating-count">(4.8)</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="courses-details-area section-pb-120">
                    <div className="container">

                        <div className="row">
                            <div className="col-xl-8 col-lg-8" >
                                <div className="courses__details-wrapper">
                                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                                        <li className="nav-item" onClick={() => handleOnClick(1)}>
                                            <button className={activeIndex === 1 ? "nav-link active" : "nav-link"}>Course Information</button>
                                        </li>
                                        <li className="nav-item" onClick={() => handleOnClick(2)}>
                                            <button className={activeIndex === 2 ? "nav-link active" : "nav-link"}>Reviews</button>
                                        </li>
                                    </ul>
                                    <div className="tab-content" id="myTabContent">
                                        <div className={activeIndex === 1 ? "tab-pane active" : "tab-pane"}>
                                            <div className="courses__details-content">
                                                <p> {course?.description} </p>


                                            </div>
                                            <div className="courses__details-curriculum">
                                                <h4 className="title">Curriculum</h4>
                                                <div className="accordion" id="accordionExample">



                                                    <div className="accordion" id="course-curriculum">
                                                        {(course?.curriculum ?? []).length === 0 && (
                                                            <p className="text-muted">No curriculum available.</p>
                                                        )}

                                                        {(course?.curriculum ?? []).map((mod, idx) => {
                                                            const key = mod?.module ?? idx + 1;
                                                            const isOpen = activeKey === key;
                                                            const panelId = `panel-${key}`;
                                                            const headerId = `heading-${key}`;

                                                            return (
                                                                <div className="accordion-item" key={key}>
                                                                    <h2
                                                                        id={headerId}
                                                                        className="accordion-header"
                                                                        onClick={() => handleToggle(key)}
                                                                    >
                                                                        <button
                                                                            className={isOpen ? "accordion-button" : "accordion-button"}
                                                                            aria-expanded={isOpen}
                                                                            aria-controls={panelId}
                                                                            type="button"
                                                                        >
                                                                            {mod?.topic || `Module ${key}`}
                                                                        </button>
                                                                    </h2>

                                                                    <div
                                                                        id={panelId}
                                                                        role="region"
                                                                        aria-labelledby={headerId}
                                                                        className={isOpen ? "accordion-collapse collapse show" : "accordion-collapse collapse"}
                                                                    >
                                                                        <div className="accordion-body">
                                                                            <ul className="list-wrap">
                                                                                {(mod?.lessons ?? []).map((lesson, lidx) => (
                                                                                    <li className="course-item" key={`${key}-${lidx}`}>
                                                                                        <Link href="#" className="course-item-link">
                                                                                            <span className="item-name">{lesson}</span>
                                                                                            <div className="course-item-meta">
                                                                                                {/* Add duration if present in JSON */}
                                                                                                <span className="item-meta duration"></span>
                                                                                                <span className="item-meta course-item-status">
                                                                                                    <img src="/assets/img/icons/lock.svg" alt="icon" />
                                                                                                </span>
                                                                                            </div>
                                                                                        </Link>
                                                                                    </li>
                                                                                ))}
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            );
                                                        })}
                                                    </div>

                                                </div>
                                            </div>
                                            <div className="courses__details-instructors">
                                                <h4 className="title">Your Instructors</h4>
                                                <div className="courses__instructors-list">

                                                    <div className="courses__instructors-item">
                                                        <div className="courses__instructors-thumb">
                                                            <Link href="/instructor-details"><img src="/assets/img/courses/dummy-image.jpg" alt="img" /></Link>
                                                        </div>
                                                        <div className="courses__instructors-content">
                                                            <h5 className="name"><Link href="/instructor-details">{course.instructor}</Link></h5>
                                                            {/* <span className="designation">Web Developer</span> */}
                                                            <ul className="meta list-wrap d-flex flex-wrap">
                                                                <li><i className="flaticon-user-1" /> 1,435 Students</li>
                                                                <li><i className="flaticon-file" /> 05</li>
                                                                <li>
                                                                    <div className="rating">
                                                                        <i className="fas fa-star" />
                                                                        <i className="fas fa-star" />
                                                                        <i className="fas fa-star" />
                                                                        <i className="fas fa-star" />
                                                                        <i className="fas fa-star" />
                                                                        <span className="average">(4.2)</span>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                            <p>Donald Logan has more than 15 years’ experience as a project management consultant, educator, technology consultant, business know.</p>
                                                            <div className="tg-button-wrap">
                                                                {/* <Link href="/instructor-details" className="btn btn-border tg-svg"><span className="text">See More</span> <span className="svg-icon" id="svg-btn2" data-svg-icon="assets/img/icons/btn-arrow.svg" /></Link> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={activeIndex === 2 ? "tab-pane active" : "tab-pane"}>
                                            <div className="courses__details-reviews">
                                                <h4 className="title">Student Ratings  Reviews</h4>
                                                <div className="course-rate">
                                                    <div className="course-rate__summary">
                                                        <div className="course-rate__summary-value">4.8</div>
                                                        <div className="course-rate__summary-stars">
                                                            <i className="fas fa-star" />
                                                            <i className="fas fa-star" />
                                                            <i className="fas fa-star" />
                                                            <i className="fas fa-star" />
                                                            <i className="fas fa-star" />
                                                        </div>
                                                        <div className="course-rate__summary-text">
                                                            Total 2 Rating
                                                        </div>
                                                    </div>
                                                    <div className="course-rate__details">
                                                        <div className="course-rate__details-row">
                                                            <div className="course-rate__details-row-star">
                                                                5
                                                                <i className="fas fa-star" />
                                                            </div>
                                                            <div className="course-rate__details-row-value">
                                                                <div className="rating-gray" />
                                                                <div className="rating" style={{ width: '80%' }} title="80%" />
                                                                <span className="rating-count">2</span>
                                                            </div>
                                                        </div>
                                                        <div className="course-rate__details-row">
                                                            <div className="course-rate__details-row-star">
                                                                4
                                                                <i className="fas fa-star" />
                                                            </div>
                                                            <div className="course-rate__details-row-value">
                                                                <div className="rating-gray" />
                                                                <div className="rating" style={{ width: '50%' }} title="50%" />
                                                                <span className="rating-count">1</span>
                                                            </div>
                                                        </div>
                                                        <div className="course-rate__details-row">
                                                            <div className="course-rate__details-row-star">
                                                                3
                                                                <i className="fas fa-star" />
                                                            </div>
                                                            <div className="course-rate__details-row-value">
                                                                <div className="rating-gray" />
                                                                <div className="rating" style={{ width: '0%' }} title="0%" />
                                                                <span className="rating-count">0</span>
                                                            </div>
                                                        </div>
                                                        <div className="course-rate__details-row">
                                                            <div className="course-rate__details-row-star">
                                                                2
                                                                <i className="fas fa-star" />
                                                            </div>
                                                            <div className="course-rate__details-row-value">
                                                                <div className="rating-gray" />
                                                                <div className="rating" style={{ width: '0%' }} title="0%" />
                                                                <span className="rating-count">0</span>
                                                            </div>
                                                        </div>
                                                        <div className="course-rate__details-row">
                                                            <div className="course-rate__details-row-star">
                                                                1
                                                                <i className="fas fa-star" />
                                                            </div>
                                                            <div className="course-rate__details-row-value">
                                                                <div className="rating-gray" />
                                                                <div className="rating" style={{ width: '0%' }} title="0%" />
                                                                <span className="rating-count">0</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div id="course-reviews">
                                                    <h4 className="course-review-head">Reviews (01)</h4>
                                                    <ul className="list-wrap">
                                                        <li>
                                                            <div className="review-author">
                                                                <img src="/assets/img/blog/comment01.png" alt="img" />
                                                            </div>
                                                            <div className="review-author-info">
                                                                <div className="review-stars-rated">
                                                                    <i className="fas fa-star" />
                                                                    <i className="fas fa-star" />
                                                                    <i className="fas fa-star" />
                                                                    <i className="fas fa-star" />
                                                                    <i className="fas fa-star" />
                                                                </div>
                                                                <h5 className="user-name">Admin <span className="date">August 5, 2023</span></h5>
                                                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantiu meature areawtyt totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.</p>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="course-review-form">
                                                    <h4 className="course-review-head">Write a review</h4>
                                                    <form action="#">
                                                        <div className="row">
                                                            <div className="col-sm-6">
                                                                <input type="text" placeholder="Your Name" />
                                                            </div>
                                                            <div className="col-sm-6">
                                                                <input type="email" placeholder="Your Email" />
                                                            </div>
                                                        </div>
                                                        <input type="text" placeholder="Review Title" />
                                                        <div className="course-form-rating">
                                                            <span>Select Rating:</span>
                                                            <i className="fas fa-star" />
                                                            <i className="fas fa-star" />
                                                            <i className="fas fa-star" />
                                                            <i className="fas fa-star" />
                                                            <i className="fas fa-star" />
                                                        </div>
                                                        <textarea placeholder="Type Comments" />
                                                        <button className="btn">Submit your Review</button>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4">
                                <aside className="courses__details-sidebar">
                                    <div className="sidebar">
                                        <div className="event-widget">
                                            <div className="thumb">
                                                <img src={`/assets/img/courses/${course.logo ? course.logo : "course_thumb02.jpg"}`} alt="img" />
                                                <VideoPopup />
                                            </div>
                                            <div className="event-cost-wrap">
                                                <h4 className="price"><strong>Costs:</strong>₹{course.fee} <span> </span></h4>
                                          <Link
  className="btn"
  href={{
    pathname: "/enroll",
    query: {
      // Use optional chaining to safely access courseTitle,
      // then use replace if it exists.
      title: course?.courseTitle?.toLowerCase().replace(/ /g, "-") || "" 
    },
  }}
>
  Express Early Interest
</Link>
                                                <div className="event-information-wrap">
                                                    <h6 className="title">Include This Course</h6>
                                                    <ul className="list-wrap">
                                                        <li><i className="flaticon-timer" />Duration <span>{course.duration}</span></li>
                                                        <li><i className="flaticon-user-1" />Joined <span>190</span></li>
                                                        <li><i className="flaticon-bars" />Laguage <span>English</span></li>
                                                        <li><i className="flaticon-flash" />Category <span>{course.category}</span></li>
                                                        {/* <li><i className="flaticon-share" />Share
                                                        <ul className="list-wrap event-social">
                                                            <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                                            <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                                                            <li><Link href="#"><i className="fab fa-instagram" /></Link></li>
                                                            <li><Link href="#"><i className="fab fa-youtube" /></Link></li>
                                                        </ul>
                                                    </li> */}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <div className="blog-widget">
                                        <h4 className="widget-title">Related Courses</h4>
                                        <div className="rc-post-item">
                                            <div className="rc-post-thumb">
                                                <Link href="/course-details">
                                                    <img src="/assets/img/blog/blog_standard01.jpg" alt="img" />
                                                </Link>
                                            </div>
                                            <div className="rc-post-content">
                                                <h4 className="title"><Link href="/course-details">Nastering Data ndamentals</Link></h4>
                                                <span className="price">$22.00</span>
                                            </div>
                                        </div>
                                        <div className="rc-post-item">
                                            <div className="rc-post-thumb">
                                                <Link href="/course-details">
                                                    <img src="/assets/img/blog/blog_standard04.jpg" alt="img" />
                                                </Link>
                                            </div>
                                            <div className="rc-post-content">
                                                <h4 className="title"><Link href="/course-details">Make Edition Magnificent</Link></h4>
                                                <span className="price"><del>$29.00</del> $18.00</span>
                                            </div>
                                        </div>
                                        <div className="rc-post-item">
                                            <div className="rc-post-thumb">
                                                <Link href="/course-details">
                                                    <img src="/assets/img/blog/blog_standard03.jpg" alt="img" />
                                                </Link>
                                            </div>
                                            <div className="rc-post-content">
                                                <h4 className="title"><Link href="/course-details">The Potentially Accessibility</Link></h4>
                                                <span className="price">$11.00</span>
                                            </div>
                                        </div>
                                        <div className="rc-post-item">
                                            <div className="rc-post-thumb">
                                                <Link href="/course-details">
                                                    <img src="/assets/img/blog/blog_standard02.jpg" alt="img" />
                                                </Link>
                                            </div>
                                            <div className="rc-post-content">
                                                <h4 className="title"><Link href="/course-details">Create quick is wire frames</Link></h4>
                                                <span className="price">$11.00</span>
                                            </div>
                                        </div>
                                    </div> */}
                                    </div>
                                </aside>
                            </div>
                        </div>
                    </div>
                </section>

            </Layout>
        </>
    )
}

export default CourseSingle
