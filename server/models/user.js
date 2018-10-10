const express = require('express');
const router = express.Router();
var mongoose = require('mongoose');
var userschema = mongoose.Schema({
    firstName :{type:String,required:true},
    lastName:{type:String, required:true},
    phone:{type:Number,required:true},
    gender:{type:String,required:true},
    dob:{type:String,required:true},
    active:{type:Boolean,required:true}
  });

var user = mongoose.model('data',userschema);

mongoose.connect('mongodb://localhost/studentTest');
var db = mongoose.connection;
db.on('error',console.error.bind(console,"connection error"));
db.once("open",function(callback){
  console.log('connection Establish');
});

exports.serviceadduser=function(userdata, res){
  console.log("addservice function called ")
  console.log(userdata)
  //userdata db object
  var data= new user(userdata);
  data.save(function(err, userdata){
    console.log(userdata)
    if(err){
      return err
    }
    else{
      return res(null);
    }
  });
}

exports.servicelistuser=function(res){
  //console.log("listservice file called")
  user.find({}, function(err, users) {
    if (err) {
     return res(err);
     } 
      return res(null, users);
   });
}

exports.servicedeleteuser=function(uid, res){
  console.log("delete user service called")
  user.findByIdAndRemove(uid, function(err,data){
    if(err){
      res.status(500);
    }
    //console.log(data);
    if(data){
      console.log("hellodeleted")
      return res(null);
  }
 });
}

exports.serviceedituser=function(uid, res){
  ///console.log(" edit service is called")
  user.findById(uid, function(err,data){
        if(err){
          console.log("error")
         return res(err);
        }
        if(data){
          //console.log("edit Data");
          return res(null, data)
        }
      })
}

exports.serviceupdateuser=function(uid, userdata, res){
  //console.log("update service is called")
  
  user.findByIdAndUpdate(uid, userdata, function(err,object){
        //console.log(object) 
       if(err){
         //console.log("error")
         return res(err);
     }
     if(object){
      //console.log("object data")
      return res(object);;
     }
    });
  
}



