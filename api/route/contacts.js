import express from "express";
import { addContact, getContact } from "../controller/contact.js";

const router = express.Router();

router.post("/", addContact);
router.get("/", getContact)

export default router;