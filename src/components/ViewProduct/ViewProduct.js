import classNames from 'classnames/bind';
import { useDispatch, useSelector } from 'react-redux';
import { act_add_cart, act_hide_product, act_show_notify } from '~/reudx/actions/actions';
import styles from './ViewProduct.module.scss';

import { useState } from 'react';

const cx = classNames.bind(styles);

function ViewProduct() {
    const size = ['s', 'm', 'l', 'xl', 'xxl'];

    const [sizeActive, setSizeActive] = useState('');
    const [colorActive, setColorActive] = useState('');
    const [colorCode, setColorCode] = useState('');
    const [indexImg, setIndexImg] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [a, setA] = useState(false);
    const [b, setB] = useState(false);

    const selector = useSelector((state) => state);
    let { status, product } = selector.showProduct;
    // console.log(colorCode);

    // useEffect(() => {
    //     if (sizeActive === '') {
    //         console.log('hello');
    //     } else if (sizeActive === 's') {
    //         console.log('S');
    //     } else if (sizeActive === 'm') {
    //         console.log('M');
    //     } else if (sizeActive === 'l') {
    //         console.log('L');
    //     } else if (sizeActive === 'xl') {
    //         console.log('XL');
    //     } else if (sizeActive === 'xxl') {
    //         console.log('XXl');
    //     }
    // }, [sizeActive]);

    // console.log(product);
    // let color = [];

    // if (!(Object.keys(product).length === 0)) {
    //     color = product.description.reduce((a, b) => {
    //         a.push(b.colorName);
    //         return a;
    //     }, []);
    // }
    const handleCheck = (product) => {
        // console.log(product);
        if (product.type === 'watch') {
            setSizeActive(true);
            setA(false);
            if (colorActive === '') {
                setB(true);
            } else {
                setB(false);
            }
        } else {
            if (sizeActive === '') {
                setA(true);
            } else {
                setA(false);
            }
            if (colorActive === '') {
                setB(true);
            } else {
                setB(false);
            }
        }
    };

    const handleColor = (item) => {
        switch (sizeActive) {
            case 's':
                let a = item.size.filter((size) => {
                    return size.size === sizeActive;
                });
                if (a[0].quantity === 0) {
                    return true;
                } else {
                    return false;
                }
            case 'm':
                let b = item.size.filter((size) => {
                    return size.size === sizeActive;
                });
                if (b[0].quantity === 0) {
                    return true;
                } else {
                    return false;
                }
            case 'l':
                let c = item.size.filter((size) => {
                    return size.size === sizeActive;
                });
                if (c[0].quantity === 0) {
                    return true;
                } else {
                    return false;
                }
            case 'xl':
                let e = item.size.filter((size) => {
                    return size.size === sizeActive;
                });
                if (e[0].quantity === 0) {
                    return true;
                } else {
                    return false;
                }
            case 'xxl':
                let f = item.size.filter((size) => {
                    return size.size === sizeActive;
                });
                if (f[0].quantity === 0) {
                    return true;
                } else {
                    return false;
                }

            default:
                return false;
        }
    };

    const dispatch = useDispatch();
    const handleCloseShowProduct = () => {
        dispatch(act_hide_product());
    };

    const handleSucces = () => {
        dispatch(act_show_notify());
    };
    const handleAddProductToCart = (product) => {
        dispatch(
            act_add_cart({
                product: product,
                quantity: quantity,
                color: colorActive,
                size: sizeActive,
                colorCode: colorCode,
            }),
        );
    };

    return (
        <>
            {status ? (
                <div className={cx('view_product')}>
                    <div
                        className={cx('layout1')}
                        onClick={() => {
                            handleCloseShowProduct();
                            setIndexImg(0);
                            setSizeActive('');
                            setColorActive('');
                            setQuantity(1);
                            setA(false);
                            setB(false);
                        }}
                    ></div>
                    <div className={cx('layout', 'container')}>
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <div className={cx('product-left')}>
                                    <div className="row">
                                        <div className="col-2">
                                            <div className={cx('list-img')}>
                                                {product.imgs.map((item, index) => {
                                                    return (
                                                        <div
                                                            key={index}
                                                            className={cx('item-img', {
                                                                'active-img': index === indexImg,
                                                            })}
                                                            onClick={() => setIndexImg(index)}
                                                        >
                                                            <img src={item} alt="prodcut" />
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                        <div className="col-10">
                                            <div className={cx('img-main')}>
                                                <img src={product.imgs[indexImg]} alt="product" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12  col-md-6">
                                <div className={cx('product-right')}>
                                    <h2>{product.name}</h2>

                                    <div className={cx('price')}>
                                        {product.priceSale ? (
                                            <>
                                                <span className={cx('price-sale')}>${product.priceSale}</span>
                                                <span>${product.price}</span>
                                            </>
                                        ) : (
                                            <span>${product.price}</span>
                                        )}
                                    </div>

                                    <p>
                                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim id est laborum."
                                    </p>
                                    {product.type === 'watch' ? (
                                        <></>
                                    ) : (
                                        <div className={cx('size')}>
                                            <span>Size : </span>
                                            {size.map((item, index) => {
                                                return (
                                                    <div
                                                        key={index}
                                                        className={cx('list-size', {
                                                            'active-size': item === sizeActive,
                                                        })}
                                                        onClick={() => {
                                                            setSizeActive(item);
                                                            setColorActive('');
                                                            setA(false);
                                                        }}
                                                    >
                                                        <span>{item}</span>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    )}
                                    {a ? <span className={cx('warning')}>please choose size</span> : <></>}

                                    <div className={cx('size')}>
                                        <span>Color : </span>
                                        {product.description.map((item, index) => {
                                            return (
                                                <div
                                                    key={index}
                                                    className={cx('color-list')}
                                                    onClick={() => {
                                                        if (!handleColor(item)) {
                                                            setColorActive(item.colorName);
                                                            setColorCode(item.colorCode);
                                                        }
                                                        // console.log(item.colorName);
                                                    }}
                                                >
                                                    <div
                                                        className={cx('color-item', {
                                                            'active-color': item.colorName === colorActive,
                                                            'check-active': item.colorName === colorActive,
                                                            'no-color': handleColor(item),
                                                        })}
                                                        style={{ backgroundColor: `${item.colorCode}` }}
                                                        onClick={() => setB(false)}
                                                    >
                                                        <div
                                                            className={cx('check', {
                                                                'check-active': item.colorName === colorActive,
                                                            })}
                                                        >
                                                            <i className="fa-solid fa-check"></i>
                                                        </div>
                                                        {/* <div
                                                            className={cx('no-color', {
                                                                'no-color-active': handleColor(item),
                                                            })}
                                                        ></div> */}
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                    {b ? <span className={cx('warning')}>please choose color</span> : <></>}

                                    <div className="quantity">
                                        <div
                                            className={cx('control-quantity', {
                                                'control-quantity-active': quantity === 1,
                                            })}
                                            onClick={() => {
                                                if (quantity > 1) {
                                                    setQuantity((prev) => prev - 1);
                                                }
                                            }}
                                        >
                                            <i className="fa-solid fa-minus"></i>
                                        </div>
                                        <div className="result-quantity">{quantity}</div>
                                        <div
                                            className="control-quantity"
                                            onClick={() => {
                                                setQuantity((prev) => prev + 1);
                                            }}
                                        >
                                            <i className="fa-solid fa-plus"></i>
                                        </div>
                                    </div>
                                    <div className={cx('warper-btn')}>
                                        <div
                                            className={cx('btn btn-big', 'btn-show-product')}
                                            onClick={() => {
                                                handleCheck(product);

                                                if (product.type === 'watch') {
                                                    if (colorActive !== '') {
                                                        setSizeActive('');
                                                        setColorActive('');
                                                        setQuantity(1);
                                                        setA(false);
                                                        setB(false);
                                                        setIndexImg(0);
                                                        handleCloseShowProduct();
                                                        handleSucces();
                                                        handleAddProductToCart(product);
                                                    }
                                                } else {
                                                    if (sizeActive !== '' && colorActive !== '') {
                                                        setSizeActive('');
                                                        setColorActive('');
                                                        setQuantity(1);
                                                        setA(false);
                                                        setB(false);
                                                        setIndexImg(0);
                                                        handleCloseShowProduct();
                                                        handleSucces();
                                                        handleAddProductToCart(product);
                                                    }
                                                }
                                            }}
                                        >
                                            add to cart
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className={cx('btn-close')}
                        onClick={() => {
                            handleCloseShowProduct();
                            setIndexImg(0);
                            setSizeActive('');
                            setColorActive('');
                            setQuantity(1);
                            setA(false);
                            setB(false);
                        }}
                    >
                        <i className="fa-solid fa-xmark"></i>
                    </div>
                </div>
            ) : (
                <></>
            )}
        </>
    );
}

export default ViewProduct;
