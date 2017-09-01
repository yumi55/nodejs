var express = require('express');
var router = express.Router();
//引入mongoose
var mongoose = require("mongoose");
//加载模型表
var Goods = require('./../models/goods');

//mongoose自带的连接数据库的驱动;连接mongodb数据库
mongoose.connect('mongodb://127.0.0.1:27017/de_demo');
//如果有帐号密码：
//mongoose.connet('mongodb://root:123456@127.0.0.1:27017/dumall');
//监听数据库
//当成功时：
mongoose.connection.on("connected",function () {
  console.log("MongoDB connected success.")
})
//当失败时：
mongoose.connection.on("error",function () {
  console.log("MongoDB connected fail.")
})
//当断开时：
mongoose.connection.on("disconnected",function () {
  console.log("MongoDB connected disconnected.")
})

//实现路由：
router.get("/",function (req,res,next) {
  Goods.find({},function (err,doc) {
    if(err){
      res.json({
        status:'1',
        msg:err.message
      });
    }else{
      res.json({
          status:'0',
          msg:'',
          result:{
            count:doc.length,
            list:doc
          }
      })
    }
  })
})

// 定义了要发送出去
module.exports = router;
