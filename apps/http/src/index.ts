import express from "express";
import { prisma } from "@workspace/db";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.json("Your http server is running fine!👍🏻🚀");
});

app.post("/signup", async (req, res) => {
  const { username, password } = req.body;
  const user = await prisma.user.create({
    data: {
      username: username,
      password: password,
    },
  });
  res.status(200).json({
    message: "Signup Successful",
    id: user?.id,
  });
});

app.listen(5003, () => {
  console.log("App is listening on Port 5003");
});
