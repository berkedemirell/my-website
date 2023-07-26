import { db } from "../db.js";

export const addContact = (req,res) => {
    const q = "INSERT INTO contacts(`name`, `email`, `message`) VALUES (?)";
    const values = [
        req.body.name,
        req.body.email,
        req.body.message,
    ]

    db.query(q, [values], (err,data) => {
        if(err) return res.status(500).json(err);
        return res.json("Message has been sent.")
    })
}

export const getContact = (req,res) => {
    const q = "SELECT * FROM contacts";
    db.query(q, (err,data) => {
        if(err) return res.send(err);
        return res.status(200).json(data)
    })
}
