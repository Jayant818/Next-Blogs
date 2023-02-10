// /api/contact
import { MongoClient } from "mongodb";

async function handler(req, res) {
	if (req.method === "POST") {
		const { email, name, message } = req.body;
		// Checks if the Data is Correct or not
		if (!email || !email.includes("@") || !name || !message) {
			return res.status(422).json({ message: "Invalid Data" });
		}

		const newMessage = {
			name,
			email,
			message,
		};
		console.log("New message", newMessage);
		// Store that in a Database
		const client = new MongoClient(
			"mongodb+srv://Jay:EAfA19fcLQ5dQj8m@cluster0.xujhpq1.mongodb.net/?retryWrites=true&w=majority"
		);
		try {
			// console.log(");
			// console.log("Successfully Implented it ");
			await client.connect();
		} catch (e) {
			console.log("Error is ", e.message);
		}
		// try{

		// }
		// await client.connect();

		// Database Name
		const dbName = "contact";
		console.log("Connected successfully to server");
		const db = client.db(dbName);
		const collection = db.collection("message");
		const insertResult = await collection.insertOne(newMessage);
		console.log(insertResult);
		client.close();

		return res.status(201).json({ message: "Data Saved Successfully" });
	}
}

export default handler;
