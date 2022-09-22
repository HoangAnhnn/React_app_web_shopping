import React from 'react';
import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);
function Footer() {
    return (
        <footer className={cx('footer')}>
            <div className={cx('footer-content', 'container')}>
                <div className={cx('row')}>
                    <div className={cx('col-lg-3 col-md-6 col-12')}>
                        <div className={cx('footer-item')}>
                            <h4>categories</h4>
                            <ul>
                                <li>
                                    <Link to="/shop">women</Link>
                                </li>
                                <li>
                                    <Link to="/shop">men</Link>
                                </li>
                                <li>
                                    <Link to="/shop">shoes</Link>
                                </li>
                                <li>
                                    <Link to="/shop">watches</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={cx('col-lg-3 col-md-6 col-12')}>
                        <div className={cx('footer-item')}>
                            <h4>help</h4>
                            <ul>
                                <li>
                                    <Link href="#">track order</Link>
                                </li>
                                <li>
                                    <Link href="#">returns</Link>
                                </li>
                                <li>
                                    <Link href="#">shipping</Link>
                                </li>
                                <li>
                                    <Link href="#">FAQs</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={cx('col-lg-3 col-md-6 col-12')}>
                        <div className={cx('footer-item')}>
                            <h4>get In touch</h4>
                            <p>
                                Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or
                                call us on (+84) 96 716 6879
                            </p>
                            <div>
                                <Link>
                                    <i className="icon-social fa-brands fa-facebook-f"></i>
                                </Link>
                                <Link>
                                    <i className="icon-social fa-brands fa-instagram"></i>
                                </Link>
                                <Link>
                                    <i className="icon-social fa-brands fa-tiktok"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className={cx('col-lg-3 col-md-6 col-12')}>
                        <div className={cx('footer-item')}>
                            <h4>Newsletter</h4>
                            <input placeholder="exmple@gmail.com" />
                            <button className="btn btn-big">subscribe</button>
                        </div>
                    </div>
                </div>
                <p> Desgin By @Phạm Hoàng Anh DevMaster Academy</p>
            </div>
        </footer>
    );
}

export default Footer;
