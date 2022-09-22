import axios from 'axios';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { act_hide_search, act_show_product } from '~/reudx/actions/actions';
import styles from './Search.module.scss';
const cx = classNames.bind(styles);

function Search() {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState([]);
    const [value, setValue] = useState('');
    useEffect(() => {
        const getApi = async () => {
            const res = await axios('https://62fe3c81a85c52ee48331f2f.mockapi.io/api/v1/newProducts');
            setData(res.data);
        };
        getApi();
    }, []);

    useEffect(() => {
        setFilter(
            data.filter((item) => {
                console.log(item.name.toLowerCase());
                return item.name.toLowerCase().includes(value.toLowerCase());
            }),
        );
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    const selector = useSelector((state) => state.showSearch);
    const dispatch = useDispatch();
    const handleHideSearch = () => {
        dispatch(act_hide_search());
    };
    const handleBuyProdut = (product) => {
        dispatch(
            act_show_product({
                status: true,
                product: product,
            }),
        );
    };
    return (
        <div className={cx('search', { active: selector })}>
            <div
                className={cx('layout', { active: selector })}
                onClick={() => {
                    handleHideSearch();
                    setValue('');
                }}
            ></div>
            <div className={cx('warrper', { 'active-warrper': selector })}>
                <div className={cx('search-box')}>
                    <p>Enter keywords to search: </p>
                    <div>
                        <div className={cx('icon-search')}>
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </div>
                        <div className={cx('box-search')}>
                            <input
                                type={'text'}
                                placeholder="Search"
                                value={value}
                                onChange={(e) => {
                                    setValue(e.target.value);
                                }}
                            />
                            <div className={cx('box-product')}>
                                <div className={cx('product-list')}>
                                    {value === ''
                                        ? ''
                                        : filter.map((product) => {
                                              return (
                                                  <div
                                                      className={cx('product-item')}
                                                      key={product.id}
                                                      onClick={() => {
                                                          setValue('');
                                                          handleHideSearch();
                                                          handleBuyProdut(product);
                                                      }}
                                                  >
                                                      <img src={product.imgs[0]} alt="product" />
                                                      <div className={cx('info')}>
                                                          <p>{product.name}</p>
                                                          {product.priceSale ? (
                                                              <div className={cx('price')}>
                                                                  <span className={cx('price-sale')}>
                                                                      $ {product.price}
                                                                  </span>
                                                                  <span>$ {product.priceSale}</span>
                                                              </div>
                                                          ) : (
                                                              <div className={cx('price')}>
                                                                  <span>$ {product.price}</span>
                                                              </div>
                                                          )}
                                                      </div>
                                                  </div>
                                              );
                                          })}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className={cx('close')}
                        onClick={() => {
                            handleHideSearch();
                            setValue('');
                        }}
                    >
                        <i className="fa-solid fa-xmark"></i>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Search;
