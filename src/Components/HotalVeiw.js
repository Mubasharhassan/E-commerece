import React from 'react'

const HotalVeiw = () => {
    return (
        <>
            <div className="container container1-section all-div-margn">
                <header className="header">
                    <img src="/icons8-alertus-50.png" alt="trilo logo" className="logo" />
                    <form action="#" className="search">
                        <input type="text" className="search__input" placeholder="Search Hotel" />
                        <button className="search__button">
                            {/* <i xlink:href="CSS/img/magnifying-glass-svgrepo-com.svg"></i> */}
                        </button>
                    </form>
                    <nav className="user-nav">
                        <div className="user-nav__icon-box">
                            <svg className="user-nav__icon">
                                <img src="/icons8-bookmark-25.png" />
                            </svg>
                            <span className="user-nav__notification">7</span>
                        </div>
                        <div className="user-nav__icon-box">
                            <svg className="user-nav__icon">
                                <img src="/icons8-chat-25.png" />
                            </svg>
                            <span className="user-nav__notification">13</span>
                        </div>
                        <div className="user-nav__user">
                            <img src="/Screenshot_20220422-210407_Gallery.jpg" alt="" className="user-nav__user-photo" />
                            <span className="user-nav__user-name">Mubi</span>
                        </div>
                    </nav>
                </header>
                <div className="content">
                    <nav className="sidebar">
                        <ul className="side-nav">
                            <li className="side-nav__item side-nav__item--active">
                                <a href="#" className="side-nav__link">

                                    <img src="/icons8-home-30.png" className="imgs" />
                                    <span>Hotal</span>
                                </a>

                            </li>
                            <li className="side-nav__item">
                                <a href="#" className="side-nav__link">

                                    <img src="/icons8-plane-24.png" />
                                    <span>Flight</span>
                                </a>

                            </li>
                            <li className="side-nav__item">
                                <a href="#" className="side-nav__link">

                                    <img src="/icons8-key-30.png" />
                                    <span>Rent</span>
                                </a>

                            </li>
                            <li className="side-nav__item">
                                <a href="#" className="side-nav__link">

                                    <img src="/icons8-map-24.png" />
                                    <span>Tours</span>
                                </a>

                            </li>
                        </ul>
                        <div className="legal">
                            &copy; 2017 by trilo. All right resedved.
                        </div>
                    </nav>
                    <main className="hotel-view">
                        <div className="gallery">
                            <figure className="gallery__item">
                                <img src="/hotal4.jpg" alt="Photo of hotel 1"
                                    className="gallery__photo gallery__photo--active" />
                            </figure>
                            <figure className="gallery__item">
                                <img src="/hotal5.jpg" alt="Photo of hotel 2"
                                    className="gallery__photo gallery__photo--active" />
                            </figure>
                            <figure className="gallery__item">
                                <img src="/hotal6.jpg" alt="Photo of hotel 3"
                                    className="gallery__photo gallery__photo--active" />
                            </figure>
                            <figure className="gallery__item">
                                <img src="/hotal4.jpg" alt="Photo of hotel 1"
                                    className="gallery__photo gallery__photo--active" />
                            </figure>
                        </div>
                        <div className="overview">
                            <h1 className="overview__heading">Hotel Las Plamas</h1>
                            <div className="overview__stars">
                                <img src="/icons8-star-16.png" />

                                <img src="/icons8-star-16.png" />

                                <img src="/icons8-star-16.png" />

                                <img src="/icons8-star-16.png" />

                                <img src="/icons8-star-16.png" />


                            </div>
                            <div className="overview__location">
                                <img src="/icons8-location-24.png" />

                                <button className="btn__inline">Albufeira, Portugal</button>
                            </div>
                            <div className="overview__rating">
                                <div className="overview__rating-average">8.6</div>
                                <div className="overview__rating-count">429 votes</div>
                            </div>
                        </div>
                        <div className="detail">
                            <div className="description">
                                <p className="paragraph">This section is dedicated to the JavaScript language itself, and not the
                                    parts
                                    that are specific to Web pages or other host environments.
                                </p>
                                <p className="paragraph">This section is dedicated to the JavaScript language itself, and not the
                                    parts
                                    that are specific to Web pages or other host environments.
                                </p>
                                <ul className="list">
                                    <li className="list__item">
                                        Close to the beach
                                    </li>
                                    <li className="list__item">
                                        Get way close
                                    </li>
                                    <li className="list__item">
                                        Close child
                                    </li>
                                    <li className="list__item">
                                        No way boys
                                    </li>
                                    <li className="list__item">
                                        comfortable rooms
                                    </li>
                                    <li className="list__item">
                                        Long beds
                                    </li>
                                    <li className="list__item">
                                        Natural Air
                                    </li>
                                    <li className="list__item">
                                        Window Side
                                    </li>
                                    <li className="list__item">
                                        Close child
                                    </li>
                                    <li className="list__item">
                                        No way boys
                                    </li>
                                </ul>
                                <div className="recommend">
                                    <p className="recommend__count">
                                        Mubi and 3 other friends recommend this hotel
                                    </p>
                                    <div className="recommend__friends">
                                        <img src="/Screenshot_20220422-210407_Gallery.jpg" alt="Friend 1"
                                            className="recommend__photo" />
                                        <img src="/DSC_0470.JPG" alt="Friend 2" className="recommend__photo" />
                                        <img src="/DSC_0626.JPG" alt="Friend 3" className="recommend__photo" />
                                        <img src="/DSC_0648.JPG" alt="Friend 4" className="recommend__photo" />
                                    </div>
                                </div>
                            </div>
                            <figure className="user-reviews">
                                <figure className="review">
                                    <blockquote className="review__text">
                                        This section is dedicated to the JavaScript language itself, and not the
                                        parts
                                        that are specific to Web pages or other host environments.
                                    </blockquote>
                                    <figcaption className="review__user">
                                        <img src="/DSC_0648.JPG" alt="" className="review__photo" />
                                        <div className="review__user-box">
                                            <p className="review__user-name">Mubi Hassan</p>
                                            <p className="review__user-date">1 march 2000</p>
                                        </div>
                                        <div className="review__rating">7.8</div>
                                    </figcaption>
                                </figure>
                                <figure className="review">
                                    <blockquote className="review__text">
                                        This section is dedicated to the JavaScript language itself, and not the
                                        parts
                                        that are specific to Web pages or other host environments.
                                    </blockquote>
                                    <figcaption className="review__user">
                                        <img src="/DSC_0626.JPG" alt="" className="review__photo" />
                                        <div className="review__user-box">
                                            <p className="review__user-name">Huzaifa Ali</p>
                                            <p className="review__user-date">15 sep 2001</p>
                                        </div>
                                        <div className="review__rating">9.3</div>
                                    </figcaption>
                                </figure>
                                <button className="btn__inline">Show all <span>&rarr;</span></button>
                            </figure>

                        </div>
                        <div className="cta">
                            <h2 className="cta__book-now">Good news! we have 4 freem rooms for your selected dates!</h2>
                            <button className="btn">
                                <span className="btn__visible">Book now</span>
                                <span className="btn__invisible"> Only 4 rooms left</span>
                            </button>
                        </div>
                    </main>
                </div>
            </div>
        </>
    )
}

export default HotalVeiw