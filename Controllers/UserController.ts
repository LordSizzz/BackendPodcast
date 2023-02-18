import { PrismaClient } from '@prisma/client';
import { UserCreateReq, UserCreateReqSchema } from '../Validators/ApiValidatedTypes';  

const mySecret = process.env.ACCESS_KEY;

const prisma = new PrismaClient()

export const AddUser= async (req:UserCreateReq, res:any) => { 
    
      console.log("Access Granted!")
      if(UserCreateReqSchema.safeParse(req).success){
      const createProductAndPost = await prisma.user.create({
        data:{
          email: req.body.email,
          password: req.body.password,
          nom: req.body.nom,
        },
      })
      console.log(createProductAndPost)
      res.status(200).json({"message":"Product Added With Success!"})
      }else{
        console.log("failed")
        res.status(400).json({"message":"Failed to add product!"})
      }
    
}

export const GetProducts= async (req:AccessReq, res:any) => { 
    if(VerifyToken(req)){
       console.log("Access Granted!")
       const allProducts =await prisma.product.findMany();
       res.status(200).json(allProducts);
    }else{
       console.log("Wrong Access Key!")
       res.status(403).json({"message":"Access Denied!"})
     }
}

function VerifyToken(req:AccessReq):boolean{
  if (AccessReqSchema.safeParse(req).success) {
    const parts = req.headers['authorization'].split(' ');
    if (parts.length === 2 && parts[0] === 'Bearer') {
      return (parts[1]==mySecret);
    }
    return false
  }
  return false
}

const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken')
const Login = async (req, res) => {
    const { errors, isValid } = ValidateLogin(req.body);
    try {
        if (!isValid) {
            res.status(404).json(errors);
        } else {
            Clients.findOne({ email: req.body.email.toLowerCase().trim() })
                .then(user => {
                    if (!user) {
                        errors.email = "Incorrect email";
                        errors.password = "";
                        res.status(404).json(errors)
                    } else {
                        bcrypt.compare(req.body.password, user.password)
                            .then(isMatch => {
                                if (!isMatch) {
                                    errors.password = "Incorrect password";
                                    res.status(404).json(errors)
                                } else {
                                    const token = jwt.sign({
                                        id: user._id,
                                        email: user.email,
                                        name: user.name,
                                        role: user.role,
                                        phone: user.phone
                                    }, process.env.PRIVATE_KEY, {}, { algorithm: 'RS256' });
                                    res.status(200).json({
                                        message: "Login success",
                                        token: "Bearer " + token
                                    });
                                }
                            })
                    }
                })
        }
    } catch (error) {
        res.status(404).json(error.message)
    }
}

const Register = async (req, res) => {
    const { errors, isValid } = ValidateRegister(req.body);
    try {
        if (!isValid) {
            res.status(404).json(errors);
        } else {
            Clients.findOne({ email: req.body.email.toLowerCase().trim() })
                .then(async(user) => {
                    if (user) {
                        errors.email = "Email already exists";
                        errors.password = "";
                        errors.conf_password = "";
                        res.status(404).json(errors)
                    } else {
                        const hash =bcrypt.hashSync(req.body.password,10);
                        req.body.password=hash;
                        req.body.role="CLIENT"
                        delete req.body.conf_password;
                        await Clients.create(req.body).then(re=>{
                        const token = jwt.sign({
                            id: re._id,
                            email: re.email.toLowerCase(),
                            name: re.name,
                            role: re.role,
                            phone: re.phone
                        }, process.env.PRIVATE_KEY, {}, { algorithm: 'RS256' });
                        res.status(200).json({
                            message: "Register success",
                            token: "Bearer " + token
                        });})
                    }
                })
        }

    } catch (error) {
        res.status(404).json(error.message)
    }
}


module.exports = {
    Login,
    Register,
}