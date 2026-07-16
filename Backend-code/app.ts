import express from "express";

const app = express();

app.use(express.json());
const users = [
  { id: 1, name: "Digvijay" },
  { id: 2, name: "Rahul" }
];

app.get("/", (req,res) => {
    res.send("server is running");
});
app.get("/api/users", (req, res) => {
  res.status(200).json({
    success: true,
    users: users
  });
});
app.listen(5000, () => {
        console.log("Server is running on  port 5000")
});