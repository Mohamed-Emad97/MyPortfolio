import styles from "./Contact.module.scss";

const Contact = () => {
  return (
    <>
      <section id={styles.contact}>
        <div className="container">
          <div className="maineading text-center">
            <h2 className='fw-bolder'>Contact Me</h2>
          </div>
          <div className="content text-center mt-5">
            <div className="row">
              <div className="col-md-6">
                <div className="contactUs">
                  <h4>Contact Info</h4>
                  <p className='mb-0 fs-6 fw-bold text-black-50 center'><span className="icon text-black-50 fw-bold fs-5 me-2"><i className="fa-solid fa-envelope"></i></span>mohamedmassoud14872@gmail.com</p>
                  <p className='tel fs-6 fw-bold text-black-50 center'><span className="icon text-black-50 fw-bold fs-5 me-2"><i className="fa-solid fa-phone"></i></span>01553640099</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="socailIcons">
                  <h4 className='mt-3'>Find Me Here</h4>
                  <div className="socail">
                    <a href="https://www.linkedin.com/in/mohamed-emad-7ab1b4238/">
                      <span className="linkedin text-black-50 fs-3 mx-2"><i className="fa-brands fa-linkedin"></i></span>
                    </a>
                    <a href="mailto:mohamedmassoud14872@gmail.com">
                      <span className="google text-black-50 fs-3 mx-2"><i className="fa-brands fa-google"></i></span>
                    </a>
                    <a href="https://github.com/Mohamed-Emad97">
                      <span className="github text-black-50 fs-3 mx-2"><i className="fa-brands fa-github"></i></span>
                    </a>
                    <a href="https://twitter.com/Mohamed60964202">
                      <span className="twitter text-black-50 fs-3 mx-2"><i className="fa-brands fa-twitter"></i></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="txt text-center">
            <p>Build With <span className={`${styles.heart_icon}`}><i className="fa-solid fa-heart"></i></span> 2024</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact;