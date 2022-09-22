import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import classNames from 'classnames/bind';
import styles from './Slider.module.scss';
// Import Swiper styles
import './slider.css';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { EffectFade, Autoplay, Navigation, Pagination } from 'swiper';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Loading from '../Loading/Loading';
const cx = classNames.bind(styles);

function Slider() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        let getApi = async () => {
            setLoading(true);
            const res = await axios.get('https://62fe3c81a85c52ee48331f2f.mockapi.io/api/v1/api-banner');
            setData(res.data);
            setLoading(false);
        };
        getApi();
    }, []);
    return (
        <>
            <div className="slider">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    effect={'fade'}
                    navigation={true}
                    centeredSlides={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    modules={[EffectFade, Navigation, Autoplay, Pagination]}
                    className="mySwiper"
                >
                    {loading ? (
                        <Loading></Loading>
                    ) : (
                        data.map((item, index) => {
                            return (
                                <SwiperSlide key={item.id}>
                                    <div className={cx('slider')}>
                                        <img src={item.banner} alt={`anh ${index}`} />
                                        <div className={cx('title', 'container')}>
                                            <h3>{item.title1}</h3>
                                            <h2>{item.title2}</h2>
                                            <Link to="/shop" className={cx('btn', 'btn-slider')}>
                                                Shop now
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            );
                        })
                    )}
                </Swiper>
            </div>
        </>
    );
}
export default Slider;
