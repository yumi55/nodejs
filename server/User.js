//第一种默认定义
module.exports = {
	userName:'Jack',
	sayHello:function(){
		return "hello";
	}
}

//第二种exports定义
exports.userName = 'Tom';
exports.sayHello = function(){
	return "hello";
}

//两种的区别： 第一种返回了一组object;第二种暴露了key值。
