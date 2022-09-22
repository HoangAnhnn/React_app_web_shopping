import classNames from 'classnames/bind';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
    act_buy_cart,
    act_buy_notify,
    act_choose_router,
    act_edit_cart,
    act_remove_cart,
} from '~/reudx/actions/actions';
import styles from './Cart.module.scss';
const cx = classNames.bind(styles);

function Cart() {
    const [numberPhone, setNumberPhone] = useState('');
    const [email, setEmail] = useState('');
    const [a, setA] = useState(false);
    const [b, setB] = useState(false);

    // console.log(numberPhone);
    // console.log(email);
    // const dispatch = useDispatch();
    const selector = useSelector((state) => state.cart);
    const disptach = useDispatch();
    const handleRemoveProduct = (item) => {
        disptach(act_remove_cart(item));
    };
    const hanldeEdit = (item) => {
        disptach(act_edit_cart(item));
    };
    const handleChooseRouter = () => {
        disptach(act_choose_router('shop'));
    };
    const handleBuy = () => {
        disptach(act_buy_cart());
    };
    const handleNotify = () => {
        disptach(act_buy_notify());
    };
    // console.log(a);

    return (
        <div>
            <div className="margin-header"></div>
            <div className="container">
                {!selector.length ? (
                    <div className={cx('no-product')}>
                        <img
                            src="https://bizweb.dktcdn.net/100/351/215/themes/713955/assets/empty-cart.png?1617619216743"
                            alt="no-product"
                        />

                        <Link to="/shop" className="btn btn-big" onClick={() => handleChooseRouter()}>
                            {' '}
                            shop Now
                        </Link>
                    </div>
                ) : (
                    <div className={cx('warrper')}>
                        <div className="row">
                            <div className="col-12 col-lg-8">
                                <div className={cx('product-list')}>
                                    {selector.map((item, index) => {
                                        let { product } = { ...item };
                                        // console.log(item);
                                        return (
                                            <div className={cx('product-item')} key={index}>
                                                <img src={product.imgs[0]} alt="porduct" />
                                                <div className={cx('info')}>
                                                    <h4>{product.name}</h4>

                                                    {product.priceSale ? (
                                                        <div className={cx('price')}>
                                                            <span className={cx('price-sale')}>${product.price}</span>
                                                            <span>${product.priceSale}</span>
                                                        </div>
                                                    ) : (
                                                        <div className={cx('price')}>
                                                            <span>${product.price}</span>
                                                        </div>
                                                    )}
                                                    <div className="d-flex align-items-center">
                                                        <span className={cx('size')}>
                                                            Size: <span>{item.size}</span>
                                                        </span>
                                                        <div className={cx('color')}>
                                                            Color:{' '}
                                                            <div style={{ backgroundColor: `${item.colorCode}` }}></div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className={cx('control')}>
                                                    <div className={cx('quantity', 'quantity-cart')}>
                                                        <div
                                                            className={cx('control-quantity', {
                                                                'control-quantity-active': item.quantity === 1,
                                                            })}
                                                            onClick={() => {
                                                                if (item.quantity > 1) {
                                                                    hanldeEdit({
                                                                        ...item,
                                                                        quantity: item.quantity - 1,
                                                                    });
                                                                }
                                                            }}
                                                        >
                                                            <i className="fa-solid fa-minus"></i>
                                                        </div>
                                                        <div className="result-quantity">{item.quantity}</div>
                                                        <div
                                                            className="control-quantity"
                                                            onClick={() => {
                                                                hanldeEdit({ ...item, quantity: item.quantity + 1 });
                                                            }}
                                                        >
                                                            <i className="fa-solid fa-plus"></i>
                                                        </div>
                                                    </div>

                                                    <div
                                                        onClick={() => {
                                                            handleRemoveProduct(item);
                                                        }}
                                                    >
                                                        <i className="fa-solid fa-trash-can"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                            <div className="col-12 col-lg-4">
                                <div className={cx('pay')}>
                                    <h4>Cart Totals</h4>
                                    <p>Please enter all information to be confirmed</p>
                                    <h3>Number phone :</h3>
                                    <input
                                        type="number"
                                        placeholder="Number Phone"
                                        value={numberPhone}
                                        onChange={(e) => {
                                            setNumberPhone(e.target.value);
                                            setA(false);
                                        }}
                                    />
                                    {a ? <h6>Please reconfirm the phone number</h6> : ''}
                                    <h3>Email :</h3>
                                    <input
                                        type="email"
                                        placeholder="Email@gmail.com.vn"
                                        value={email}
                                        onChange={(e) => {
                                            setEmail(e.target.value);
                                            setB(false);
                                        }}
                                    />
                                    {b ? <h6>Please confirm email number again</h6> : ''}

                                    <h3>Note :</h3>
                                    <textarea rows={'3'}></textarea>
                                    <span>
                                        Total:
                                        <span>
                                            $
                                            {selector.reduce((total, item) => {
                                                let price = item.product.priceSale || item.product.price;
                                                total += item.quantity * price;
                                                return parseFloat(total.toFixed(2));
                                            }, 0)}
                                        </span>
                                    </span>
                                    <button
                                        className={cx('btn btn-big')}
                                        onClick={() => {
                                            let vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
                                            let regex = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');
                                            //
                                            // console.log(vnf_regex.test(numberPhone) && regex.test(email));
                                            // console.log(!vnf_regex.test(numberPhone));
                                            if (vnf_regex.test(numberPhone)) {
                                                // console.log('hihi');
                                                setA(false);
                                            } else {
                                                setA(true);
                                            }
                                            if (regex.test(email)) {
                                                // console.log('bel');
                                                setB(false);
                                            } else {
                                                setB(true);
                                            }
                                            console.log(vnf_regex.test(numberPhone));
                                            console.log(regex.test(email));

                                            if (vnf_regex.test(numberPhone) && regex.test(email)) {
                                                handleBuy();
                                                handleNotify();
                                            }
                                        }}
                                    >
                                        BUY now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Cart;
