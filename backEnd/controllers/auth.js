import { db } from "../connect.js";
import bcrypt from "bcryptjs"

export const register = (req, res) => {

   //check ifwe have same user in db or not
   const q="SELECT * FROM users WHERE username=?"

   db.query(q,[req.body.username],(err,data)=>{
    if(err) return res.status(500).send(err)
    if(data.length) return res.status(409).json("User already exists")
    //CREATE A NEW USER
    //HASH the password
    const salt=bcrypt.genSaltSync(10);
    const hashedPassword=bcrypt.hashSync(req.body.password,salt);
   const q="INSERT INTO users (`username`,`email`,`password`,`name`) VALUE (?)"
   const values = [
     req.body.username,
     req.body.email,
     hashedPassword,
     req.body.name,
   ];
   db.query(q,[values],(err,data)=>{
          if (err) return res.status(500).send(err);
          return res.status(200).json(" User has been created")


   })
   })

//    const h/as

};
export const login = (req, res) => {
   const q="SELECT * FROM users WHERE username = ?"
   db.query(q,[req.body.username],(err,data)=>{
      if(err)return res.status(500).json(err);
      if(data.length===0)return res.status(404).json("User not found");
      const checkPasword=bcrypt.compareSync(req.body.password,data[0].password);
      if(!checkPasword)return res.status(400).json("wrong password or username")
      
   })
};
// export const logour = (req, res) => {};

