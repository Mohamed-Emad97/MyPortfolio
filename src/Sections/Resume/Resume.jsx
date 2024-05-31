//import styles from "./Resume.module.scss";
import {Exp , Edu} from "../../Utilies/index";
import {ResumePic} from "../../Utilies/imgs";

const Resume = () => {
  return (
    <>
      <section id="resume" className="py-5">
        <div className="container">
          <div className="mainHeading text-center">
            <h2 className="fw-bolder">Resume</h2>
          </div>
          <div className="row">
          <div className="col-lg-5 col-md-6 my-2">
            <div className="img p-3">
              <img src={ResumePic} alt="resume-pic" className='w-100' />
            </div>
          </div>
          <div className="col-lg-1"></div>
          <div className="col-md-6 my-2">
            <div className="content">
                <Exp/>
                <Edu/>
            </div>
          </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Resume;