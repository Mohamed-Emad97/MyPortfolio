import styles from "./Projects.module.scss";
import { useLocation , Link } from "react-router-dom";
import {projectsOfMyWork , projectsOfFrontEnd} from "../../Utilies/MyWork";


const Projects = () => {

  const location = useLocation();
  const id = location.state.id;
  var projects;
  
  if (id == "Frontend") {
    projects = projectsOfFrontEnd;
    console.log(projects);
  } else if (id == "Work"){
    projects = projectsOfMyWork;
    console.log(projects);
  }

  return (
    <>
      <section id={`${styles.projects}`}>
        <div className="container">
          <div className="mainHeading text-center my-5">
            <h2 className="fw-bolder">Portfolio</h2>
          </div>
          <div className="row">
            {projects.map((project) => <>
              <div className="col-md-6 col-lg-4 col-xl-3 mb-4">
                <div className={`${styles.project} border-0`}>
                  <div className={`${styles.img}`}>
                    <img src={project.thumnail} alt="project-img" className="w-100"/>
                  </div>
                  <div className={`${styles.caption} text-center my-3`}>
                    <h6>    
                      <Link className={`${styles.link} text-decoration-none`} to={{ pathname: `/portfilio/${project.id}`, state: { project } }}>
                        {project.title}
                      </Link>
                    </h6>
                  </div>
                </div>
              </div>
            </>)}
          </div>
        </div>
      </section>
    </>
  )
};

export default Projects;
