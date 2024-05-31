import styles from "./Skills.module.scss";
import {skills} from "../../Utilies/conts";

const Skills = () => {
  return (
    <>
      <section id={`${styles.skills}`}>
        <div className={`${styles.scroll_contanier}`}>
          <div className={`${styles.scroll_inner}`}>
            {
              skills.map((skill, i) => (
                <>
                  <img src={skill} alt={`img-${i}`} id={`skill-${i}`} />
                </>
              ))
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default Skills;