import { PrismaClient } from '@prisma/client';
import { ProductAddReq, AccessReq } from '../Validators/ApiValidatedTypes';  

const mySecret = process.env.ACCESS_KEY;

const prisma = new PrismaClient()

export const AddProduct= async (req:ProductAddReq, res:any) => { 
    if(VerifyToken(req)){
      console.log("Access Granted!")
      if(ProductAddReq){
      const createProductAndPost = await prisma.product.upsert({
        where: {
          id: req.body.id,
        },
        update:{
          price: ((typeof req.body.price==="string")?parseFloat(req.body.price):req.body.price),
          name: req.body.name,
        },
        create:{
          id: req.body.id,
          price: ((typeof req.body.price==="string")?parseFloat(req.body.price):req.body.price),
          name: req.body.name,
        },
      })
      console.log(createProductAndPost)
      res.status(200).json({"message":"Product Added With Success!"})
      }else{
        console.log("failed")
        res.status(400).json({"message":"Failed to add product!"})
      }
    }else{
              console.log("Wrong Access Key!")
              res.status(403).json({"message":"Access Denied!"})
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
  const authHeader = req.headers['authorization'];
  if (authHeader) {
    const parts = authHeader.split(' ');
    if (parts.length === 2 && parts[0] === 'Bearer') {
      return (parts[1]==mySecret);
    }
    return false
  }
  return false
}