import classes from "./ContactForm.module.css";
import { useRef, useState, useEffect } from "react";
import Notification from "../ui/notification";

function ContactForm() {
	const [email, setEmail] = useState("");
	const [name, setName] = useState("");
	const [message, setMessage] = useState("");
	const [requestState, setRequestState] = useState(null); // "pending" || "error" || "success"
	const [errorMessage, setErrorMessage] = useState(null);

	const handleSubmit = (e) => {
		e.preventDefault();
		const data = {
			name: name,
			email: email,
			message: message,
		};

		console.log("Data", data);
		setRequestState("pending");

		fetch("/api/contact", {
			method: "POST",
			body: JSON.stringify(data),
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((res) => {
				if (res.ok) {
					return res.json();
				}
				return res.json().then((data) => {
					throw new Error(data.message || "Something went wrong");
				});
			})
			.then((data) => {
				setRequestState("success");
			})
			.catch((e) => {
				setRequestState("error");
				setErrorMessage(e.message || "Invalid Error");
			});
	};

	/*
	// NOTE IF we got any 500 Server error then it will not got in the Catch Block we have to handle it in the then Block Itself
			.then((res) => {
				if (res.ok) {
					// Checking for Any server Error
					return res.json();
				}
				// If there is some internal server Error then we have to throw an error.
				return res.json().then((data) => {
					throw new Error(data.message || "Something went wrong");
				});
			})
			.then((data) => {
				// |Success|
				notificationCtx.showNotification({
					title: "Success",
					message: "Email ID is Registered for the Newsletter",
					status: "success",
				});
			})
			.catch((err) => {
				// |ERROR|
				notificationCtx.showNotification({
					title: "Error",
					message:
						err.message || "Email ID is Failed to Register for the Newsletter",
					status: "error",
				});
			});
	*/

	let notification;

	if (requestState === "success") {
		notification = {
			title: "success",
			message: "Successfully sent the message",
			status: "success",
		};
	}
	if (requestState === "error") {
		notification = {
			title: "error",
			message: errorMessage,
			status: "error",
		};
	}
	if (requestState === "pending") {
		notification = {
			title: "pending",
			message: "Request is Pending Kindly keep on this page",
			status: "pending",
		};

		// setEmail("");
		// setName("");
		// setMessage("");
	}

	console.log("Request State", requestState);

	useEffect(() => {
		if (requestState === "success" || requestState === "error") {
			const timer = setTimeout(() => {
				setRequestState(null);
				// NOTE This return statement will only be called when we call the useEffect again.
				/*
					// Immediately calls the function and our setTimeout never runs
					return clearTimeout(timer)

					// will only be called only when we call the useEffect again.
					return ()=>{
						clearTimeout(timer);
					}
				*/
				// clearing Time out if we simuntaneously sends the another request
				return () => {
					clearTimeout(timer);
				};
			}, 2000);
		}
	}, [requestState]);
	return (
		<section className={classes.contact} onSubmit={handleSubmit}>
			<h1>How can I help you?</h1>
			<form className={classes.form}>
				<div className={classes.controls}>
					<div className={classes.control}>
						<label htmlFor="email">Email :</label>
						<input
							id="email"
							type="email"
							required
							onChange={(e) => {
								setEmail(e.target.value);
							}}
							value={email}
						/>
					</div>
					<div className={classes.control}>
						<label htmlFor="name">Name :</label>
						<input
							id="name"
							type="name"
							required
							onChange={(e) => {
								setName(e.target.value);
							}}
							value={name}
						/>
					</div>
					<div className={classes.control}>
						<label htmlFor="message">Message :</label>
						<textarea
							id="message"
							row="5"
							onChange={(e) => {
								setMessage(e.target.value);
							}}
							value={message}
						/>
					</div>

					<div className={classes.actions}>
						<button>Submit</button>
					</div>
				</div>
			</form>
			{notification && (
				<Notification
					title={notification.title}
					status={notification.status}
					message={notification.message}
				/>
			)}
		</section>
	);
}

export default ContactForm;
