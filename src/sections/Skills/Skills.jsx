import styles from "./SkillsStyles.module.css";
import checkMarkIcon from "../../assets/checkmark-light.svg";
import SkillList from "../../common/SkillList";

function Skills() {
    return (
        <section id="skills" className={styles.container}>
            <h1 className="sectionTitle">Skills</h1>

            {/* Frontend */}
            <h2 className={styles.subtitle}>Frontend</h2>
            <div className={styles.SkillList}>
                <SkillList src={checkMarkIcon} skill="HTML5" />
                <SkillList src={checkMarkIcon} skill="CSS3" />
                <SkillList src={checkMarkIcon} skill="JavaScript (ES6+)" />
                <SkillList src={checkMarkIcon} skill="TypeScript" />
                <SkillList src={checkMarkIcon} skill="React" />
            </div>
            <div className={styles.SkillList}>
                <SkillList src={checkMarkIcon} skill="Tailwind CSS" />
                <SkillList src={checkMarkIcon} skill="Ant Design" />
                <SkillList src={checkMarkIcon} skill="DevExtreme" />
                <SkillList src={checkMarkIcon} skill="Bootstrap" />
                <SkillList src={checkMarkIcon} skill="jQuery" />
            </div>
            <hr />

            {/* Backend */}
            <h2 className={styles.subtitle}>Backend</h2>
            <div className={styles.SkillList}>
                <SkillList src={checkMarkIcon} skill="Node.js" />
                <SkillList src={checkMarkIcon} skill="NestJS" />
                <SkillList src={checkMarkIcon} skill="Python" />
                <SkillList src={checkMarkIcon} skill="Flask" />
                <SkillList src={checkMarkIcon} skill="Django" />
            </div>
            <div className={styles.SkillList}>
                <SkillList src={checkMarkIcon} skill="PostgreSQL" />
                <SkillList src={checkMarkIcon} skill="REST API" />
                <SkillList src={checkMarkIcon} skill="SOAP Web Services" />
                <SkillList src={checkMarkIcon} skill="Jinja" />
            </div>
            <hr />

            {/* Tools & Workflow */}
            <h2 className={styles.subtitle}>Tools &amp; Workflow</h2>
            <div className={styles.SkillList}>
                <SkillList src={checkMarkIcon} skill="Git" />
                <SkillList src={checkMarkIcon} skill="Vite" />
                <SkillList src={checkMarkIcon} skill="Postman" />
                <SkillList src={checkMarkIcon} skill="Docker (basic)" />
                <SkillList src={checkMarkIcon} skill="Linux" />
            </div>
            <hr />

            {/* Other (Domain) */}
            <h2 className={styles.subtitle}>Other</h2>
            <div className={styles.SkillList}>
                <SkillList src={checkMarkIcon} skill="UBL 2.1 Integration" />
                <SkillList src={checkMarkIcon} skill="e-Invoice / e-Archive Systems" />
                <SkillList src={checkMarkIcon} skill="ERP Modules" />
                <SkillList src={checkMarkIcon} skill="Payment System Integrations" />
            </div>
            <hr />

            {/* Languages */}
            <h2 className={styles.subtitle}>Languages</h2>
            <div className={styles.SkillList}>
                <SkillList src={checkMarkIcon} skill="Turkish (Native)" />
                <SkillList src={checkMarkIcon} skill="English (Intermediate – B1)" />
            </div>
            <hr />

            {/* Soft Skills */}
            <h2 className={styles.subtitle}>Soft Skills</h2>
            <div className={styles.SkillList}>
                <SkillList src={checkMarkIcon} skill="Problem Solving" />
                <SkillList src={checkMarkIcon} skill="Team Collaboration" />
                <SkillList src={checkMarkIcon} skill="Communication" />
                <SkillList src={checkMarkIcon} skill="Time Management" />
                <SkillList src={checkMarkIcon} skill="Project Management" />
            </div>
            <div className={styles.SkillList}>
                <SkillList src={checkMarkIcon} skill="Attention to Detail" />
                <SkillList src={checkMarkIcon} skill="Adaptability" />
                <SkillList src={checkMarkIcon} skill="Continuous Learning" />
                <SkillList src={checkMarkIcon} skill="Critical Thinking" />
                <SkillList src={checkMarkIcon} skill="Creativity" />
            </div>
        </section>
    );
}

export default Skills;
