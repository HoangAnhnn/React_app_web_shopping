import Shop from '../Shop/Shop';
import Slider from '../Slider/Slider';

function Home() {
    return (
        <div>
            <Slider></Slider>
            <section className="container">
                <Shop></Shop>
            </section>
        </div>
    );
}

export default Home;
