import "./contact.css";
import Phone from "../../assets/img/phone.png";
import Email from "../../assets/img/email.png";
import Address from "../../assets/img/address.png";
import { contactDetails, serviceID } from "../../assets/data/data";
import { useContext, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ThemeContext } from "../../context";
import { GitHub, Home, LinkedIn, MailOutline, PhoneInTalk } from "@mui/icons-material";

const Contact = () => {
	const formRef = useRef();
	const [done, setDone] = useState(false);

	const theme = useContext(ThemeContext);
	const darkMode = theme.state.darkMode;

	const handleSubmit = (e) => {
		e.preventDefault();
		// send details to
		emailjs
			.sendForm(
				serviceID.id,
				serviceID.templateId,
				formRef.current,
				serviceID.userId
			)
			.then(
				(result) => {
					console.log(result.text);
					setDone(true);
				},
				(error) => {
					console.log(error.text);
				}
			);
	};

	return (
		<div className="contact">
			<div className="contact-background"> </div>
			<div className="contact-wrapper">
				<div className="contact-left">
					<h1 className="contact-title">Let's have a chat</h1>
					<div className="contact-info">
						<div className="contact-info-item">
							<PhoneInTalk className="contact-icon" />
							{contactDetails.phone}
						</div>
						<div className="contact-info-item">
							<MailOutline className="contact-icon" />
							{contactDetails.email}
						</div>
						<div className="contact-info-item">
							<Home className="contact-icon" />
							{contactDetails.address}
						</div>
						<div className="contact-info-item">
							<LinkedIn className="contact-icon" />
							<a className="link" href={contactDetails.LinkedIn}>
								{contactDetails.linkedIn}
							</a>
						</div>
						<div className="contact-info-item">
							<GitHub className="contact-icon" />
							<a className="link" href={contactDetails.gitHub}>
								{contactDetails.gitHub}
							</a>
						</div>
					</div>
				</div>
				<div className="contact-right">
					<p className="contact-desc">
						<b>Contact me below</b> if you would like to chat
						further about any opportunities.
					</p>
					<form ref={formRef} onSubmit={handleSubmit}>
						<input
							style={{ backgroundColor: darkMode && "#333" }}
							type="text"
							placeholder="Name"
							name="userName"
						/>
						<input
							style={{ backgroundColor: darkMode && "#333" }}
							type="text"
							placeholder="Subject"
							name="userSubject"
						/>
						<input
							style={{ backgroundColor: darkMode && "#333" }}
							type="email"
							placeholder="Email"
							name="userEmail"
						/>
						<textarea
							style={{ backgroundColor: darkMode && "#333" }}
							name="message"
							id=""
							cols=""
							rows="5"
							placeholder="Message"
						></textarea>
						<button>Submit</button>
						{done && "Thank you, form submitted successfully."}
					</form>
				</div>
			</div>
		</div>
	);
};

export default Contact;
