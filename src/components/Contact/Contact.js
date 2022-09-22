import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Contact.module.scss';
const cx = classNames.bind(styles);

function Contact() {
    return (
        <div>
            <div className="margin-header"></div>
            <div className={cx('img-contact')}>contact</div>
            <div className={cx('contact-content', 'container')}>
                <div className="row no-gutters">
                    <div className="col-12 col-md-6">
                        <div className={cx('contact-item', 'contact-item-left')}>
                            <h3>send us a message</h3>
                            <div>
                                <div>
                                    <i className="fa-regular fa-envelope"></i>
                                </div>
                                <input placeholder="Your Email Address" />
                            </div>
                            <textarea rows="6" placeholder="How Can We Help?"></textarea>
                            <div className="btn btn-full">Submit</div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className={cx('contact-item', 'contact-item-right')}>
                            <div className={cx('contact-list')}>
                                <div>
                                    <i className="fa-solid fa-location-dot"></i>
                                </div>
                                <div>
                                    <span>Address</span>
                                    <p>Coza Store Center 8th floor, 379 Hudson St, New York, NY 10018 US</p>
                                </div>
                            </div>
                            <div className={cx('contact-list')}>
                                <div>
                                    <i className="fa-solid fa-phone"></i>
                                </div>
                                <div>
                                    <span>Phone</span>
                                    <Link> +84 395 6235 34</Link>
                                </div>
                            </div>
                            <div className={cx('contact-list')}>
                                <div>
                                    <i className="fa-regular fa-envelope"></i>
                                </div>
                                <div>
                                    <span>Sale Support</span>
                                    <Link>contact@gmail.com</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
