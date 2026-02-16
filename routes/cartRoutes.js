const Router = require("express");
const router = new Router()
const cart = [
    {id:1,name:"Iphone",price:40000},
    {id:2,name:"Android",price:35000}
]

let newId = 3; 

router.get('/', (req,res)=>{
    return res.send(cart)
})
router.get('/:id',(req,res)=>{
    const {id} = req.params
    const choosenOne = cart.filter(item => Number(id) ===  item.id)
    return res.send(choosenOne)
})
router.post('/',(req,res)=>{
    let {name,price} = req.body
    const newProduct = {
        id:newId++,
        name:name,
        price:price
    }
    cart.push(newProduct)
    return res.send(newProduct)
})
router.delete('/:id',(req,res)=>{
    const {id} = req.params
})
router.put('/:id',(req,res)=>{
    const {id} = req.params
    const {name,price} = req.body
    const candidate = cart.find(item=> item.id === Number(id))
    candidate.name = name
    candidate.price = price
    return res.send(candidate)
})
module.exports = router