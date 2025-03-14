import styles from "./SkillsStyles.module.css";
import checkMarkIcon from "../../assets/checkmark-light.svg";
import SkillList from "../../common/SkillList";

function Skills() {
    return (
        <section id="skills" className={styles.container}>
            <h1 className="sectionTitle">Skills</h1>
            <div className={styles.SkillList}>
                <SkillList src={checkMarkIcon} skill="HTML" />
                <SkillList src={checkMarkIcon} skill="CSS" />
                <SkillList src={checkMarkIcon} skill="Javascript" />
                <SkillList src={checkMarkIcon} skill="TypeScript" />
                <SkillList src={checkMarkIcon} skill="Node" />
            </div>
            <hr />
            <div className={styles.SkillList}>
                <SkillList src={checkMarkIcon} skill="React" />
                <SkillList src={checkMarkIcon} skill="Tailwind CSS" />
                <SkillList src={checkMarkIcon} skill="AntDesign" />
                <SkillList src={checkMarkIcon} skill="DevExtreme" />
                <SkillList src={checkMarkIcon} skill="Nest" />
            </div>
            <hr />
            <div className={styles.SkillList}>
                <SkillList src={checkMarkIcon} skill="Git" />
                <SkillList src={checkMarkIcon} skill="Bootstrap" />
                <SkillList src={checkMarkIcon} skill="JQuery" />
                <SkillList src={checkMarkIcon} skill="PostgreSQL" />
            </div>
            <hr />
            <div className={styles.SkillList}>
                <SkillList src={checkMarkIcon} skill="Pyhton" />
                <SkillList src={checkMarkIcon} skill="Flask" />
                <SkillList src={checkMarkIcon} skill="Django" />
                <SkillList src={checkMarkIcon} skill="Jinja" />
            </div>
        </section>
    );
}

export default Skills;
