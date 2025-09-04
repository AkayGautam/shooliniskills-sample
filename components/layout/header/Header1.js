import Link from "next/link"
import MobileMenu from "../MobileMenu"

export default function Header1({ scroll, isMobileMenu, handleMobileMenu }) {
    return (
        <>
            <header>
                <div id="sticky-header" className={`tg-header__area transparent-header homepageHeader ${scroll ? "sticky-menu" : ""}`}>
                    <div className="container custom-container">
                        <div className="row">
                            <div className="col-12">
                                <div className="mobile-nav-toggler" onClick={handleMobileMenu}><i className="tg-flaticon-menu-1" /></div>
                                <div className="tgmenu__wrap">
                                    <nav className="tgmenu__nav">
                                        <div className="logo on-desktop">
                                            <Link href="/"><img src="/assets/img/logo/logo.png" alt="Logo" /></Link>
                                        </div>
                                        
                                        <div className="logo on-mobile">
                                            <Link href="/"><img src="/assets/img/logo/secondary_logo.png" alt="Logo" /></Link>
                                        </div>
                                        <div className="tgmenu__navbar-wrap tgmenu__main-menu d-none d-xl-flex">
                                            <ul className="navigation">
                                                <li className="active menu-item"><Link href="/">Home
                                                </Link>
                                                </li>
                                                <li className="menu-item-has-children"><Link href="#">Courses</Link>
                                                    <ul className="sub-menu">
                                                       
                                                        <li><Link href="/course/1"> Business </Link></li>
                                                        <li><Link href="/course/2"> Communication </Link></li>
                                                        <li><Link href="/course/3">Leadership </Link></li>
                                                        <li><Link href="/course/4">Personal Growth </Link></li>
                                                        <li><Link href="/course/3">Self-Growth </Link></li>
                                                         <li><Link href="/course/3">Finance </Link></li>
                                                      
                                                    </ul>
                                                </li>
                                                <li className="menu-item"><Link href="#">Resources </Link> 
                                                </li>
                                               
                                                <li className="menu-item"><Link href="#">Upskill Your Team </Link> 
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="tgmenu__search d-none d-md-block">
                                            <form action="#" className="tgmenu__search-form">
                                                <div className="select-grp">
                                                    <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M12 12H6.85714V6.85714H12V12ZM5.14286 12H0V6.85714H5.14286V12ZM12 5.14286H6.85714V0H12V5.14286ZM5.14286 5.14286H0V0H5.14286V5.14286Z" fill="currentcolor" />
                                                    </svg>
                                                    <select className="form-select" id="course-cat" aria-label="Default select example" style={{ width: 150 }}> 
                                                        <option value={1}>Business</option>
                                                        <option value={2}>Communication </option>
                                                        <option value={3}>Leadership </option>
                                                        <option value={4}>Self-Growth</option>
                                                        <option value={5}>Technology </option>
                                                        <option value={6}> Finance </option>
                                                    </select>
                                                </div>
                                                <div className="input-grp">
                                                    <input type="text" placeholder="Find a Program . . ." />
                                                    <button type="submit"><i className="flaticon-searching" /></button>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="tgmenu__action">
                                            <ul className="list-wrap">
                                                <li className="mini-cart-icon">
                                                    <Link href="/shop" className="cart-count">
                                                        <img src="/assets/img/icons/cart.svg" alt="cart" />
                                                        <span className="mini-cart-count">0</span>
                                                    </Link>
                                                </li> 
                                                <li className="header-btn free-btn"><Link href="/contact" className="btn">Contact Us 
                                                    </Link></li>
                                            </ul>
                                        </div>
                                    </nav>
                                </div>
                                {/* Mobile Menu  */}
                                <div className="tgmobile__menu">
                                    <nav className="tgmobile__menu-box">
                                        <div className="close-btn" onClick={handleMobileMenu}><i className="tg-flaticon-close-1" /></div>
                                        <div className="nav-logo">
                                            <Link href="/"><img src="/assets/img/logo/logo.png" alt="Logo" /></Link>
                                        </div>
                                        <div className="tgmobile__search">
                                            <form action="#">
                                                <input type="text" placeholder="Search here..." />
                                                <button><i className="fas fa-search" /></button>
                                            </form>
                                        </div>
                                        <div className="tgmobile__menu-outer">
                                            <MobileMenu />
                                        </div>
                                        <div className="tgmenu__action">
                                            <ul className="list-wrap">
                                                <li className="header-btn login-btn"><Link href="#" className="btn">Log in</Link></li>
                                                <li className="header-btn"><Link href="#" className="btn">Try For Free</Link></li>
                                            </ul>
                                        </div>
                                        <div className="social-links">
                                            <ul className="list-wrap">
                                                <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                                <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                                                <li><Link href="#"><i className="fab fa-instagram" /></Link></li>
                                                <li><Link href="#"><i className="fab fa-linkedin-in" /></Link></li>
                                                <li><Link href="#"><i className="fab fa-youtube" /></Link></li>
                                            </ul>
                                        </div>
                                    </nav>
                                </div>
                                <div className="tgmobile__menu-backdrop" onClick={handleMobileMenu} />
                                {/* End Mobile Menu */}
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
