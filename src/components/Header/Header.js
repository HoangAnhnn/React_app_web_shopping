import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import logo from '~/asset/imgs/logo.png';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { act_choose_router, act_remove_cart, act_show_search } from '~/reudx/actions/actions';
const cx = classNames.bind(styles);
function Header() {
    const ul = [
        { to: '', li: 'home' },
        { to: 'shop', li: 'shop' },
        { to: 'blog', li: 'blog' },
        { to: 'about', li: 'about' },
        { to: 'contact', li: 'contact' },
    ];

    const [active, setActive] = useState('home');
    const [navActive, setNavActive] = useState(false);
    const [headerScroll, setHeaderScorll] = useState(true);

    const router = useSelector((state) => state.router);
    // console.log(router);
    useEffect(() => {
        setHeaderScorll(false);
        const handleScroll = () => {
            window.scrollY && setNavActive(false);

            if (window.scrollY <= 20) {
                setHeaderScorll(false);
            } else {
                setHeaderScorll(true);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const selector = useSelector((state) => state.cart);
    // console.log(selector);
    // console.log(typeof selector[0].product.price);
    const dispatch = useDispatch();
    const handleRemove = (product) => {
        dispatch(act_remove_cart(product));
    };
    const handleChosseRouter = (router) => {
        dispatch(act_choose_router(router));
    };
    const handleShowSearch = () => {
        dispatch(act_show_search());
    };

    return (
        <header
            className={cx('header', 'd-flex align-items-center', {
                'not-home': !(active === 'home'),
                activeScroll: headerScroll,
            })}
        >
            <div className={cx('inner', 'd-flex align-items-center container')}>
                <img src={logo} className={cx('logo')} alt="logo" />
                <ul
                    className={cx('nav', 'd-md-flex aligns-items-center', {
                        'nav-active': navActive,
                    })}
                >
                    {ul.map((item, index) => {
                        return (
                            <li
                                key={index}
                                onClick={() => {
                                    setActive(item.li);
                                    handleChosseRouter(item.li);
                                    setNavActive(false);
                                }}
                            >
                                <Link
                                    className={cx('link', {
                                        active: item.li === router,
                                    })}
                                    to={`./${item.to}`}
                                >
                                    <span>{item.li}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
                <div className={cx('controler', 'd-flex align-items-center')}>
                    <div className={cx('controler-icon')} onClick={() => handleShowSearch()}>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </div>
                    <div className={cx('controler-icon', 'control-cart')}>
                        <div>
                            <i className="fa-solid fa-cart-shopping"></i>
                        </div>
                        <div className={cx('cart')}>
                            {selector.length ? (
                                <div className={cx('warper-product')}>
                                    <div className={cx('list-product')}>
                                        {selector.map((item, index) => {
                                            let { product } = { ...item };
                                            return (
                                                <div className={cx('product-item')} key={index}>
                                                    <img src={product.imgs[0]} alt="sam pham" />

                                                    <div className={cx('info-product')}>
                                                        <h4>{product.name}</h4>
                                                        <div>
                                                            <p>size: </p>
                                                            <span>{item.size} </span>
                                                            <div style={{ backgroundColor: `${item.colorCode}` }}></div>
                                                            <div
                                                                className={cx('icon-color')}
                                                                style={{ color: `${item.colorCode}` }}
                                                            >
                                                                <i className="fa-solid fa-paint-roller"></i>
                                                            </div>
                                                        </div>
                                                        <p>Quantity: {item.quantity}</p>
                                                    </div>
                                                    <div
                                                        className={cx('remove-product')}
                                                        onClick={() => handleRemove(item)}
                                                    >
                                                        <i className="fa-solid fa-trash-can"></i>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                    <div className={cx('total')}>
                                        <span>TOTAL: $</span>
                                        <span>
                                            {!selector
                                                ? 0
                                                : selector.reduce((total, item) => {
                                                      let price =
                                                          parseFloat(item.product.priceSale) ||
                                                          parseFloat(item.product.price);
                                                      //   console.log(price);
                                                      //   console.log(total);

                                                      total += item.quantity * price;

                                                      return parseFloat(total.toFixed(2));
                                                  }, 0)}
                                        </span>
                                    </div>
                                    <Link
                                        to="/cart"
                                        className={cx('btn btn-big', 'btn-viewCart')}
                                        onClick={() => {
                                            handleChosseRouter('');
                                        }}
                                    >
                                        View Cart
                                    </Link>
                                </div>
                            ) : (
                                <img
                                    className={cx('img-emty')}
                                    src="https://bizweb.dktcdn.net/100/351/215/themes/713955/assets/empty-cart.png?1617619216743"
                                    alt=""
                                />
                            )}
                        </div>
                        <div className={cx('updata-quantity')}>{selector.length ? selector.length : 0}</div>
                    </div>
                    <div className={cx('controler-icon', 'control-menu')} onClick={() => setNavActive(!navActive)}>
                        <span
                            className={cx('toggle', {
                                active: navActive,
                            })}
                        ></span>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
