import express, { Request, Response } from "express";

const server = express();

server.get("/", (req: Request, res: Response) => {
  return res.status(200).json({ message: "DioBank API" });
});

server.post("/user", (req: Request, res: Response) => {
  const body = req.body;
});

server.listen(5000, () => console.log("Server on"));
