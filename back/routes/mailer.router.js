// routes/subscribe.routes.js
import express from "express";
import User from "../models/usermodel.js";
import nodemailer from "nodemailer";
import Model from "../models/modeldata.js"

const router = express.Router();

// Subscribe a user by ID
router.post("/subscribe/:id", async (req, res) => {
  const userId = req.params.id;

  try {
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    if (!user.subscribed) {
      user.subscribed = true;
      await user.save();
      res.status(200).json({ message: "Subscription successful" });
    } else {
      res.status(200).json({ message: "Already subscribed" });
    }
  } catch (error) {
    console.error("Subscription failed:", error);
    res.status(500).json({ message: "Failed to subscribe" });
  }
});

// Email transporter setup
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "vbhargav0310@gmail.com",
    pass: "elsvmuakmltbikfn", // App password
  },
});

router.post("/send-email/:id", async (req, res) => {
  const userId = req.params.id;

  try {
    const user = await User.findById(userId);
    if (!user || user.subscribed !== true) {
      return res.status(401).json({ message: "Not authorized to receive email" });
    }

    // Get the latest AI model data (adjust sort/filter as needed)
    const latestModel = await Model.findOne().sort({ createdAt: -1 });

    if (!latestModel) {
      return res.status(404).json({ message: "No model data available" });
    }

    const to = user.email;

    // First email with dynamic model data
    const firstMail = await transporter.sendMail({
      from: '"Vaibhav Bhargav" <vbhargav0310@gmail.com>',
      to,
      subject: latestModel.common_title,
      text: latestModel.common_description,
    });

    // Second email (digest/follow-up)
    const secondMail = await transporter.sendMail({
      from: '"Vaibhav Bhargav" <vbhargav0310@gmail.com>',
      to,
      subject: "Welcom to AI Digest!",
      text: "Explore cutting-edge AI tools, models, and papers every week. Stay informed!",
    });

    return res.status(200).json({
      message: "Both emails sent successfully",
      first: firstMail,
      second: secondMail,
    });
  } catch (err) {
    console.error("Error sending emails:", err);
    res.status(500).json({ message: "Failed to send emails", error: err });
  }
});


export default router;
