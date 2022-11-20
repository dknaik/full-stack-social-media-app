import express from "express"
import mysql from "mysql"
import userRoutes from "./routes/users.js"
import authRoutes from "./routes/auth.js"
import cors from "cors"
import cookieParser  from "cookie-parser"

// import commentRoutes from "./routes/comments.js"
// import likeRoutes from "./routes/likes.js"
// import postRoutes from "./routes/posts.js";

const  app=express()
app.use(express.json())

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password:"083862209678900",
  database:"test"
});

//middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser)
//allows us to send any json data from client
//How to reach backend server


app.use("/api/v1/auth", authRoutes);
// app.use("/api/v1/users",userRoutes);
// app.use("/api/v1/posts",postRoutes);
// app.use("/api/v1/comments",commentRoutes)
// app.use("/api/v1/likes", likeRoutes);





app.listen(8800,()=>{


    console.log("connected to backendd")
})

