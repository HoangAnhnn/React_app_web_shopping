import axios from 'axios';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { act_show_product } from '~/reudx/actions/actions';
import Loading from '../Loading/Loading';
import styles from './Shop.module.scss';
const cx = classNames.bind(styles);
function Shop() {
    const ul = ['All Products', 'Women', 'Men', 'Bag', 'Shoes', 'Watches'];
    const [dataApi, setDataApi] = useState([]);
    const [dataOut, setDataOut] = useState([]);
    const [loading, setLoading] = useState(false);
    const [optionActive, SetOptionActive] = useState('All Products');
    const [filter, setFilter] = useState('');
    const [optionFilter, setOptionFilter] = useState('');

    useEffect(() => {
        const getApi = async () => {
            setLoading(true);
            const res = await axios.get('https://62fe3c81a85c52ee48331f2f.mockapi.io/api/v1/newProducts');
            setDataApi(res.data);
            setLoading(false);
        };
        getApi();
    }, []);

    useEffect(() => {
        setDataOut(dataApi);
    }, [dataApi]);
    const handleChosseProduct = (item) => {
        if (item.toLowerCase() === 'all products') {
            setDataOut(dataApi);
        } else if (item.toLowerCase() === 'women') {
            setDataOut(dataApi.filter((item) => item.type === 'woman'));
        } else if (item.toLowerCase() === 'men') {
            setDataOut(dataApi.filter((item) => item.type === 'man'));
        } else if (item.toLowerCase() === 'watches') {
            setDataOut(dataApi.filter((item) => item.type === 'watch'));
        } else if (item.toLowerCase() === 'shoes') {
            setDataOut(dataApi.filter((item) => item.type === 'shoe'));
        } else if (item.toLowerCase() === 'bag') {
            setDataOut(dataApi.filter((item) => item.type === 'bag'));
        }
    };

    const handleSort = (data) => {
        if (data === 'def') {
        } else if (data === 'desc') {
            setDataOut((prev) => {
                return prev.sort((a, b) => {
                    let c = b.priceSale || b.price;
                    let d = a.priceSale || a.price;
                    return c - d;
                });
            });
        } else if (data === 'asc') {
            setDataOut((prev) => {
                return prev.sort((a, b) => {
                    let c = b.priceSale || b.price;
                    let d = a.priceSale || a.price;
                    return d - c;
                });
            });
        }
    };
    // console.log(dataApi);

    const dispatch = useDispatch();
    const hanldeShowProduct = (product) => {
        dispatch(
            act_show_product({
                status: true,
                product: product,
            }),
        );
    };

    return (
        <div className="container">
            <div className="margin-header"></div>
            {loading ? (
                <Loading></Loading>
            ) : (
                <div className={cx('shop')}>
                    <div className={cx('nav')}>
                        {loading ? (
                            <Loading></Loading>
                        ) : (
                            <>
                                <ul>
                                    {ul.map((item, index) => {
                                        return (
                                            <li
                                                className={cx('list-option', {
                                                    active: optionActive.toLowerCase() === item.toLowerCase(),
                                                })}
                                                key={index}
                                                onClick={() => {
                                                    SetOptionActive(item);
                                                    handleChosseProduct(item);
                                                }}
                                            >
                                                <span>{item}</span>
                                            </li>
                                        );
                                    })}
                                </ul>
                                <div className={cx('filter')}>
                                    {filter || 'Filter'}
                                    <div>
                                        <ul>
                                            {/* <li
                                                onClick={(e) => {
                                                    setFilter(e.target.innerText);
                                                    handleSort('def');
                                                }}
                                            >
                                                Default
                                            </li> */}
                                            <li
                                                onClick={(e) => {
                                                    setFilter(e.target.innerText);
                                                    handleSort('asc');
                                                }}
                                            >
                                                Price: Low to Hight
                                            </li>
                                            <li
                                                onClick={(e) => {
                                                    setFilter(e.target.innerText);
                                                    handleSort('desc');
                                                }}
                                            >
                                                Price: Hight to Low
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                    <div className={cx('products', 'row')}>
                        {dataOut.map((item, index) => {
                            return (
                                <div className="col-6 col-sm-6 col-md-4 col-lg-3" key={item.id}>
                                    <div className={cx('product')}>
                                        <div className={cx('product-img')}>
                                            <img src={item.imgs[0]} alt={`product ${item.id}`} />
                                            <button className="btn btn-small" onClick={() => hanldeShowProduct(item)}>
                                                Quick view
                                            </button>
                                        </div>
                                        <div className={cx('info')}>
                                            <div className={cx('info-left')}>
                                                <p onClick={() => hanldeShowProduct(item)}>{item.name}</p>
                                                <div>
                                                    {item.priceSale ? (
                                                        <>
                                                            <span className={cx('price-sale', 'price')}>
                                                                ${item.price}
                                                            </span>
                                                            <span className={cx('price')}> ${item.priceSale}</span>
                                                        </>
                                                    ) : (
                                                        <span className={cx('price')}> ${item.price}</span>
                                                    )}
                                                </div>
                                            </div>
                                            <div className={cx('info-right')} onClick={() => hanldeShowProduct(item)}>
                                                <i className="fa-solid fa-cart-plus"></i>
                                            </div>
                                        </div>
                                        {item.sale ? <div className={cx('status')}> {item.sale}</div> : ''}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Shop;
