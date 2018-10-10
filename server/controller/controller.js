const express = require('express');
const router = express.Router();
var service = require('../models/user');


exports.controlleradduser=function(userdata,res){
    console.log("add controller called"+userdata)
    service.serviceadduser(userdata, function(err, result){
        
    if(err){
       return res.send(err);
    }
    else {
        return res(null);
    }
   
})
}

exports.controllerlistuser=function(res){
//console.log("list controller called")
service.servicelistuser(function(err, result) {
    return res(null, result);
    });
}

exports.controllerdeleteuser=function(uid,res){
    console.log("delete conytroller called")
service.servicedeleteuser(uid, function(err, result){
    //console.log(result)
    return res(null, result);
})
//console.log(res);
}

exports.controlleredituser=function(uid,res){
    //console.log("edit controller called")
    service.serviceedituser(uid, function(err,result){
        return res(null, result);
    });
}

exports.controllerupdateuser=function(uid, userdata, res){
    //console.log("update controller called")
    service.serviceupdateuser(uid, userdata, function(err, result){
        return res (null, result)
    })
}