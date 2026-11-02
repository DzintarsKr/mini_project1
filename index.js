import dotenv from "dotenv";
import express from "express";
import authRouter from "./routes/auth.js";
import postRouter from "./routes/posts.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use("/auth", authRouter);
app.use("/posts", postRouter);


app.listen(port, ()=>{
    console.log(`Server is running at http://localhost:${port}`);
});
