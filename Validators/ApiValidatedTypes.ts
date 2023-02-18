import { z } from "zod"
const UserCreateSchema =z.object({

      email:z.string().email(),
      nom:z.string(),
      password:z.string(),
      passwordV:z.string()

});
export const UserCreateReqSchema =z.object({
    body:UserCreateSchema
});
export type UserCreateReq=z.infer<typeof UserCreateReqSchema>;



export const UserSchema=z.object({
  id:z.string().optional(),
  nom:z.string(),
  email:z.string().email(),
  password:z.string(),
});
export type User=z.infer<typeof UserSchema>;


export const UserLoginSchema=z.object({
  email:z.string().email(),
  password:z.string(),
});

export const UserLoginReqSchema=z.object({
  body:UserLoginSchema,
});

export type UserLoginReq=z.infer<typeof UserLoginReqSchema>;


export type UserLogin=z.infer<typeof UserLoginSchema>;
export const CommentSchema=z.object({
  id:z.string(),
  content:z.string(),
  valid:z.boolean(),
  podcastId:z.string(),
  nom:z.string(),
  userId:z.string(),
});
export type Comment=z.infer<typeof CommentSchema>

export const CommentReqSchema=z.object({
  body:z.object({
    id:z.string(),
    content:z.string(),
    nom:z.string(),
    podcastId:z.string(),
  }),
  headers:z.object({
    authorization:z.string()
  })
});
export type CommentReq=z.infer<typeof CommentReqSchema>

export const PodcastSchema=z.object({
  id:z.string(),
  titre:z.string(),
  image:z.string(),
  sound:z.string(),
  userId:z.string(),
  autheur:z.string(),
});
export type Podcast=z.infer<typeof PodcastSchema>

export const PodcastReqSchema=z.object({
  body:z.object({
    id:z.string(),
    titre:z.string(),
    text:z.string(),
    autheur:z.string(),
  }),
  headers:z.object({
    authorization:z.string()
  })
});
export type PodcastReq=z.infer<typeof PodcastReqSchema>

export const AccessSchema=z.object({
  headers:z.object({
    authorization:z.string()
  })
});
export type Access=z.infer<typeof AccessSchema>
