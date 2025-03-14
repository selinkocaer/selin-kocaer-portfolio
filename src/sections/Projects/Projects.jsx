import styles from "./ProjectsStyle.module.css";
import chatbot from "../../assets/chatbot.png";
import ProjectCard from "../../common/ProjectCard";
import userhub from "../../assets/userhub.png";
import task from "../../assets/task.png";
import note from "../../assets/note.png";
import register from "../../assets/register.png";

function Project() {
    return (
        <section id="projects" className={styles.container}>
            <h1 className="sectionTitle">Projects</h1>
            <div className={styles.projectContainer}>
                <ProjectCard src={chatbot} link="https://github.com/selinkocaer/chatbott-project" h3="Chatbot" p="Smart Chatbot" />
                <ProjectCard src={task} link="https://github.com/selinkocaer/task-management-system" h3="Task" p="Task Management System" />
                <ProjectCard src={userhub} link="https://github.com/selinkocaer/UserHub" h3="UserHub" p="A Simple User Action System" />
                <ProjectCard src={note} link="https://github.com/selinkocaer/NotYonetimi" h3="Notes" p="Note Management System" />
                <ProjectCard src={register} link="https://github.com/selinkocaer/user-registration-system" h3="User Registration" p="User Registration System" />
            </div>
        </section>
    );
}

export default Project;
