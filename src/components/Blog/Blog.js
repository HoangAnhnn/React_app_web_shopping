import styles from './Blog.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Loading from '../Loading/Loading';
const cx = classNames.bind(styles);
function Blog() {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    useEffect(() => {
        const getApi = async () => {
            setLoading(true);
            const res = await axios.get('https://62fe3c81a85c52ee48331f2f.mockapi.io/api/v1/blog-shoping');
            setData(res.data);
            setLoading(false);
        };
        getApi();
    }, []);
    return (
        <div className={cx('blog')}>
            <div className="margin-header"></div>
            {loading ? (
                <Loading></Loading>
            ) : (
                <div>
                    <h2 className={cx('title')}>Blog</h2>
                    <div className="container">
                        <div className={cx('blog-list')}>
                            {data.map((item, index) => {
                                const date = item.date.split('/');
                                const day = date.shift();
                                const dateString = date.toString().replace(',', ' ');
                                console.log(dateString);
                                return (
                                    <div className={cx('blog-item')} key={index}>
                                        <div>
                                            <img src={item.img} alt="" />
                                            <div className={cx('date')}>
                                                <span>{day}</span>
                                                <span>{dateString}</span>
                                            </div>
                                        </div>
                                        <h3>{item.name}</h3>
                                        <p>{item.description}</p>
                                        <Link to="">
                                            Coutinue Reading{' '}
                                            <span>
                                                <i className="fa-solid fa-right-long"></i>
                                            </span>
                                        </Link>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Blog;
