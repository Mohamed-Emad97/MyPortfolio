import styles from "./Services.module.scss";
import { Swiper, SwiperSlide } from 'swiper/react';


const Services = () => {
  return (
    <>
    <section id={`${styles.services}`} className="py-5">
      <div className="container">
      <Swiper
                breakpoints={{
                    320: { slidesPerView: 1, spaceBetween: 40 },
                    480: { slidesPerView: 2, spaceBetween: 40 },
                    768: { slidesPerView: 3, spaceBetween: 40 },
                    1024: { slidesPerView: 3, spaceBetween: 40 },
                }}
                loop = {true}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide>
                <div className={`${styles.srvBox} ${styles.brdrRed} p-4 text-center`}>
                  <div className={`${styles.red} fs-1 icon`}>
                    <i className="fa-solid fa-palette"></i>
                  </div>
                  <p className='text-black-50 fs-5 fw-bold mt-2'>
                    UI Developer
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${styles.srvBox} ${styles.brdrYellow} p-4 text-center`}>
                  <div className={`${styles.yellow} fs-1 icon`}>
                    <i className="fa-solid fa-code"></i>
                  </div>
                  <p className='text-black-50 fs-5 fw-bold mt-2'>
                    Front End Web Developer 
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${styles.srvBox} ${styles.brdrBlue} p-4 text-center`}>
                  <div className={`${styles.blue} fs-1 icon`}>
                    <i className="fa-brands fa-react"></i>
                  </div>
                  <p className='text-black-50 fs-5 fw-bold mt-2'>
                    React.js Developer 
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${styles.srvBox} ${styles.brdrBlack} p-4 text-center`}>
                  <div className={`${styles.black} fs-1 icon`}>
                  <i className="fa-brands fa-wix"></i>
                  </div>
                  <p className='text-black-50 fs-5 fw-bold mt-2'>
                    WIX Website Designer
                  </p>
                </div>
              </SwiperSlide>
      </Swiper>
      </div>
    </section>
    </>
  )
}

export default Services;