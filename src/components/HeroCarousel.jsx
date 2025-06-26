// HeroCarousel.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './HeroCarousel.css';
import VecImg from '../assets/Vector.png';
import VecImg2 from '../assets/Vector2.png';
import VecImg3 from '../assets/Vector3.png';
export default function HeroCarousel() {
  return (
    <section className="hero-carousel">
      <Swiper
        direction={'horizontal'}
        slidesPerView={1}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        pagination={{ clickable: true, el: ".custom-pagination", bulletClass: "swiper-pagination-bullet", bulletActiveClass: "swiper-pagination-bullet-active" }}
        modules={[Autoplay, Pagination]}
        loop={true}
        speed={1000}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slide">
            <div className="hero3">
              <div className="hero-left">
                <img src={VecImg} alt="Vector image 3" />
              </div>
              <div className="hero-right">
                <h1>
                  A Fresh Approach to Market <br />
                  Research<span className="one-red-dot">.</span>
                </h1>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide">
            <div className="hero4">
              <div className="hero-left">
                <img src={VecImg2} alt="Vector2 image 4" />
              </div>
              <div className="hero-right">
                <h1>
                  From Data to Decisions: <br />
                  Tailored research as Unique <br />
                  as your brand<span className="one-red-dot">.</span>
                </h1>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide">
            <div className="hero7">
              <div className="hero-left">
                <img src={VecImg3} alt="Vector3 image" className='img1' />
                <img src={VecImg3} alt="Vector4 image" className='img2' />
              </div>
              <div className="hero-right">
                <h1>
                  Your customers don't fit in a<br />
                  box, and neither does our <br />
                  approach<span className="one-red-dot">.</span>
                </h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="custom-pagination"></div>
    </section>
  );
}
