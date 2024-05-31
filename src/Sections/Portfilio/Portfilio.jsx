import {Link} from "react-router-dom";
import styles from "./Portfilio.module.scss";
import {Frontend} from "../../Utilies/imgs";

const Portfilio = () => {

  return (
    <>
    <section id={styles.portfilio} className="py-5">
      <div className="container">
        <div className="mainHeading text-center my-5">
          <h2 className="fw-bolder">Portfolio</h2>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className={`${styles.Box} ${styles.brdrBlack} p-5 text-center`}>
              <div className={`${styles.icon} my-4 fs-1`}>
                <img src={Frontend} alt="Frontend-Mentor-Logo" className="img-fluid" />
              </div>
              <Link to="/portfilio" state={{id: "Frontend"}} className={`${styles.linkBlack} text-black-50 fs-3 fw-bold mt-2 text-decoration-none`}>
                Frontend Mentor Challenges
              </Link>
            </div>
          </div>
          <div className="col-md-6">
            <div className={`${styles.Box} ${styles.brdrBlue} p-5 text-center`}>
              <div className={`${styles.icon} my-4 fs-1`}>
                <i className="fa-solid fs-1 fa-code"></i>
              </div>
              <Link to="/portfilio" state={{id: "Work"}} className={`${styles.linkBlue} text-black-50 fs-3 fw-bold mt-2 text-decoration-none`}>
                My Work
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
};

export default Portfilio;

