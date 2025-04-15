import { WebSocketServer } from "ws";
import { prisma } from "@workspace/db";

const wss = new WebSocketServer({
  port: 3001,
});

wss.on("connection", async (socket) => {
  const user =  await prisma.user.create ({
        data: {
            username: Math.random().toString(),
            password: Math.random().toString()
        }
    })
  socket.send(`Hello from port 3001 ws with: ${JSON.stringify(user)}`);
});
