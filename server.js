const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Replace with your MongoDB Atlas connection string
mongoose.connect(
  "mongodb+srv://preamnishanth_69:preamnishanth%4069@portfolio.k0xmkvp.mongodb.net/?retryWrites=true&w=majority&appName=portfolio"
);

// Example schema for contact form
const ContactSchema = new mongoose.Schema({
  name: String,
  email: String,
  subject: String,
  message: String,
});
const Contact = mongoose.model("Contact", ContactSchema);

// API endpoint to receive contact form data
app.post("/api/contact", async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.status(201).json({ message: "Message saved!" });
  } catch (err) {
    res.status(500).json({ error: "Failed to save message." });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));

// http://localhost:5000/api/contact
