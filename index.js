const express = require('express');
const cors = require('cors')
const app = express();
const PORT = 7000;
const router = require('./routes/index')
// const cors = require('cors')

// app.use(cors({origin:'*'}))
app.use(cors({origin:5500}))

app.use(express.json())

const cart = [
    {id:1,name:"Iphone",price:40000},
    {id:2,name:"Android",price:35000}
]
let newId = 3;  

app.get('/', (req,res)=>{
    return res.send(cart)
})
app.get('/:id',(req,res)=>{
    const {id} = req.params
    const choosenOne = cart.filter(item => Number(id) ===  item.id)
    return res.send(choosenOne)
})
app.post('/',(req,res)=>{
    let {name,price} = req.body
    const newProduct = {
        id:newId++,
        name:name,
        price:price
    }
    cart.push(newProduct)
    return res.send(newProduct)
})
app.delete('/:id',(req,res)=>{
    const {id} = req.params
    cart.splice(Number(id - 1), 1)
    return res.send('Удалено')
})
app.put('/:id',(req,res)=>{
    const {id} = req.params
    const {name,price} = req.body
    const candidate = cart.find(item=> item.id === Number(id))
    candidate.name = name
    candidate.price = price
    return res.send(candidate)
})


app.listen(PORT, () => {
    console.log("Сервер запущен на http://localhost:${PORT}");
})