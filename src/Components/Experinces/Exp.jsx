//import styles from "./Exp.module.scss";
import {experiences} from "../../Utilies/conts";

const Exp = () => {
  return (
    <>
      <div id="exp" className='mb-3'>
        <h3 className='fw-bolder mb-4 text-lg-start text-md-start text-sm-center text-center'>Experiences</h3>
      {experiences.map((exp) =>
        <>
          <div className="expBox my-3 center justify-content-between">
            <div className="detail">
                <div className="title">
                  <h5 className="text-lg-start text-md-start text-sm-center text-center">{exp.title}</h5>
                </div>
                <div className="desc d-flex">
                  <span className="org me-5">
                    <span className="iconOrg text-black-50 me-2">
                      <i className="fa-solid fa-building"></i>
                    </span>
                    {exp.org}
                  </span>
                  <span className="location me-5">
                    <span className="iconLocation text-black-50 me-2">
                      <i className="fa-solid fa-location-dot"></i>
                    </span>
                    {exp.location}
                  </span>
                  <span className="position">
                    <span className="iconPos text-black-50 me-2">
                      <i className="fa-solid fa-id-badge"></i>
                    </span>
                    {exp.position}
                  </span>
                </div>
            </div>
            <div className="date">
              <span className="iconDate text-black-50 me-2">
                <i className="fa-regular fa-calendar-days"></i>
              </span>
              {exp.duration}
            </div>
          </div>
        </>
      )}
    </div>
    </>
  )
}

export default Exp;