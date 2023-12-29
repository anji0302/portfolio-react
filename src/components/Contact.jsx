import "./Contact.scss";
import { EMAIL_ADDRESS, LINKED_IN } from "../constants/system.constants";

const CONTACTS = [
  {
    icon: "fa-brands fa-linkedin",
    text: "LinkedIn",
    value: "",
  },
];
function Contact() {
  return (
    <section className="Contact-section container">
      <div className="titles">
        <h4 className="color-primary">Contact</h4>
        <h2>Get in touch with me</h2>
      </div>

      <div className="contact-card-container">
        <div className="contact-card">
          <div className="icon">
            <i className="fa-regular fa-envelope"></i>
          </div>

          <div className="details">
            <div className="text">Email</div>
            <a href={`mailto:${EMAIL_ADDRESS}`}>{EMAIL_ADDRESS}</a>
          </div>
        </div>

        <div className="contact-card">
          <div className="icon">
            <i className="fa-brands fa-linkedin"></i>
          </div>
          <div className="details">
            <a href={LINKED_IN} target="_blank" rel="noreferrer">
              LinkedIn{" "}
              <i className="fa fa-external-link" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
