import { PrismaClient } from '@prisma/client';
import { Access, AccessSchema, CommentReq, CommentReqSchema} from '../Validators/ApiValidatedTypes';  
import {Filter} from 'profanity-check'
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken')



const prisma = new PrismaClient()

export const AddComment= async (req:CommentReq, res:any) => { 
  
      if(await VerifyToken(req)!=-1){
      const comment1=CommentReqSchema.safeParse(req)
      if(comment1.success){
        const valid=await ValidateComment(comment1.data.body.content.trim());
      const createCommentAndPost = await prisma.comment.create({
        data:{
          content: comment1.data.body.content.trim(),
          nom:  comment1.data.body.nom.toLowerCase().trim(),
          userId: comment1.data.body.userId,
          podcastId: comment1.data.body.podcastId,
          valid: valid,
        },
      })
      console.log(createCommentAndPost)
      if(createCommentAndPost.id)
        res.status(200).json({"message":"Comment Added With Success!",id:createCommentAndPost.id})
      }else{
        console.log("failed")
        res.status(400).json({"message":"Failed to add Comment!"})
      }
      }else{
        res.status(400).json({"message":"Failed to add Comment!"})
      }
}

export const GetAllComment= async (req:any, res:any) => {
  if(await VerifyToken(req)!=-1){
  const comment=await prisma.comment.findMany()
  res.status(200).json({comment:comment})
}else{
  res.status(400).json({"message":"Failed to get Comment!"})
}
}


export const GetCommentById= async (req:any, res:any) => {
  if(await VerifyToken(req)!=-1){
  const comment=await prisma.comment.findUnique({
    where:{
      id:parseInt(req.params.id)
    }
  })
  res.status(200).json({comment:comment})
}else{
  res.status(400).json({"message":"Failed to get Comment!"})
}
}

export const GetCommentForUser= async (req:any, res:any) => {
  const id=await VerifyToken(req);
  if(id!=-1){
  const comment=await prisma.comment.findMany({
    where:{
      userId:id
    }
  })
  res.status(200).json({comment:comment})
}else{
  res.status(400).json({"message":"Failed to get Comment!"})
}
}
export const GetCommentForPodcast= async (req:any, res:any) => {
  if(await VerifyToken(req)!=-1){
  const comment=await prisma.comment.findMany({
    where:{
      podcastId:parseInt(req.params.id)
    }
  })
  res.status(200).json({comment:comment})
}else{
  res.status(400).json({"message":"Failed to get Comment!"})
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
async function ValidateComment(comment:string){
 const filter = new Filter();
const result = filter.isProfane(comment);
  return (!result)
}