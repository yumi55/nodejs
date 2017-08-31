let user = require('./User');

console.log(`userName:${user.userName}`) //userName:Jack

console.log(`I'm ${user.userName} ,I say:${user.sayHello()}`) //I'm Jack ,I say:hello

//创建服务端：

let http = require('http');
let url = require('url');
let util = require('util');

let server = http.createServer((req,res)=>{
	res.statusCode = 200;
	
	res.setHeader("Content-Type","text/plain; charset=utf-8");
	
	res.end(util.inspect(url.parse(req.url))); //此时的req.url没有协议和hash等信息。

});

server.listen(3000,'127.0.0.1',()=>{
	console.log('服务器已经运行，请打开浏览器，输入 : http://127.0.0.1:3000/ 来进行访问');
});



