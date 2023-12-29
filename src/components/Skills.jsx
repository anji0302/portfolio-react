import "./Skills.scss";
import { SKILLS } from "../constants/skills.constant";

function Skills() {
  return (
    <section className="Skills-section container">
      <div className="titles">
        <h4 className="color-primary">Skills</h4>
        <h2>I Develop Skills Regularly to Keep Me Update</h2>
      </div>

      <div className="card-container">
        {SKILLS.map(({ icon, text }) => {
          return (
            <div className="card" key={text}>
              {icon && (
                <div className="icon">
                  <i className={icon}></i>
                </div>
              )}
              <div className="text">{text}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Skills;
