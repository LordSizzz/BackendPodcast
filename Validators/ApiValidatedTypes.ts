import { z } from "zod"

export const ProductAddReqSchema=z.object({
  body:z.object({
    id:z.string(),
    name:z.string(),
    price:z.string().or(z.number().positive()),
    description:z.string().optional()
  }),
  headers:z.object({
  authorization:z.string()
  })
})
export type ProductAddReq=z.infer<typeof ProductAddReqSchema>

export const AccessReqSchema=z.object({
  headers:z.object({
  authorization:z.string()
  })
});
export type AccessReq=z.infer<typeof AccessReqSchema>
