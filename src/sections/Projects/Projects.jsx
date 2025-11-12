import styles from "./ProjectsStyle.module.css";
import chatbot from "../../assets/chatbot.png";
import ProjectCard from "../../common/ProjectCard";
import userhub from "../../assets/userhub.png";
import task from "../../assets/task.png";
import note from "../../assets/note.png";
import register from "../../assets/register.png";
import rustica from "../../assets/rustica.png";

function Project() {
    return (
        <section id="projects" className={styles.container}>
            <h1 className="sectionTitle">Projects</h1>
            <div className={styles.projectContainer}>
                <ProjectCard src={rustica} link="https://github.com/selinkocaer/rustica-labyrinth" />
                <ProjectCard src={chatbot} link="https://github.com/selinkocaer/chatbott-project" />
                <ProjectCard src={task} link="https://github.com/selinkocaer/task-management-system" />
                <ProjectCard src={userhub} link="https://github.com/selinkocaer/UserHub" />
                <ProjectCard src={note} link="https://github.com/selinkocaer/NotYonetimi" />
                <ProjectCard src={register} link="https://github.com/selinkocaer/user-registration-system" />
            </div>
        </section>
    );
}

export default Project;
