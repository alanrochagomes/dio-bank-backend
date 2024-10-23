import express from "express";

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  return res.status(200).json({ message: "DioBank API" });
});

server.post("/user", (req, res) => {
  const body = req.body;
  console.log(body);
  return res.status(201).json({ message: "Usuário criado" });
});

server.listen(5000, () => console.log("Server on"));
