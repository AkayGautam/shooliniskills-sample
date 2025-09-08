import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import data from "../../util/blog.json"

export default function BlogDetails() {
    let Router = useRouter()
    const [blogPost, setBlogPost] = useState(null)
    const { id } = Router.query

    useEffect(() => {
        setBlogPost(data.find((data) => data.id == id))
    }, [id])

    return (
        <>
            {blogPost && (
                <Layout headerStyle={3} footerStyle={1} breadcrumbTitle={blogPost.title}>
                    <section className="blog-standard-area section-py-120">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8">
                                    <div className="blog__standard-post blog__details-wrapper">
                                        <div className="blog__standard-thumb">
                                            <img src={`/assets/img/blog/${blogPost.img}`} className="w-100" alt="img" />
                                        </div>
                                        <div className="blog__standard-content blog-details-content">
                                            <h3 className="title">{blogPost.title}</h3>
                                            <ul className="list-wrap blog__post-meta">
                                                <li><i className="flaticon-account" /> by <Link href="#">Admin</Link></li>
                                                <li><i className="flaticon-calendar-date" /> 23 Aug, 2023</li>
                                                <li><i className="flaticon-help" /> 22 Comments</li>
                                            </ul>
                                            <p dangerouslySetInnerHTML={{ __html: blogPost.discription }} />
                                          
                                            
                                    </div>
                                   
                                  
                                
                                </div>
                                   </div>
                                <div className="col-lg-4">
                                    <aside className="blog-sidebar">
                                        {/* <div className="blog-widget widget_search">
                                            <div className="sidebar-search-form">
                                                <form action="#">
                                                    <input type="text" placeholder="Search here" />
                                                    <button><i className="flaticon-magnifying-glass" /></button>
                                                </form>
                                            </div>
                                        </div> */}
                                        <div className="blog-widget">
                                            <h4 className="widget-title">Categories</h4>
                                            <div className="shop-cat-list">
                                                <ul className="list-wrap">
                                                    <li>
                                                        <div className="form-check">
                                                           
                                                            <label className="form-check-label" htmlFor="cat_1">{blogPost.title}</label>
                                                        </div>
                                                    </li> 
                                                    
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="blog-widget">
                                            <h4 className="widget-title">Recent Posts</h4>
                                            <div className="rc-post-item">
                                                <div className="rc-post-thumb">
                                                    <Link href="/blog-details">
                                                        <img src="/assets/img/blog/blog_standard01.jpg" alt="img" />
                                                    </Link>
                                                </div>
                                                <div className="rc-post-content">
                                                    <h4 className="title"><Link href="/blog-details">The Growing Need Management</Link></h4>
                                                    <span className="date"><i className="flaticon-calendar-date" /> 25 Dec, 2023</span>
                                                </div>
                                            </div>
                                            
                                        </div>
                                        {/* <div className="blog-widget">
                                            <h4 className="widget-title">Popular Tags</h4>
                                            <div className="tagcloud">
                                                <Link href="#">Art  Design</Link>
                                                <Link href="#">Courses</Link>
                                                <Link href="#">Education</Link>
                                                <Link href="#">App</Link>
                                                <Link href="#">Video</Link>
                                                <Link href="#">UX Course</Link>
                                                <Link href="#">Learning</Link>
                                                <Link href="#">Programming</Link>
                                            </div>
                                        </div> */}
                                    </aside>
                                </div>
                            </div>
                        </div>
                     
                    </section>

                </Layout>
            )}
        </>
    )
}