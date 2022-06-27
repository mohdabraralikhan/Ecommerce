const express = require('express');
const router = express.Router()

const Model = require('../model/model');
module.exports = router;

//Post Method
router.post('/post',(req,res)=>{
    const data = new Model({
        name:req.body.name,
        age:req.body.age
    })
})
try{
    const dataToSave = data.save();
res.status(200).json(dataToSave0)
}
catch(error){
    res.status(400).json({message:error.message})
}

//Get All Method
router.get('/getAll',(req,res){
    res.send('Get All API')
})

//Get By ID Method
router.get('/getOne/:id',(req,res){
    res.send('Get By ID API')
})

//Update by ID Method 
router.patch('/update/:id',(req,res)=>{
    res.send('Update By ID API')
})

//Delete by  ID Method
router.delete('/delete/:id',(req,res)=>{
    res.send('Delete by ID API')
})