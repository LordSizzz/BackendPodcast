import { PrismaClient } from '@prisma/client';
import { Access, AccessSchema, PodcastReq, PodcastReqSchema, UserCreateReq, UserCreateReqSchema, UserLoginReq, UserLoginReqSchema, UserSchema } from '../Validators/ApiValidatedTypes';  

const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken')


const mySecret = process.env.ACCESS_KEY;


const prisma = new PrismaClient()

export const AddPodcast= async (req:PodcastReq, res:any) => { 
  
      if(!VerifyToken(req)){
      const podcast1=PodcastReqSchema.safeParse(req)
      if(podcast1.success){
      const createPodcastAndPost = await prisma.podcast.create({
        data:{
          text: podcast1.data.body.text.toLowerCase().trim(),
          nom:  podcast1.data.body.nom.toLowerCase().trim(),
          autheur: podcast1.data.body.autheur.toLowerCase(),
          userId: podcast1.data.body.userId,
          image:" ",
          sound:" ",
          duree:0
        },
      })
      console.log(createPodcastAndPost)
      if(createPodcastAndPost.id)
        res.status(200).json({"message":"Podcast Added With Success!",id:createPodcastAndPost.id})
      }else{
        console.log("failed")
        res.status(400).json({"message":"Failed to add Podcast!"})
      }
      }else{
        res.status(400).json({"message":"Failed to add Podcast!"})
      }
}

async function VerifyToken(req:Access){
  if (AccessSchema.safeParse(req).success) {
    const parts = req.headers['authorization'].split(' ');
    if (parts.length === 2 && parts[0] === 'Bearer') {
      const decodedClaims = jwt.verify(parts[1], mySecret);
      const user = await prisma.myUser.findUnique({
        where: {
            email: decodedClaims.email.toLowerCase().trim(),
        },
      })
      if (user?.email) {
        return true
      }
      else {
        return false;
      }
    }
    return false
  }
  return false
}
