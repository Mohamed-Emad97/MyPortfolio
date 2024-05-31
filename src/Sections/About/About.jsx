import styles from "./About.module.scss";
import { summary } from "../../Utilies/conts";

const About = () => {
  return (
    <>
      <section id={styles.about} className='py-5'>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-8 col-sm-10">
              <div className="content p-3 text-black-50 fs-6">
                {summary.map((txt,i)=>
                  <>
                    <p className={styles.txt} id={`line-${i}`}>{txt}</p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About;
