import styles from "./SingleProject.module.scss";
import { useParams } from 'react-router-dom';
import { projectsOfMyWork, projectsOfFrontEnd } from "../../Utilies/MyWork";



const SingleProject = () => {


  const params = useParams();
  const projectId = params.id

   // Combine both project lists for lookup for desired project
   const allProjects = [...projectsOfMyWork, ...projectsOfFrontEnd];
  
   // Find the project based on the ID from the URL
   const project = allProjects.find(proj => proj.id === projectId);
 
   if (!project) {
     return <div className="fw-bolder text-center fs-1 my-5 text-black-50">Project not found</div>;
   }

  return (
    <>
      <section id={styles.singleProject}>
      <div className="container">
        <div className="mainHeading text-center my-5">
          <h2 className="fw-bolder">{project.title}</h2>
        </div>
        <div className="row">
          <div className="col-12">
            <div className={styles.projectDetails}>
              <img src={project.thumnail} alt="project-img" className="w-100 mb-4 rounded-3 shadow-lg" />
              <p className={`${styles.txt} text-black-50 fs-5 my-3`}><span className={`${styles.text_dark} fw-bolder`}>Bulid With: </span>{project.toolUsed}</p>
              <div className={`${styles.projInfo} d-flex justify-content-start align-items-center gap-3 flex-lg-row flex-md-row flex-sm-column flex-column my-4`}>
                <a href={project.gitRepo} className={`${styles.repo} text-decoration-none px-3 p-2 rounded-3 me-2`}>Github Repo</a>
                <a href={project.liveDemo} className={`${styles.liveVer} text-decoration-none px-3 p-2 rounded-3 me-2`}>Live Demo</a>
                <a href={project.imgs[0]} className={`${styles.img} text-decoration-none px-3 p-2 rounded-3 me-2`}>Project Full Image</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
};

export default SingleProject;