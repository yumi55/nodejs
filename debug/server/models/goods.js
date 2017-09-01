var mongoose = require('mongoose')
// 定义模型
var Schema = mongoose.Schema;
//定义商品实体模型
var productSchema = new Schema({
  "productId" : String,
  "productName" : String,
  "salePrice" : Number,
  "productImage" : String,
  "productUrl" : String
});

//输出，输出后可以基于这个模型调它的api方法：
module.exports = mongoose.model("Good",productSchema,'goods');

