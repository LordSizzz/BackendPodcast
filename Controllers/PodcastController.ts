import { PrismaClient } from '@prisma/client';
import axios from 'axios';
import { Access, AccessSchema, PodcastReq, PodcastReqSchema} from '../Validators/ApiValidatedTypes';  

const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken')

let fs = require('fs');

const prisma = new PrismaClient()
async function base64_encode(file:any) {
  let bitmap = fs.readFileSync(file);
  return new Buffer(bitmap).toString('base64');
}
export const AddPodcast= async (req:PodcastReq, res:any) => { 
  
      if(await VerifyToken(req)!=-1){
      const podcast1=PodcastReqSchema.safeParse(req)
      if(podcast1.success){
        let image="";
        await axios.post('https://api.hypnogram.xyz/generate', {
          "prompt": podcast1.data.body.nom,
        })
        .then(async function (response:any) {
          await axios.get("https://s3.amazonaws.com/hypnogram-images/"+response.image_id+".jpg").then(async function (response:any) {
            image=await base64_encode(response)
          })
        })
        .catch(function (error) {
          console.log(error);
        });
        
      const createPodcastAndPost = await prisma.podcast.create({
        data:{
          text: podcast1.data.body.text.trim(),
          nom:  podcast1.data.body.nom.trim(),
          autheur: podcast1.data.body.autheur,
          userId: podcast1.data.body.userId,
          image:image,
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

export const GetAllPodcast= async (req:any, res:any) => {
  if(await VerifyToken(req)!=-1){
  const podcast=await prisma.podcast.findMany()
  res.status(200).json(podcast)
}else{
  res.status(400).json({"message":"Failed to get Podcast!"})
}
}

export const GetPodcastById= async (req:any, res:any) => {
  const id = await VerifyToken(req);
  if(id!=-1){
  const podcast=await prisma.podcast.findUnique({
    where:{
      id:id
    }
  })
  res.status(200).json(podcast)
}else{
  res.status(400).json({"message":"Failed to get Podcast!"})
}
}

export const GetPodcastForUser= async (req:any, res:any) => {
  if(await VerifyToken(req)!=-1){
  const podcast=await prisma.podcast.findMany({
    where:{
      userId:parseInt(req.params.id)
    }
  })
  res.status(200).json(podcast)
}else{
  res.status(400).json({"message":"Failed to get Podcast!"})
}
}

async function VerifyToken(req:Access){
  if (AccessSchema.safeParse(req).success) {
    const parts = req.headers['authorization'].split(' ');
    if (parts.length === 2 && parts[0] === 'Bearer') {
      const decodedClaims = jwt.verify(parts[1], process.env.ACCESS_KEY);
      const user = await prisma.myUser.findUnique({
        where: {
            email: decodedClaims.email.toLowerCase().trim(),
        },
      })
      if (user?.email) {
        return user.id
      }
      else {
        return -1;
      }
    }
    return -1
  }
  return -1
}
