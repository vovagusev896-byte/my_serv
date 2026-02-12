const Router = require("express");
const router = new Router()
const cart = [
    {id:1,name:"Iphone",price:40000},
    {id:2,name:"Android",price:35000}
]

router.get('/',(req,res)=>{
    return res.send('привет мир')
    })
cart.get('/',(req,res))=>{
    return req.cart
}
module.exports = router