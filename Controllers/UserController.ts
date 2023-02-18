import { PrismaClient } from '@prisma/client';
import { Access, AccessSchema, UserCreateReq, UserCreateReqSchema, UserLoginReq, UserLoginReqSchema } from '../Validators/ApiValidatedTypes';  

const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken')
const mySecret = process.env.ACCESS_KEY;

const prisma = new PrismaClient()

export const AddUser= async (req:UserCreateReq, res:any) => { 

      if(UserCreateReqSchema.safeParse(req).success && req.body.password==req.body.passwordV){
        const hash =bcrypt.hashSync(req.body.password.trim(),10);
        req.body.password=hash;
      const createUserAndPost = await prisma.myuser.create({
        data:{
          email: req.body.email.toLowerCase().trim(),
          nom:  req.body.nom.toLowerCase().trim(),
          password: req.body.password,
        },
      })
      console.log(createUserAndPost)
      if(createUserAndPost.id)
        res.status(200).json({"message":"User Added With Success!",token:"Bearer " + jwt.sign({id:createUserAndPost.id,nom:createUserAndPost.nom,email:createUserAndPost.email},mySecret)})
      }else{
        console.log("failed")
        res.status(400).json({"message":"Failed to add User!"})
      }
    
}

export const Login= async (req:UserLoginReq, res:any) => { 
    if(UserLoginReqSchema.safeParse(req).success){
    const user = await prisma.myuser.findUnique({
        where: {
            email: req.body.email.toLowerCase().trim(),
        },
      })
        if(user){
            const isMatch = bcrypt.compareSync(req.body.password, user.password);
            if(isMatch){
                const token = jwt.sign({id:user.id,nom:user.nom,email:user.email},mySecret);
                res.status(200).json({"message":"Login success",token:"Bearer " + token})
            }else{
                res.status(400).json({"password":"Incorrect password"})
            }
        }else{
            res.status(400).json({"email":"Incorrect email"})
        }
    }else{
        res.status(400).json({"message":"Failed to login"})
    }
}

function VerifyToken(req:Access):boolean{
  if (AccessSchema.safeParse(req).success) {
    const parts = req.headers['authorization'].split(' ');
    if (parts.length === 2 && parts[0] === 'Bearer') {
      return (parts[1]==mySecret);
    }
    return false
  }
  return false
}
