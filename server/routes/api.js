
const express = require('express');
const router = express.Router();

var user=require('../models/user')
var controller=require('../controller/controller')



router.post('/form',(req,res)=>{
  //console.log(req)
   // res.setHeader('Access-Control-Allow-Origin','*')
       var userdata = {
        firstName:req.body.fname,lastName:req.body.lname,phone:req.body.uphone,gender:req.body.ugender,dob:req.body.udob,active:req.body.uactive
       }
       controller.controlleradduser(userdata, function(err,obj){
        res.status(200);
       })
});

router.get('/list',(req,res)=>{
  //console.log("list is called" )
  res.setHeader('Access-Control-Allow-Origin','*');
  controller.controllerlistuser(function(err,result){
    //console.log(result)
res.send(result)
  })
})

router.get('/delete/:_id', (req,res)=>{

   //console.log(req.params._id);
   var uid=req.params._id;
   //console.log(uid);
   controller.controllerdeleteuser(uid, function(err,result){
     //console.log(result);
     res.send(result)
   })
})

router.get('/edit/:_id', (req,res)=>{
  //console.log(req.params._id);
  var uid=req.params._id;
  //console.log(uid);
  controller.controlleredituser(uid, function(err,result){
    //console.log(result)
    res.send(result);
  });
})

router.put('/update/:_id', (req,res) => {
  //console.log(req.params._id);
res.setHeader('Access-Control-Allow-Origin','*')
var uid=req.params._id;
 // console.log(uid)
var userdata={ 
    'firstName':req.body.fname,'lastName':req.body.lname,'phone':req.body.uphone,'gender':req.body.ugender,'dob':req.body.udob,'active':req.body.uactive 
  }
controller.controllerupdateuser(uid, userdata, function(err, result){
    res.send(result);
  });
  
});









module.exports = router;