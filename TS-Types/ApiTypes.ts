type ProductAddReq={
  body:{
    access:string,
    id:string,
    name:string,
    price:string|number
  }
}
type ProductData={
  data:{
    name:string,
    price:number,
    description?:string
    }
}