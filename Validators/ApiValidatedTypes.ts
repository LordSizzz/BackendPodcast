import { z } from "zod"

export const UserCreateReqSchema=z.object({
    body:z.object({
    id:z.string(),
    nom:z.string(),
    email:z.string().email(),
    password:z.string(),
    birthday:z.string().dateTime()
  }
})
export type UserCreateReq=z.infer<typeof userCreateReq>

export const UserSchema=z.object({
  id:z.string(),
  nom:z.string(),
  email:z.string().email(),
  password:z.string(),
  birthday:z.string().dateTime(),
  podcasts:z.string().array(),
  comments:z.string().array(),
});
export type User=z.infer<typeof UserSchema>

export const CommentSchema=z.object({
  id:z.string(),
  content:z.string(),
  valid:z.boolean(),
  password:z.string(),
  birthday:z.string().dateTime(),
  podcasts:z.string().array(),
  comments:z.string().array(),
});
export type Comment=z.infer<typeof CommentSchema>

export const CommentSchema=z.object({
  id:z.string(),
  content:z.string(),
  valid:z.boolean(),
  password:z.string(),
  birthday:z.string().dateTime(),
  podcasts:z.string().array(),
  comments:z.string().array(),
});
export type Comment=z.infer<typeof CommentSchema>

export const CommentReqSchema=z.object({
  body:z.object({
    id:z.string(),
    content:z.string(),
    valid:z.boolean(),
    password:z.string(),
    birthday:z.string().dateTime(),
    podcasts:z.string().array(),
    comments:z.string().array(),
  }),
  headers:z.object({
    authorization:z.string()
  })
});
export type CommentReq=z.infer<typeof CommentReqSchema>

export const PodcastSchema=z.object({
  id:z.string(),
  content:z.string(),
  valid:z.boolean(),
  password:z.string(),
  birthday:z.string().dateTime(),
  podcasts:z.string().array(),
  comments:z.string().array(),
});
export type Podcast=z.infer<typeof PodcastSchema>

export const PodcastReqSchema=z.object({
  body:z.object({
    id:z.string(),
    content:z.string(),
    valid:z.boolean(),
    password:z.string(),
    birthday:z.string().dateTime(),
    podcasts:z.string().array(),
    comments:z.string().array(),
  }),
  headers:z.object({
    authorization:z.string()
  })
});
export type PodcastReq=z.infer<typeof PodcastReqSchema>


